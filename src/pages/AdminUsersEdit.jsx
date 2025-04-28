import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import UserForm from "../components/user-form"
import ContentHeader from "../components/content-header"

export default function AdminUsersEdit() {
  const params = useParams()
  const userId = Number(params.id)

  // In a real app, you would fetch the user data from an API
  const user = {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
    department: "IT",
  }

  return (
    <AdminLayout>
      <ContentHeader title="Edit User" />
      <div className="mt-4">
        <UserForm isEditing={true} initialData={user} />
      </div>
    </AdminLayout>
  )
}
