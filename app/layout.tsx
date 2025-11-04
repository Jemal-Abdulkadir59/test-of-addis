import { Cairo, Lato } from "next/font/google"

import { cn } from "@/lib/utils"

import "./globals.css"

import { Providers } from "@/providers"
import { BrowserRouter } from "react-router-dom"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { ApolloProviders } from "./ApolloProviders"
import { SessionProviders } from "./SessionProviders"

// Define metadata for the application
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: {
    template: "%s | Shadboard",
    default: "Online Restaurant",
  },
  description: " Menu & Ordering System for Restaurants",
  metadataBase: new URL(process.env.BASE_URL as string),
}

// Define fonts for the application
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
const latoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
})
const cairoFont = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-cairo",
})

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={cn(
          "[&:lang(en)]:font-lato [&:lang(ar)]:font-cairo", // Set font styles based on the language
          "bg-background text-foreground antialiased overscroll-none", // Set background, text, , anti-aliasing styles, and overscroll behavior
          latoFont.variable, // Include Lato font variable
          cairoFont.variable // Include Cairo font variable
        )}
      >
        <Providers locale="en">
          <BrowserRouter>
            <ApolloProviders>
              <SessionProviders>
                {children}
                <Toaster />
                <Sonner />
              </SessionProviders>
            </ApolloProviders>
          </BrowserRouter>
        </Providers>
      </body>
    </html>
  )
}
