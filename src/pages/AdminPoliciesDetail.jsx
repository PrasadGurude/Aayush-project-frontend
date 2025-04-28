"use client"

import { useParams } from "react-router-dom"
import AdminLayout from "../components/admin-layout"
import PolicyDetail from "../components/policy-detail"

export default function AdminPoliciesDetail() {
  const params = useParams()
  const policyId = Number(params.id)

  // In a real app, you would fetch the policy data from an API
  const policy = {
    id: policyId,
    title: "Remote Work Policy",
    department: "Human Resources",
    content: `# Remote Work Policy

## Purpose
This policy establishes guidelines for working from remote locations outside the company's offices.

## Scope
This policy applies to all employees who work remotely, whether occasionally or regularly.

## Policy Guidelines

### Eligibility
- Employees must have completed at least 3 months of employment
- Job responsibilities must be suitable for remote work
- Employee must have reliable internet connection and appropriate workspace

### Work Hours and Availability
- Remote employees are expected to maintain their regular work schedule
- Employees must be available during core business hours (10:00 AM - 3:00 PM)
- Employees must attend scheduled meetings virtually

### Equipment and Technology
- The company will provide necessary equipment (laptop, software)
- Employees are responsible for maintaining secure internet connection
- IT support will be available remotely during business hours

### Security and Confidentiality
- All company security policies apply to remote work
- Employees must ensure confidential information is protected
- VPN must be used when accessing company systems

### Performance Expectations
- Remote employees are held to the same performance standards as in-office employees
- Regular check-ins with managers are required
- Performance will be evaluated based on output and results

## Review and Approval
This policy was last reviewed and approved on April 20, 2025.`,
    createdAt: "20/04/2025 09:30 am",
    lastUpdatedAt: "20/04/2025 09:30 am",
    createdBy: "John Doe",
  }

  return (
    <AdminLayout>
      <PolicyDetail policy={policy} isAdmin={true} />
    </AdminLayout>
  )
}
