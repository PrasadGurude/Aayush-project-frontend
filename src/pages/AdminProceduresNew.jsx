import AdminLayout from "../components/admin-layout"
import ProcedureForm from "../components/procedure-form"
import ContentHeader from "../components/content-header"

export default function AdminProceduresNew() {
  return (
    <AdminLayout>
      <ContentHeader title="Create New Procedure" />
      <div className="mt-4">
        <ProcedureForm />
      </div>
    </AdminLayout>
  )
}
