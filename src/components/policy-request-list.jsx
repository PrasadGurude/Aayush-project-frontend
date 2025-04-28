import React,{ useState } from "react"
import { Link } from "react-router-dom"


// interface PolicyRequest {
//   id: number
//   title: string
//   content: string
//   requestedAt: string
//   status: "Pending" | "Approved" | "Rejected"
//   requestedById: number
// }

export default function PolicyRequestList({ isAdmin = false }) {
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: "Company Data Protection Policy",
      content: "The policy outlines the company's approach to...",
      requestedAt: "25/04/2025 10:53 am",
      status: "Pending",
      requestedById: 2,
    },
    {
      id: 2,
      title: "Flexible Working Hours Policy",
      content: "A policy to allow employees to have flexible working hours...",
      requestedAt: "20/04/2025 09:30 am",
      status: "Approved",
      requestedById: 3,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
    {
      id: 3,
      title: "Equipment Borrowing Policy",
      content: "Guidelines for borrowing company equipment for home use...",
      requestedAt: "15/04/2025 02:15 pm",
      status: "Rejected",
      requestedById: 4,
    },
  ])

  const [filteredRequests, setFilteredRequests] = useState(requests)

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
                Requested At
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
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
            {filteredRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={isAdmin ? `/admin/policy-requests/${request.id}` : `/policy-requests/${request.id}`}
                    className="text-blue-600 hover:text-blue-900 font-medium"
                  >
                    {request.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.requestedAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(request.status)}`}
                  >
                    {request.status}
                  </span>
                </td>
                {isAdmin && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/admin/policy-requests/${request.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Review
                    </Link>
                    {request.status === "Pending" && (
                      <>
                        <button className="text-green-600 hover:text-green-900 mr-4">Approve</button>
                        <button className="text-red-600 hover:text-red-900">Reject</button>
                      </>
                    )}
                  </td>
                )}
              </tr>
            ))}

            {filteredRequests.length === 0 && (
              <tr>
                <td colSpan={isAdmin ? 4 : 3} className="px-6 py-4 text-center text-gray-500">
                  No policy requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
