import { Card } from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import React from "react";
import { NewsCard } from "./NewsCard";

const newsData = [
  {
    title: "Tech Stocks Surge",
    description: "Major tech stocks see a sharp increase after positive earnings reports.",
  },
  {
    title: "Oil Prices Drop",
    description: "Oil prices fall as new supply deals ease market concerns.",
  },
  {
    title: "Cryptocurrency Regulation",
    description: "Governments discuss new regulations for digital currencies.",
  },
  {
    title: "Interest Rate Hike",
    description: "Federal Reserve hints at potential rate hike next quarter.",
  },
  {
    title: "Housing Market Boom",
    description: "Demand for suburban homes continues to soar across the nation.",
  },
  {
    title: "Automotive Industry Shift",
    description: "Electric vehicles now account for 20% of new car sales.",
  },
];

export default function News() {
  const row = newsData.slice(0, newsData.length);

  return (
    <div className="fixed flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {row.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}
