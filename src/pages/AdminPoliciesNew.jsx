import AdminLayout from "../components/admin-layout"
import PolicyForm from "../components/policy-form"
import ContentHeader from "../components/content-header"

export default function AdminPoliciesNew() {
  return (
    <AdminLayout>
      <ContentHeader title="Create New Policy" />
      <div className="mt-4">
        <PolicyForm />
      </div>
    </AdminLayout>
  )
}
