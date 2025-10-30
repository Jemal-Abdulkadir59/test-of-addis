import { NextResponse } from "next/server"

import type { NextRequest } from "next/server"

// General protected routes (anyone logged in)
const protectedRoutes = ["/dashboards", "/admin"]

// Specific routes with role restrictions
const roleProtectedRoutes: Record<string, string[]> = {
  "/dashboards/analytics": ["admin"],
  "/dashboards/rider-dashboard": ["rider"],
  "/dashboards/cook-dashboard": ["chef"],
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  // console.log("🧩 Middleware Path:", pathname)

  // Skip NextAuth, static assets, images, favicon
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next()
  }

  const isProtected = protectedRoutes.some((r) => pathname.startsWith(r))
  if (!isProtected) return NextResponse.next()

  // ✅ Check if cookie exists
  const token =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value

  if (!token) {
    console.log("🚫 No session cookie found — redirecting to sign-in")
    const redirectUrl = new URL("/auth/sign-in", req.url)
    redirectUrl.searchParams.set("redirectTo", pathname) // redirect after login
    return NextResponse.redirect(redirectUrl)
  }

  // ✅ Fetch NextAuth session via API
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin
    const res = await fetch(`${baseUrl}/api/auth/session`, {
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
    })

    if (!res.ok) throw new Error("Session fetch failed")

    const session = await res.json()
    if (!session?.user) {
      console.log("🚫 No valid session user — redirecting")
      const redirectUrl = new URL("/auth/sign-in", req.url)
      redirectUrl.searchParams.set("redirectTo", pathname)
      return NextResponse.redirect(redirectUrl)
    }

    const userRole = session.user.role || "user"
    console.log(
      "✅ Authenticated user:",
      session.user.email,
      "| Role:",
      userRole
    )

    // 1️⃣ Check role restriction per path
    const requiredRoles = roleProtectedRoutes[pathname]
    if (requiredRoles && !requiredRoles.includes(userRole)) {
      console.log("🚫 Role not allowed — redirect home with error")
      const redirectUrl = new URL("/", req.url)
      redirectUrl.searchParams.set("error", "unauthorized") // add query param
      return NextResponse.redirect(redirectUrl)
    }

    // ✅ All good
    return NextResponse.next()
  } catch (err) {
    console.error("❌ Error validating session:", err)
    const redirectUrl = new URL("/auth/sign-in", req.url)
    redirectUrl.searchParams.set("redirectTo", pathname)
    return NextResponse.redirect(redirectUrl)
  }
}

// Apply middleware only to relevant routes
export const config = {
  matcher: ["/dashboards/:path*", "/admin/:path*"],
}
