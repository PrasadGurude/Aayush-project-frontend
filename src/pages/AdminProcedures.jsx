import AdminLayout from "../components/admin-layout"
import ProcedureList from "../components/procedure-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"
import {Link} from "react-router-dom"

export default function AdminProcedures() {
  return (
    <AdminLayout>
      <ContentHeader title="Procedures">
        <SearchBar placeholder="Search procedures..." onSearch={(query) => console.log(query)} />
        <Link
          to="/admin/procedures/new"
          className="whitespace-nowrap bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-center"
        >
          Add Procedure
        </Link>
      </ContentHeader>

      <div className="mt-4">
        <ProcedureList isAdmin={true} />
      </div>
    </AdminLayout>
  )
}
