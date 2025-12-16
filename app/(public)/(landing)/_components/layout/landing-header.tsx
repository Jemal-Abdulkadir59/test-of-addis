"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useGetUserByIdQuery, useGetUserCartQuery } from "@/generated/graphql"
import { getSession } from "next-auth/react"
import { LogIn, ShoppingCart } from "lucide-react"

// import type { LocaleType } from "@/types"

import { headerNavigationData } from "../../_data/header-navigation"

import { cn, isActivePathname } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import CartSheet from "../../menu/_components/cart-sheet"
import { UserDropdown } from "@/components/layout/user-dropdown"
// import { LanguageDropdown } from "@/components/language-dropdown"
import { ModeDropdown } from "@/components/mode-dropdown"
import { LandingSidebar } from "./landing-sidebar"

export function LandingHeader() {
  const pathname = usePathname()
  const params = useParams()
  // const searchParams = useSearchParams();

  const [fullPathname, setFullPathname] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  console.log("pathname:", pathname)
  useEffect(() => {
    setFullPathname(pathname + window.location.hash)
  }, [params, pathname])

  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      if (session?.user?.id) {
        setUserId(session.user.id)
      }
    })()
  }, [])

  //Query cart items from backend when ready
  const { data, loading, error, refetch } = useGetUserCartQuery({
    variables: { user_id: userId! },
    skip: !userId, // 🚫 skip until userId is ready
  })

  const cartItems = data?.cart || []

  // Run query ONLY when userId is available
  const {
    data: userData,
    loading: loadingUser,
    error: err,
  } = useGetUserByIdQuery({
    variables: { id: userId! },
    skip: !userId, // important — prevents error
  })

  const user = userData?.users_by_pk
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-sidebar-border">
      <div className="container grid grid-cols-3 items-center gap-2 py-2.5">
        <LandingSidebar fullPathname={fullPathname} />
        <Link
          href="/"
          className="place-self-center w-fit flex text-foreground font-black hover:text-primary/90 lg:place-self-auto"
        >
          <Image
            src="/images/icons/shadboard.svg"
            alt=""
            height={24}
            width={24}
            className="dark:invert"
          />
          <span>Online</span>
        </Link>
        <nav className="hidden lg:block">
          <ul className="place-self-center flex gap-2">
            {headerNavigationData.map((nav) => {
              const isActive = isActivePathname(nav.href, fullPathname, true)
              return (
                <li key={nav.href}>
                  <Link
                    href={nav.href}
                    className={buttonVariants({
                      variant: isActive ? "default" : "ghost",
                    })}
                  >
                    {nav.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="place-self-end flex gap-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
              >
                {cartItems.length}
              </Badge>
            )}
          </Button>
          <ModeDropdown />
          {/* <LanguageDropdown dictionary={dictionary} /> */}
          {user ? (
            <UserDropdown user={user} />
          ) : (
            <Link
              href="/auth/sign-in"
              className={cn(buttonVariants(), "hidden lg:flex")}
            >
              <LogIn className="me-2 h-4 w-4" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
      {isCartOpen && (
        <CartSheet
          open={isCartOpen}
          onOpenChange={setIsCartOpen}
          cartItems={cartItems}
          loading={loading}
        />
      )}
    </header>
  )
}
