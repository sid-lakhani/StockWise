import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Intro() {
  return (
    <div
      id="home"
      className="h-[100dvh] flex flex-col xl:flex-row items-center justify-center border-b border-slate-500 mx-4 md:mx-16 xl:mx-32"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl xl:text-5xl font-bold font-secondary">
          Stay Ahead of the Market
        </h1>
        <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300">
          Your ultimate platform for tracking and managing investments, all in
          one convenient place. Stay ahead of the market with real-time data,
          insightful analytics, and powerful tools designed to help you make
          informed decisions.
        </p>
        <div className="flex flex-row gap-2">
          <Link href="/dashboard">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="https://github.com/sid-lakhani/StockWise">
            <Button variant="secondary" size="lg" className="gap-2">
              <Star size={18} />
              Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
      <Image src="hero.svg" width={600} height={500} alt="Hero Image" className="hidden md:block" />
    </div>
  );
}
