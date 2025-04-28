
import React ,{ useState } from "react"
import { Link } from "react-router-dom"


// interface FAQ {
//   id: number
//   question: string
//   answer: string
// }

export default function FAQList({ isAdmin = false }) {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How can I reset my company email password?",
      answer: "You can reset your email password by visiting the IT portal or contacting the IT helpdesk.",
    },
    {
      id: 2,
      question: "What is the process for requesting time off?",
      answer: "Submit a time off request through the HR portal at least two weeks in advance.",
    },
    {
      id: 3,
      question: "How do I submit an expense report?",
      answer: "Expense reports should be submitted through the finance portal with all receipts attached.",
    },
    {
      id: 4,
      question: "What is the dress code policy?",
      answer: "The company follows a business casual dress code Monday through Thursday, and casual on Friday.",
    },
    {
      id: 5,
      question: "How do I access the VPN?",
      answer: "Instructions for VPN access can be found in the IT section of the company intranet.",
    },
  ])

  const [filteredFaqs, setFilteredFaqs] = useState(faqs)

  return (
    <div className="bg-white rounded-b-lg shadow-md">
      <div className="p-6">
        <div className="space-y-6">
          {filteredFaqs.map((faq) => (
            <div key={faq.id} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                {isAdmin && (
                  <div className="flex space-x-2">
                    <Link to={`/admin/faqs/${faq.id}/edit`} className="text-blue-600 hover:text-blue-900">
                      Edit
                    </Link>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </div>
                )}
              </div>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <p className="text-gray-500 text-center py-4">No FAQs found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  )
}
