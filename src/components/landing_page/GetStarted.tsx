import React from "react";
import { Button } from "../ui/button";

export default function GetStarted() {
  return (
    <div className="h-[30dvh] bg-slate-300 dark:bg-slate-800 grid">
      <div className="flex flex-row items-center justify-between px-40">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter">
            Get Started Today
          </h2>
          <p>
            Start making data-driven investment decisions with our stock market
            tracker.
          </p>
        </div>
        <Button className="px-4 py-2 mt-4 rounded-lg">Get Started</Button>
      </div>
    </div>
  );
}
