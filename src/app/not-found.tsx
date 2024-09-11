import { Home, LayoutDashboard, TrendingUp } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="mx-auto max-w-md text-center">
        <TrendingUp className="mx-auto mb-4 h-12 w-12 text-red-500" />
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <h2 className="mb-2 text-xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-gray-400">
          Sorry, we couldn't find the page you're looking for. The market might be volatile, but our pages shouldn't
          be.
        </p>
        <div className="flex justify-center flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full sm:w-auto">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}