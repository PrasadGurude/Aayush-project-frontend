import AdminLayout from "../components/admin-layout"
import UserForm from "../components/user-form"
import ContentHeader from "../components/content-header"

export default function AdminUsersNew() {
  return (
    <AdminLayout>
      <ContentHeader title="Register New User" />
      <div className="mt-4">
        <UserForm />
      </div>
    </AdminLayout>
  )
}
