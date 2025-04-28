"use client"

import React ,{ useState } from "react"
import { Link } from "react-router-dom"


// interface User {
//   id: number
//   name: string
//   email: string
//   department: string
// }

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", department: "IT" },
    { id: 2, name: "Aayush Dhamdhare", email: "aayush@example.com", department: "Intern" },
    { id: 3, name: "Jane Smith", email: "jane@example.com", department: "HR" },
    { id: 4, name: "Mike Johnson", email: "mike@example.com", department: "Finance" },
    { id: 5, name: "Sarah Williams", email: "sarah@example.com", department: "Marketing" },
  ])

  const [filteredUsers, setFilteredUsers] = useState(users)

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
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.department}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link to={`/admin/users/${user.id}/edit`} className="text-blue-600 hover:text-blue-900 mr-4">
                    Edit
                  </Link>
                  <Link
                    to={`/admin/users/${user.id}/reset-password`}
                    className="text-green-600 hover:text-green-900 mr-4"
                  >
                    Reset Password
                  </Link>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
