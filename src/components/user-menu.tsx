import Link from 'next/link'
import { useAuthStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { UserCircle } from 'lucide-react'

export function UserMenu() {
  const { isAuthenticated, user, logout } = useAuthStore()

  if (!isAuthenticated) {
    return (
      <Button variant="ghost" asChild>
        <Link href="/auth/login" className="flex items-center gap-2">
          <UserCircle className="w-5 h-5" />
          <span>Login</span>
        </Link>
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-neutral-600">
        Welcome, {user?.name}
      </span>
      <Button variant="ghost" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  )
}
