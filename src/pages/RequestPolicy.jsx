import EmployeeLayout from "../components/employee-layout"
import PolicyRequestForm from "../components/policy-request-form"
import ContentHeader from "../components/content-header"

export default function RequestPolicy() {
  return (
    <EmployeeLayout>
      <ContentHeader title="Request New Policy" />
      <div className="mt-4">
        <PolicyRequestForm />
      </div>
    </EmployeeLayout>
  )
}
