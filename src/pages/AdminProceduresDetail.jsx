import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import ProcedureDetail from "../components/procedure-detail"

export default function AdminProceduresDetail() {
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
      "Conduct first-week check-in",
      "Schedule 30-day review",
    ],
    createdAt: "25/04/2025 10:46 am",
    lastUpdatedAt: "25/04/2025 10:46 am",
    createdBy: "Jane Smith",
  }

  return (
    <AdminLayout>
      <ProcedureDetail procedure={procedure} isAdmin={true} />
    </AdminLayout>
  )
}
