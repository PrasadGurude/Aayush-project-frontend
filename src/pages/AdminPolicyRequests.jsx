import AdminLayout from "../components/admin-layout"
import PolicyRequestList from "../components/policy-request-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"

export default function AdminPolicyRequests() {
  return (
    <AdminLayout>
      <ContentHeader title="Policy Requests">
        <SearchBar placeholder="Search requests..." onSearch={(query) => console.log(query)} />
      </ContentHeader>

      <div className="mt-4">
        <PolicyRequestList isAdmin={true} />
      </div>
    </AdminLayout>
  )
}
