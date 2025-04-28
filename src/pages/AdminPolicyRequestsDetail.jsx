import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import PolicyRequestDetail from "../components/policy-request-detail"

export default function AdminPolicyRequestsDetail() {
  const params = useParams()
  const requestId = Number(params.id)

  // In a real app, you would fetch the policy request data from an API
  const request = {
    id: requestId,
    title: "Company Data Protection Policy",
    content: `I would like to request a comprehensive data protection policy that covers:

1. Guidelines for handling sensitive customer data
2. Procedures for reporting data breaches
3. Requirements for data encryption
4. Rules for data retention and deletion
5. Training requirements for employees

This policy is needed because we currently lack clear guidelines on how to handle customer data, especially with the recent increase in remote work.`,
    requestedAt: "25/04/2025 10:53 am",
    status: "Pending" ,
    requestedBy: "John Doe",
  }

  return (
    <AdminLayout>
      <PolicyRequestDetail request={request} isAdmin={true} />
    </AdminLayout>
  )
}
