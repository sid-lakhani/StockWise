import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-slate-500 mx-16 md:mx-40 p-4 pb-6 flex flex-row justify-between items-center">
      <div className="hidden md:block">
        made by{" "}
        <Link
          href="https://sidlakhani.in"
          className="border-b border-black dark:border-white"
        >
          Siddhesh Lakhani
        </Link>
      </div>
      <div className="block md:hidden text-sm">
        ~{" "}
      <Link
          href="https://sidlakhani.in"
          className="border-b border-black dark:border-white"
        >
          Siddhesh Lakhani
        </Link>
      </div>
      <div className="hidden md:block">
        <Link
          href="https://github.com/sid-lakhani/StockWise"
          className="flex flex-row gap-2"
        >
          <Github />
          <p className="border-b border-black dark:border-white ">
            View on GitHub
          </p>
        </Link>
      </div>
      <div className="block md:hidden">
        <Link
          href="https://github.com/sid-lakhani/StockWise"
          className="flex flex-row gap-2"
        >
          <Github className="h-6 w-6 bg-slate-300 dark:bg-slate-800 text-black dark:text-white border border-black dark:border-white rounded-xl p-[2px]" />
        </Link>
      </div>
    </div>
  );
}
