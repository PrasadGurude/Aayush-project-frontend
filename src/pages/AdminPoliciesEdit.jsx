
import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import PolicyForm from "../components/policy-form"
import ContentHeader from "../components/content-header"

export default function AdminPoliciesEdit() {
  const params = useParams()
  const policyId = Number(params.id)

  // In a real app, you would fetch the policy data from an API
  const policy = {
    id: policyId,
    title: "Remote Work Policy",
    department: "Human Resources",
    content: "This policy establishes guidelines for working from remote locations outside the company's offices.",
  }
  return (
    <AdminLayout>
      <ContentHeader title="Edit Policy" />
      <div className="mt-4">
        <PolicyForm isEditing={true} initialData={policy} />
      </div>
    </AdminLayout>
  )
}
