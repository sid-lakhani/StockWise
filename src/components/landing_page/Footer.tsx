import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t border-slate-500 mx-40 p-4 pb-6 flex flex-row justify-between">
      <div>
        made by{" "}
        <Link
          href="https://sidlakhani.tech"
          className="border-b border-black dark:border-white"
        >
          Siddhesh Lakhani
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/sid-lakhani/StockWise"
          className="flex flex-row gap-2"
        >
          <Github />
          <p className="border-b border-black dark:border-white ">
            View on GitHub
          </p>
        </Link>
      </div>
    </div>
  );
}
