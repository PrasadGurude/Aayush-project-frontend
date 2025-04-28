import React from "react"


export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      title: "New policy request submitted",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Remote Work Policy updated",
      time: "Yesterday at 10:46 am",
    },
    {
      id: 3,
      title: "New user registered",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "New FAQ added",
      time: "3 days ago",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b pb-4 last:border-0 last:pb-0">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
