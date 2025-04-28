import AdminLayout from "../components/admin-layout"
import AdminDashboardStats from "../components/admin-dashboard-stats"
import QuickActions from "../components/quick-actions"
import RecentActivity from "../components/recent-activity"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <AdminDashboardStats />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <QuickActions />
        <RecentActivity />
      </div>
    </AdminLayout>
  )
}
