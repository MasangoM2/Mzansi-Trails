import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-4">
        <h1 className="text-xl font-bold">Welcome to your Dashboard</h1>
        {/* Add dashboard content here */}
      </div>
    </ProtectedRoute>
  );
}
