import React, { ReactNode } from "react"
import { createContext, useContext, useState, useEffect } from "react"

// type UserRole = "admin" | "employee" | null

// interface User {
//   id: number
//   name: string
//   email: string
//   department: string | null | undefined
//   role: UserRole
//   isAdmin?: boolean
// }

// interface UserContextType {
//   user: User | null
//   setUser: (user: User | null) => void
//   isLoading: boolean
//   login: (email: string, password: string) => Promise<void>
//   logout: () => void
// }

const UserContext = createContext(undefined)

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("policyPortalUser")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Mock user data based on email
      const mockUser = {
        id: 1,
        name: email.includes("admin") ? "Admin User" : "Employee User",
        email,
        department: email.includes("admin") ? "Administration" : "General",
        role: email.includes("admin") ? "admin" : "employee",
      }

      setUser(mockUser)
      localStorage.setItem("policyPortalUser", JSON.stringify(mockUser))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("policyPortalUser")
  }

  return <UserContext.Provider value={{ user, setUser, isLoading, login, logout }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
