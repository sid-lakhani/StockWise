import Header from "@/components/dashboard/Header";
import React from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="h-screen flex items-center justify-center">
      <Header />
      dashboard/explore/watchlist
    </div>
  );
}
