import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ThemeSwitcher from "../universal/ThemeSwitcher";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-between p-6 px-20 select-none fixed">
      <div className="flex flex-row gap-4 items-center">
        <Image src="/icon.png" width={50} height={50} alt="StockWise Logo" />
        <Link href="/" className="text-2xl font-secondary">
          StockWise
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
