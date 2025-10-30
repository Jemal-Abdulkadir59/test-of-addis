// /lib/checkUserRole.ts
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"

type Role = "admin" | "rider" | "kitchen" | "user"

export async function checkUserRole(allowedRoles: Role[]) {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = await headers()
    const path = headersList.get("x-invoke-path") || "/" // current page
    const redirectTo = encodeURIComponent(path) // encode it for URL

    // Redirect to sign-in with `redirectTo` query (matches your SignInForm)
    redirect(`/auth/sign-in?redirectTo=${redirectTo}`)
  }

  const userRole = (session.user as { role?: Role }).role

  if (!userRole) {
    redirect("/unauthorized")
  }

  if (!allowedRoles.includes(userRole as Role)) {
    redirect("/unauthorized")
  }

  return session
}
