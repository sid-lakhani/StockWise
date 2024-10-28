import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Nav() {
  return (
    <div className="md:flex flex-row gap-6 hidden">
      <Link
        href="/dashboard/explore"
        className="hover:border-b hover:border-black dark:hover:border-white"
      >
        Explore
      </Link>
      <Link
        href="/dashboard/investments"
        className="hover:border-b hover:border-black dark:hover:border-white"
      >
        Investments
      </Link>
      <Link
        href="/dashboard/news"
        className="hover:border-b hover:border-black dark:hover:border-white"
      >
        News
      </Link>
      <Link
        href="/dashboard/pay"
        className="hover:border-b hover:border-black dark:hover:border-white"
      >
        Pay
      </Link>
      <Link
        href="/"
        className="hover:border-b hover:border-black dark:hover:border-white"
      >
        Home
      </Link>
    </div>
  );
}

export function MobNav() {
  return (
    <div className="sm:block md:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <Menu className="h-8 w-8 text-black dark:text-white" />
        </SheetTrigger>
        <SheetContent className="flex flex-col" side={"left"}>
          <div className="text-3xl md:text-4xl">
            <h1 className="font-bold flex items-center justify-center">
              StockWise
            </h1>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="/dashboard" className="text-lg">
              Dashboard 
            </Link>
            <Link href="/dashboard/explore" className="text-lg">
              Explore
            </Link>
            <Link href="/dashboard/investments" className="text-lg">
              Investments
            </Link>
            <Link href="/dashboard/news" className="text-lg">
              News
            </Link>
            <Link href="/dashboard/pay" className="text-lg">
              Pay
            </Link>
            <Link href="/" className="text-lg">
              Home
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
