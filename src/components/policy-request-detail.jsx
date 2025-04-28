
import React ,{ useState } from "react"
import { useNavigate } from "react-router-dom"


// interface PolicyRequestDetailProps {
//   request: {
//     id: number
//     title: string
//     content: string
//     requestedAt: string
//     status: "Pending" | "Approved" | "Rejected"
//     requestedBy: string
//     comments?: string
//   }
//   isAdmin?: boolean
// }

export default function PolicyRequestDetail({ request, isAdmin = false }) {
  const [status, setStatus] = useState(request.status)
  const [comments, setComments] = useState(request.comments || "")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  const handleApprove = async () => {
    setIsSubmitting(true)
    setError("")

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("Approved")
      setSuccess(true)

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/admin/policy-requests")
      }, 2000)
    } catch (err) {
      setError("Failed to approve request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReject = async () => {
    setIsSubmitting(true)
    setError("")

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("Rejected")
      setSuccess(true)

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate("/admin/policy-requests")
      }, 2000)
    } catch (err) {
      setError("Failed to reject request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Approved":
        return "bg-green-100 text-green-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {error && <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">{error}</div>}
      {success && (
        <div className="mb-4 bg-green-50 text-green-700 p-3 rounded-md">
          <p>Request has been {status.toLowerCase()}. You will be redirected to the policy requests list.</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-900">{request.title}</h1>
          <span
            className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusBadgeClass(
              status,
            )}`}
          >
            {status}
          </span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <p>Requested by: {request.requestedBy}</p>
          <p>Requested at: {request.requestedAt}</p>
        </div>
      </div>

      <div className="prose max-w-none mb-6">
        <h2 className="text-lg font-semibold mb-2">Request Details</h2>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-line mb-4">
          {request.content}
        </div>

        {isAdmin && (
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
              Admin Comments
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add comments about this request..."
              disabled={status !== "Pending" || isSubmitting}
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => navigate(isAdmin ? "/admin/policy-requests" : "/policy-requests")}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Requests
        </button>

        {isAdmin && status === "Pending" && !success && (
          <>
            <button
              onClick={handleReject}
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Reject Request"}
            </button>
            <button
              onClick={handleApprove}
              disabled={isSubmitting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Approve Request"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
