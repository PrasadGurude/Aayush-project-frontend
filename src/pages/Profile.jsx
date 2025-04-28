import EmployeeLayout from "../components/employee-layout"
import UserProfileForm from "../components/user-profile-form"
import ContentHeader from "../components/content-header"

export default function Profile() {
  return (
    <EmployeeLayout>
      <ContentHeader title="Your Profile" />
      <div className="mt-4">
        <UserProfileForm />
      </div>
    </EmployeeLayout>
  )
}
