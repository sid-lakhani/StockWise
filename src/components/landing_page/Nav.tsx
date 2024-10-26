import Link from "next/link";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Nav() {
  return (
    <div className="md:flex flex-row gap-4 hidden">
      <Link href="#features" className="hover:border-b hover:border-black dark:hover:border-white">Features</Link>
      <Link href="#contact" className="hover:border-b hover:border-black dark:hover:border-white">Contact</Link>
    </div>
  );
}

export function MobNav() {
  return (
    <div className="sm:block md:hidden">
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] md:text-[40px] text-black dark:text-white" />
        </SheetTrigger>
        <SheetContent className="flex flex-col" side={"left"}>
          <div className="text-3xl md:text-4xl">
            <h1 className="font-bold flex items-center justify-center">StockWise</h1>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <Link href="#features" className="text-lg">Features</Link>
            <Link href="#contact" className="text-lg">Contact</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
