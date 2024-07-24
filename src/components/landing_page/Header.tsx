import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";
import Nav from "./Nav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b-[1px] bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-between p-4 px-80 select-none fixed">
      <div className="flex flex-row gap-4 items-center">
        <Image src="/icon.png" width={50} height={50} alt="StockWise Logo" />
        <Link href="/" className="text-2xl font-secondary">StockWise</Link>
      </div>
      <div className="flex flex-row-reverse gap-6 items-center">
        <ThemeSwitcher />
        <SignedOut>
          <Button className="px-4 py-2 rounded-xl">
          <SignInButton />
          </Button>
          </SignedOut>
        <SignedIn><UserButton /></SignedIn>
        <Nav /> 
      </div>
    </div>
  );
}
