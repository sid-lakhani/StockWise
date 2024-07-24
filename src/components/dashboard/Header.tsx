import { UserButton } from "@clerk/nextjs";
import Logo from "../universal/Logo";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-between p-4 px-80 select-none fixed">
      <Logo />
      <div className="flex flex-row-reverse gap-6 items-center">
        <UserButton />
      </div>
    </div>
  );
}
