
import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import ResetPasswordForm from "../components/reset-password-form"
import ContentHeader from "../components/content-header"

export default function AdminUsersResetPassword() {
  const params = useParams()
  const userId = Number(params.id)

  // In a real app, you would fetch the user data from an API
  const userName = "John Doe" // This would be fetched from the API

  return (
    <AdminLayout>
      <ContentHeader title={`Reset Password for ${userName}`} />
      <div className="mt-4">
        <ResetPasswordForm userId={userId} userName={userName} />
      </div>
    </AdminLayout>
  )
}
