import AdminLayout from "../components/admin-layout"
import PolicyList from "../components/policy-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"
import { Link } from "react-router-dom"

export default function AdminPolicies() {
  return (
    <AdminLayout>
      <ContentHeader title="Policies">
        <SearchBar placeholder="Search policies..." onSearch={(query) => console.log(query)} />
        <Link
          to="/admin/policies/new"
          className="whitespace-nowrap bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-center"
        >
          Add Policy
        </Link>
      </ContentHeader>

      <div className="mt-4">
        <PolicyList isAdmin={true} />
      </div>
    </AdminLayout>
  )
}
