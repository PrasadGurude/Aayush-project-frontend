
import React ,{ useState } from "react"
import { Link } from "react-router-dom"

// interface Policy {
//   id: number
//   title: string
//   department: string
//   content: string
//   createdAt: string
//   lastUpdatedAt: string
// }

export default function PolicyList({ isAdmin = false }) {
  const [policies, setPolicies] = useState([
    {
      id: 1,
      title: "Remote Work Policy",
      department: "Human Resources",
      content: "This policy sets out guidelines for employees who work from home or other locations.",
      createdAt: "25/04/2025 10:46 am",
      lastUpdatedAt: "25/04/2025 10:46 am",
    },
    {
      id: 2,
      title: "Data Protection Policy",
      department: "IT",
      content: "This policy outlines how we protect customer and employee data.",
      createdAt: "20/04/2025 09:30 am",
      lastUpdatedAt: "20/04/2025 09:30 am",
    },
    {
      id: 3,
      title: "Travel Expense Policy",
      department: "Finance",
      content: "Guidelines for claiming travel expenses.",
      createdAt: "15/04/2025 02:15 pm",
      lastUpdatedAt: "15/04/2025 02:15 pm",
    },
  ])

  const [filteredPolicies, setFilteredPolicies] = useState(policies)

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
            {filteredPolicies.map((policy) => (
              <tr key={policy.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={isAdmin ? `/admin/policies/${policy.id}` : `/policies/${policy.id}`}
                    className="text-blue-600 hover:text-blue-900 font-medium"
                  >
                    {policy.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.createdAt}</td>
                {isAdmin && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link to={`/admin/policies/${policy.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                      Edit
                    </Link>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                )}
              </tr>
            ))}

            {filteredPolicies.length === 0 && (
              <tr>
                <td colSpan={isAdmin ? 4 : 3} className="px-6 py-4 text-center text-gray-500">
                  No policies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
