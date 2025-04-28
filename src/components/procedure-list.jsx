import React ,{ useState } from "react"
import { Link } from "react-router-dom"

// interface Procedure {
//   id: number
//   title: string
//   department: string
//   steps: string
//   createdAt: string
//   lastUpdatedAt: string
//   createdBy: string
// }

export default function ProcedureList({ isAdmin = false }) {
  const [procedures, setProcedures] = useState([
    {
      id: 1,
      title: "Onboarding New Employees",
      department: "Human Resources",
      steps: "1. Prepare workstation...",
      createdAt: "25/04/2025 10:46 am",
      lastUpdatedAt: "25/04/2025 10:46 am",
      createdBy: "megha.kapoor@example.com",
    },
    {
      id: 2,
      title: "Expense Claim Process",
      department: "Finance",
      steps: "1. Fill out expense form...",
      createdAt: "20/04/2025 09:30 am",
      lastUpdatedAt: "20/04/2025 09:30 am",
      createdBy: "john.doe@example.com",
    },
    {
      id: 3,
      title: "IT Support Request",
      department: "IT",
      steps: "1. Submit ticket through portal...",
      createdAt: "15/04/2025 02:15 pm",
      lastUpdatedAt: "15/04/2025 02:15 pm",
      createdBy: "alex.tech@example.com",
    },
  ])

  const [filteredProcedures, setFilteredProcedures] = useState(procedures)

  return (
    <div className="bg-white rounded-b-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Department
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Created At
              </th>
              {isAdmin && (
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProcedures.map((procedure) => (
              <tr key={procedure.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={isAdmin ? `/admin/procedures/${procedure.id}` : `/procedures/${procedure.id}`}
                    className="text-blue-600 hover:text-blue-900 font-medium"
                  >
                    {procedure.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{procedure.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{procedure.createdAt}</td>
                {isAdmin && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/admin/procedures/${procedure.id}/edit`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Edit
                    </Link>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                )}
              </tr>
            ))}

            {filteredProcedures.length === 0 && (
              <tr>
                <td colSpan={isAdmin ? 4 : 3} className="px-6 py-4 text-center text-gray-500">
                  No procedures found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
