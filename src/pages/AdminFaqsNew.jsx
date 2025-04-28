import AdminLayout from "../components/admin-layout"
import FAQForm from "../components/faq-form"
import ContentHeader from "../components/content-header"

export default function AdminFaqsNew() {
  return (
    <AdminLayout>
      <ContentHeader title="Create New FAQ" />
      <div className="mt-4">
        <FAQForm />
      </div>
    </AdminLayout>
  )
}
