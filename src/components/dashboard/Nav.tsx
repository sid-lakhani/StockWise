import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex flex-row gap-6">
      <Link href="/dashboard/explore" className="hover:border-b hover:border-black dark:hover:border-white">Explore</Link>
      <Link href="/dashboard/investments" className="hover:border-b hover:border-black dark:hover:border-white">Investments</Link>
      <Link href="/dashboard/news" className="hover:border-b hover:border-black dark:hover:border-white">News</Link>
      <Link href="/dashboard/pay" className="hover:border-b hover:border-black dark:hover:border-white">Pay</Link>
    </div>
  );
}
