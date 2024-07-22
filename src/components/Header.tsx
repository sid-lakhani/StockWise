import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <div className="top-0 left-0 w-full z-50 border-b-[1px] bg-bg-light dark:bg-bg-dark border-slate-500 flex flex-row items-center justify-center gap-80 p-4 select-none fixed">
      <div className="flex flex-row gap-4 items-center">
        <Image src="/icon.png" width={50} height={50} alt="StockWise Logo" />
        <Link href="/" className="text-2xl font-secondary">StockWise</Link>
      </div>
      <div className="flex flex-row-reverse gap-6 items-center">
        <ThemeSwitcher />
        <Nav /> 
      </div>
    </div>
  );
}
