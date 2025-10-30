import type { LocaleType } from "@/types"
import type { ReactNode } from "react"

import { Layout } from "@/components/layout/rider-dashboard-layout"

export default async function DashboardLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  const { children } = props

  return <Layout>{children}</Layout>
}
