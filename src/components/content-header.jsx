import React,{ ReactNode } from "react"

export default function ContentHeader({ title, children }) {
  return (
    <div className="bg-white rounded-t-lg shadow-md p-6 border-b sticky top-16 z-40">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {children && <div className="flex flex-col sm:flex-row gap-4">{children}</div>}
      </div>
    </div>
  )
}
