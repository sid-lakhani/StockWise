import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="h-[30dvh] bg-slate-300 dark:bg-slate-800 grid">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-40">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-0">
          <h2 className="text-4xl font-bold tracking-tighter">
            Get Started Today
          </h2>
          <p>
            Start making data-driven investment decisions with our stock market
            tracker.
            <Link href="/dashboard" className="block md:hidden">
              <Button className="px-4 py-2 mt-4 rounded-lg">
                Start Earning
              </Button>
            </Link>
          </p>
        </div>
        <Link href="/dashboard" className="hidden md:block">
          <Button className="px-4 py-2 mt-4 rounded-lg">Start Earning</Button>
        </Link>
      </div>
    </div>
  );
}
