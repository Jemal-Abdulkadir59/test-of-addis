import type { LocaleType } from "@/types"
import type { ReactNode } from "react"

// import { checkUserRole } from "@/lib/checkUserRole"

import { Layout } from "@/components/layout"

export default async function DashboardLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  // ✅ Protect this layout for specific roles
  // await checkUserRole(["admin"]) // <-- choose roles allowed

  const { children } = props

  return <Layout>{children}</Layout>
}
