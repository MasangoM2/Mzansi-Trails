import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (
      typeof decoded !== "object" || 
      decoded === null || 
      !("userId" in decoded)
    ) {
      return res.status(401).json({ error: "Invalid token payload" });
    }

    // Type assertion to help TypeScript
    const userId = (decoded as JwtPayload & { userId: string }).userId;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(401).json({ error: "User not found" });

    res.json({ user: { id: user.id, email: user.email, role: user.role } });
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}
