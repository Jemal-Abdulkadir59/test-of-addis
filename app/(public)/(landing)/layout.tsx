import type { LocaleType } from "@/types"
import type { ReactNode } from "react"

import { Layout } from "./_components/layout"

export default async function LandingLayout(props: {
  children: ReactNode
  params: Promise<{ lang: LocaleType }>
}) {
  const params = await props.params

  const { children } = props

  return <Layout>{children}</Layout>
}
