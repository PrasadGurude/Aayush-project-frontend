import React, {ReactNode } from "react"
import EmployeeNavbar from "./employee-navbar"


export default function EmployeeLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <EmployeeNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
    </div>
  )
}
