import AdminLayout from "../components/admin-layout"
import UserList from "../components/user-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"
import { Link } from "react-router-dom"

export default function AdminUsers() {
  return (
    <AdminLayout>
      <ContentHeader title="Users">
        <SearchBar placeholder="Search users..." onSearch={(query) => console.log(query)} />
        <Link
          href="/admin/users/new"
          className="whitespace-nowrap bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-center"
        >
          Add User
        </Link>
      </ContentHeader>

      <div className="mt-4">
        <UserList />
      </div>
    </AdminLayout>
  )
}
