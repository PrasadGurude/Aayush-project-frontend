import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import FAQForm from "../components/faq-form"
import ContentHeader from "../components/content-header"

export default function AdminFaqsEdit() {
  const params = useParams()
  const faqId = Number(params.id)

  // In a real app, you would fetch the FAQ data from an API
  const faq = {
    id: faqId,
    question: "How can I reset my company email password?",
    answer: "You can reset your email password by visiting the IT portal or contacting the IT helpdesk.",
  }

  return (
    <AdminLayout>
      <ContentHeader title="Edit FAQ" />
      <div className="mt-4">
        <FAQForm isEditing={true} initialData={faq} />
      </div>
    </AdminLayout>
  )
}
