import type { ReactNode } from "react"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grow">
      <main>{children}</main>
    </div>
  )
}

// import type { ReactNode } from "react"

// import { LandingHeader } from "./landing-header"
// import { LandingFooter } from "./landing-footer"

// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="grow max-w-[1440px] mx-auto overflow-hidden">
//       <LandingHeader />
//       <main className="w-full">{children}</main>
//       <LandingFooter />
//     </div>
//   )
// }

// You essentially did three things:

// 1. max-w-[1440px] → keeps the entire layout within a desktop-friendly width.

// 2. mx-auto → centers the layout on the page.

// 3. overflow-hidden → prevents inner elements (like wide carousels) from pushing the layout wider.
