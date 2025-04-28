import EmployeeLayout from "../components/employee-layout"
import PolicyList from "../components/policy-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"

export default function Policies() {
  return (
    <EmployeeLayout>
      <ContentHeader title="Policies">
        <SearchBar placeholder="Search policies..." onSearch={(query) => console.log(query)} />
      </ContentHeader>

      <div className="mt-4">
        <PolicyList />
      </div>
    </EmployeeLayout>
  )
}
