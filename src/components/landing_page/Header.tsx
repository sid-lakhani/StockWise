import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ThemeSwitcher from "../universal/ThemeSwitcher";
import { MobNav, Nav } from "./Nav";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-between p-6 px-12 md:px-20 select-none fixed">
      <div className="flex flex-row items-center gap-4">
        <MobNav />
        <Link
          href="/"
          className="flex flex-row gap-4 items-center text-2xl font-secondary"
        >
          <Image src="/icon.png" width={50} height={50} alt="StockWise Logo" />
          <p className="hidden md:block">StockWise</p>
        </Link>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <Nav />
        <SignedOut>
          <Button className="px-4 py-2 rounded-xl">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
