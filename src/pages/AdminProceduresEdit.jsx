import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import ProcedureForm from "../components/procedure-form"
import ContentHeader from "../components/content-header"

export default function AdminProceduresEdit() {
  const params = useParams()
  const procedureId = Number(params.id)

  // In a real app, you would fetch the procedure data from an API
  const procedure = {
    id: procedureId,
    title: "Onboarding New Employees",
    department: "Human Resources",
    steps: [
      "Prepare workstation and equipment",
      "Set up email and system accounts",
      "Schedule orientation session",
      "Assign a mentor",
      "Complete paperwork and training",
    ],
  }

  return (
    <AdminLayout>
      <ContentHeader title="Edit Procedure" />
      <div className="mt-4">
        <ProcedureForm isEditing={true} initialData={procedure} />
      </div>
    </AdminLayout>
  )
}
