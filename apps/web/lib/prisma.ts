// apps/web/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Optional: logs SQL queries
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
