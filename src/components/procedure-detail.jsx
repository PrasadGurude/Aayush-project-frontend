
import React,{ useState } from "react"
import { Link , useNavigate } from "react-router-dom"

// interface ProcedureDetailProps {
//   procedure: {
//     id: number
//     title: string
//     department: string
//     steps: string[]
//     createdAt: string
//     lastUpdatedAt: string
//     createdBy?: string
//   }
//   isAdmin?: boolean
// }

export default function ProcedureDetail({ procedure, isAdmin = false }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this procedure?")) {
      return
    }

    setIsDeleting(true)
    setError("")

    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate(isAdmin ? "/admin/procedures" : "/procedures")
    } catch (err) {
      setError("Failed to delete procedure. Please try again.")
      setIsDeleting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {error && <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">{error}</div>}

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{procedure.title}</h1>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
          <span>Department: {procedure.department}</span>
          <span>•</span>
          <span>Created: {procedure.createdAt}</span>
          <span>•</span>
          <span>Last Updated: {procedure.lastUpdatedAt}</span>
          {procedure.createdBy && (
            <>
              <span>•</span>
              <span>Created By: {procedure.createdBy}</span>
            </>
          )}
        </div>
      </div>

      <div className="prose max-w-none mb-6">
        <h2 className="text-xl font-semibold mb-4">Procedure Steps</h2>
        <ol className="list-decimal pl-5 space-y-3">
          {procedure.steps.map((step, index) => (
            <li key={index} className="pl-2">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => navigate(isAdmin ? "/admin/procedures" : "/procedures")}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Procedures
        </button>

        {isAdmin && (
          <>
            <Link
              to={`/admin/procedures/${procedure.id}/edit`}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Edit Procedure
            </Link>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete Procedure"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
