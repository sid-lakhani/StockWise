import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Intro() {
  return (
    <div className="h-[100dvh] flex flex-row items-center border-b-[1px] border-slate-500 mx-40">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold font-secondary">
          Welcome To StockWise
        </h1>
        <p className="text-xl text-slate-300">
          Your ultimate platform for tracking and managing investments, all in
          one convenient place. Stay ahead of the market with real-time data,
          insightful analytics, and powerful tools designed to help you make
          informed decisions.
        </p>
        <div className="flex flex-row gap-2">
          <Button size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Star on GitHub
          </Button>
        </div>
      </div>
      <Image src="hero.svg" width={600} height={500} alt="Hero Image" />
    </div>
  );
}
