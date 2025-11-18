import Link from "next/link"
// import { userData } from "@/data/user"
import { signOut } from "next-auth/react"
import { LogOut, User, UserCog } from "lucide-react"

import { getInitials } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserDropdownUser {
  id?: string
  name?: string
  email?: string
  role: string
  avatar_url?: string | null
  username?: string | null
}

interface UserDropdownProps {
  user?: UserDropdownUser
}

export function UserDropdown(user: UserDropdownProps) {
  // console.log("User in UserDropdown:", user?.user)
  const userData = user?.user
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-lg"
          aria-label="User"
        >
          <Avatar className="size-9">
            <AvatarImage
              src={`/img/customers/${userData?.avatar_url}`}
              alt=""
            />
            <AvatarFallback className="bg-transparent">
              {userData?.username && getInitials(userData.username)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent forceMount>
        <DropdownMenuLabel className="flex gap-2">
          <Avatar>
            <AvatarImage
              src={`/img/customers/${userData?.avatar_url}`}
              alt="Avatar"
            />
            <AvatarFallback className="bg-transparent">
              {userData?.username && getInitials(userData.username)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium truncate">{userData?.username}</p>
            <p className="text-xs text-muted-foreground font-semibold truncate">
              {userData?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-w-48">
          <DropdownMenuItem asChild>
            <Link href="/account/profile">
              <User className="me-2 size-4" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/account/settings">
              <UserCog className="me-2 size-4" />
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="me-2 size-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
