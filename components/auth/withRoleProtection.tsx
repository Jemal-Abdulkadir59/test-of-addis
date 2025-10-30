import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"

type Role = "admin" | "rider" | "kitchen" | "customer"

export function withRoleProtection(
  allowedRoles: Role[],
  Layout: (props: { children: React.ReactNode }) => Promise<React.ReactElement>
) {
  return async function ProtectedLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    // Get session on the server side
    const session = await getServerSession(authOptions)

    // 1️⃣ If not logged in → redirect to sign-in
    if (!session) {
      redirect("/auth/sign-in")
    }

    // Ensure we have a role on the user object (runtime check since type may not include it)
    const userRole = (session.user as any)?.role as Role | undefined

    // 2️⃣ If user’s role not allowed or missing → redirect to unauthorized
    if (!userRole || !allowedRoles.includes(userRole)) {
      redirect("/unauthorized")
    }

    // 3️⃣ Otherwise render the layout
    return <>{await Layout({ children })}</>
  }
}
