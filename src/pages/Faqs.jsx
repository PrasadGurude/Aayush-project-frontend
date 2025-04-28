import EmployeeLayout from "../components/employee-layout"
import FAQList from "../components/faq-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"

export default function Faqs() {
  return (
    <EmployeeLayout>
      <ContentHeader title="Frequently Asked Questions">
        <SearchBar placeholder="Search FAQs..." onSearch={(query) => console.log(query)} />
      </ContentHeader>

      <div className="mt-4">
        <FAQList />
      </div>
    </EmployeeLayout>
  )
}
