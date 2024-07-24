import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Logo from "../universal/Logo";
import ThemeSwitcher from "../universal/ThemeSwitcher";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-between p-4 px-80 select-none fixed">
      <Logo />
      <div className="flex flex-row-reverse gap-6 items-center">
        <ThemeSwitcher />
        <SignedOut>
          <Button className="px-4 py-2 rounded-xl">
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Nav />
      </div>
    </div>
  );
}
