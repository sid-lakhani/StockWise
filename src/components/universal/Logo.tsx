import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Image src="/icon.png" width={50} height={50} alt="StockWise Logo" />
      <Link href="/" className="text-2xl font-secondary">
        StockWise
      </Link>
    </div>
  );
}
