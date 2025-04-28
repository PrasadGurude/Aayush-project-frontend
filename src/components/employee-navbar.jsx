import React,{ useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { useUser } from "../context/user-context"

export default function EmployeeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logout } = useUser()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/dashboard" className="font-bold text-xl">
                Policy Portal
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Dashboard
                </Link>
                <Link to="/policies" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Policies
                </Link>
                <Link to="/procedures" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Procedures
                </Link>
                <Link to="/faqs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  FAQs
                </Link>
                <Link to="/request-policy" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  Request Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/profile" className="text-gray-300 text-sm mr-4 hover:text-white">
                {user?.name || "Employee"}
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* X icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/policies"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Policies
          </Link>
          <Link
            to="/procedures"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Procedures
          </Link>
          <Link
            to="/faqs"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            to="/request-policy"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Request Policy
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center justify-between px-5">
            <div>
              <div className="text-base font-medium leading-none text-white">{user?.name || "Employee"}</div>
              <div className="text-sm font-medium leading-none text-gray-400 mt-1">
                {user?.email || "employee@example.com"}
              </div>
            </div>
            <div className="flex space-x-3">
              <Link
                to="/profile"
                className="bg-gray-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
