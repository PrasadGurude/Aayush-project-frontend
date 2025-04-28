import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/landing-page'
import AdminDashboard from './pages/AdminDashboard'
import AdminFAQs from './pages/AdminFaqs'
import AdminFaqsNew from './pages/AdminFaqsNew'
import AdminFaqsEdit from './pages/AdminFaqsEdit'
import AdminPolicies from './pages/AdminPolicies'
import AdminPoliciesNew from './pages/AdminPoliciesNew'
import AdminPoliciesDetail from './pages/AdminPoliciesDetail'
import AdminPoliciesEdit from './pages/AdminPoliciesEdit'
import AdminPolicyRequests from './pages/AdminPolicyRequests'
import AdminPolicyRequestsDetail from './pages/AdminPolicyRequestsDetail'
import AdminProcedures from './pages/AdminProcedures'
import AdminProceduresNew from './pages/AdminProceduresNew'
import AdminProceduresDetail from './pages/AdminProceduresDetail'
import AdminProceduresEdit from './pages/AdminProceduresEdit'
import AdminUsers from './pages/AdminUsers'
import AdminUsersNew from './pages/AdminUsersNew'
import AdminUsersDetail from './pages/AdminUsersDetail'
import AdminUsersEdit from './pages/AdminUsersEdit'
import AdminUsersResetPassword from './pages/AdminUsersResetPassword'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Faqs from './pages/Faqs'
import ForgotPassword from './pages/ForgotPassword'
import Policies from './pages/Policies'
import ViewPolicyDetail from './pages/PolicyDetail'
import PolicyRequests from './pages/PolicyRequests'
import ViewPolicyRequestDetail from './pages/PolicyRequestDetail'
import Procedures from './pages/Procedures'
import ViewProcedureDetail from './pages/ProcedureDetail'
import Profile from './pages/Profile'
import RequestPolicy from './pages/RequestPolicy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>

      {/* Admin routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/faqs" element={<AdminFAQs />} />
        <Route path="/admin/faqs/new" element={<AdminFaqsNew />} />
       {/* <Route path="/admin/faqs/:id" element={<AdminFaqsDetaill />} />*/}
        <Route path="/admin/faqs/:id/edit" element={<AdminFaqsEdit />} />

        <Route path="/admin/policies" element={<AdminPolicies />} />
        <Route path="/admin/policies/new" element={<AdminPoliciesNew />} />
        <Route path="/admin/policies/:id" element={<AdminPoliciesDetail />} />
        <Route path="/admin/policies/:id/edit" element={<AdminPoliciesEdit />} />

        <Route path="/admin/policy-requests" element={<AdminPolicyRequests />} />
        <Route path="/admin/policy-requests/:id" element={<AdminPolicyRequestsDetail />} />

        <Route path="/admin/procedures" element={<AdminProcedures />} />
        <Route path="/admin/procedures/new" element={<AdminProceduresNew />} />
        <Route path="/admin/procedures/:id" element={<AdminProceduresDetail />} />
        <Route path="/admin/procedures/:id/edit" element={<AdminProceduresEdit />} />

        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/new" element={<AdminUsersNew />} />
        <Route path="/admin/users/:id" element={<AdminUsersDetail />} />
        <Route path="/admin/users/:id/edit" element={<AdminUsersEdit />} />
        <Route path="/admin/users/:id/reset-password" element={<AdminUsersResetPassword />} />

        {/* Main app routes */}
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/policies" element={<Policies />} />
        <Route path="/policies/:id" element={<ViewPolicyDetail />} />

        <Route path="/policy-requests" element={<PolicyRequests />} />
        <Route path="/policy-requests/:id" element={<ViewPolicyRequestDetail />} />

        <Route path="/procedures" element={<Procedures />} />
        <Route path="/procedures/:id" element={<ViewProcedureDetail />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/request-policy" element={<RequestPolicy />} />


        
        
      </Routes>
    </div>
  )
}

export default App
