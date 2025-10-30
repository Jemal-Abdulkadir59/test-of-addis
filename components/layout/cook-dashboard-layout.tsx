"use client"

import type { ReactNode } from "react"

import { useIsVertical } from "@/hooks/use-is-vertical"
import { HorizontalLayout } from "./horizontal-layout-cook"
import { VerticalLayout } from "./vertical-layout-cook"

export function Layout({ children }: { children: ReactNode }) {
  const isVertical = useIsVertical()

  return isVertical ? (
    <VerticalLayout>{children}</VerticalLayout>
  ) : (
    <HorizontalLayout>{children}</HorizontalLayout>
  )
}
