import AdminLayout from "../components/admin-layout"
import FAQList from "../components/faq-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"
import {Link} from "react-router-dom"

export default function AdminFAQs() {
  return (
    <AdminLayout>
      <ContentHeader title="Frequently Asked Questions">
        <SearchBar placeholder="Search FAQs..." onSearch={(query) => console.log(query)} />
        <Link
          to="/admin/faqs/new"
          className="whitespace-nowrap bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors text-center"
        >
          Add FAQ
        </Link>
      </ContentHeader>

      <div className="mt-4">
        <FAQList isAdmin={true} />
      </div>
    </AdminLayout>
  )
}
