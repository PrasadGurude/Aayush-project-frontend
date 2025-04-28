import EmployeeLayout from "../components/employee-layout"
import EmployeeDashboardCards from "../components/employee-dashboard-cards"
import PolicyRequestList from "../components/policy-request-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"

export default function Dashboard() {
  return (
    <EmployeeLayout>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Employee Dashboard</h1>

      <EmployeeDashboardCards />

      <div className="mt-8">
        <ContentHeader title="Your Policy Requests">
          <SearchBar placeholder="Search requests..." onSearch={(query) => console.log(query)} />
        </ContentHeader>
        <div className="mt-4">
          <PolicyRequestList />
        </div>
      </div>
    </EmployeeLayout>
  )
}
