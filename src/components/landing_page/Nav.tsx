import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex flex-row gap-4">
      <Link href="#features" className="hover:border-b hover:border-black dark:hover:border-white">Features</Link>
      <Link href="#contact" className="hover:border-b hover:border-black dark:hover:border-white">Contact</Link>
    </div>
  );
}
