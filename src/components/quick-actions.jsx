import { Link } from "react-router-dom"
import React from "react"

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <Link
          to="/admin/users/new"
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register New User
        </Link>
        <Link
          to="/admin/policies/new"
          className="block w-full bg-green-600 text-white text-center py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Create New Policy
        </Link>
        <Link
          to="/admin/procedures/new"
          className="block w-full bg-purple-600 text-white text-center py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
        >
          Create New Procedure
        </Link>
        <Link
          to="/admin/faqs/new"
          className="block w-full bg-yellow-600 text-white text-center py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors"
        >
          Create New FAQ
        </Link>
      </div>
    </div>
  )
}
