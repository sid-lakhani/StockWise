import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="flex flex-row gap-4">
      <Link href="#features">Features</Link>
      <Link href="#contact">Contact</Link>
    </div>
  );
}
