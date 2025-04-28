import EmployeeLayout from "../components/employee-layout"
import ProcedureList from "../components/procedure-list"
import ContentHeader from "../components/content-header"
import SearchBar from "../components/search-bar"

export default function Procedures() {
  return (
    <EmployeeLayout>
      <ContentHeader title="Procedures">
        <SearchBar placeholder="Search procedures..." onSearch={(query) => console.log(query)} />
      </ContentHeader>

      <div className="mt-4">
        <ProcedureList />
      </div>
    </EmployeeLayout>
  )
}
