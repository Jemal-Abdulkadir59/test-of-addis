"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { useToast } from "@/hooks/use-toast"
import { ContactUs } from "./_components/contact-us"
import { CoreBenefits } from "./_components/core-benefits"
import { Hero } from "./_components/hero"
import { Products } from "./_components/products"
import { WhatPeopleSay } from "./_components/what-people-say"

export default function LandingPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Get error param safely after hydration
    const error = searchParams.get("error")

    if (error === "unauthorized") {
      console.log("🚫 Unauthorized access attempt detected")

      // Show toast slightly after hydration to avoid hydration conflicts
      setTimeout(() => {
        toast({
          title: "Access Denied",
          description: "You don’t have permission to access that page.",
          variant: "destructive",
        })
      }, 100)

      // Clean the URL so ?error=unauthorized disappears after toast
      const params = new URLSearchParams(searchParams)
      params.delete("error")
      const cleanUrl = `${window.location.pathname}?${params.toString()}`
      window.history.replaceState(null, "", cleanUrl)
    }
  }, [searchParams, toast])

  return (
    <div className="py-16 space-y-16 bg-muted/40">
      <Hero />
      <Products />
      <CoreBenefits />
      <WhatPeopleSay />
      <ContactUs />
    </div>
  )
}
