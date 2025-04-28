import React,{ useState } from "react"
import { Link , useNavigate } from "react-router-dom"

// interface PolicyDetailProps {
//   policy: {
//     id: number
//     title: string
//     department: string
//     content: string
//     createdAt: string
//     lastUpdatedAt: string
//     createdBy?: string
//   }
//   isAdmin?: boolean
// }

export default function PolicyDetail({ policy, isAdmin = false }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this policy?")) {
      return
    }

    setIsDeleting(true)
    setError("")

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate(isAdmin ? "/admin/policies" : "/policies")
    } catch (err) {
      setError("Failed to delete policy. Please try again.")
      setIsDeleting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {error && <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">{error}</div>}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{policy.title}</h1>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
          <span>Department: {policy.department}</span>
          <span>•</span>
          <span>Created: {policy.createdAt}</span>
          <span>•</span>
          <span>Last Updated: {policy.lastUpdatedAt}</span>
          {policy.createdBy && (
            <>
              <span>•</span>
              <span>Created By: {policy.createdBy}</span>
            </>
          )}
        </div>
      </div>

      <div className="prose max-w-none mb-6">
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 whitespace-pre-line">{policy.content}</div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => navigate(isAdmin ? "/admin/policies" : "/policies")}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Policies
        </button>

        {isAdmin && (
          <>
            <Link
              to={`/admin/policies/${policy.id}/edit`}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Edit Policy
            </Link>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete Policy"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
