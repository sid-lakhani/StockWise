import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "StockWise",
  description:
    "Stock Market Tracker that lets you buy and sell stocks, view your portfolio, and get real-time stock prices.",
  authors: {
    name: "Siddhesh Lakhani",
    url: "https://stockwise.sidlakhani.tech/",
  },
  creator: "Siddhesh Lakhani",
  publisher: "Siddhesh Lakhani",
  keywords: [
    "Stocks",
    "Trading",
    "Investing",
    "Stock Market",
    "Stock Market Tracker",
  ],
  openGraph: {
    type: "website",
    url: "https://stockwise.sidlakhani.tech/",
    title: "StockWise",
  description:
    "Stock Market Tracker that lets you buy and sell stocks, view your portfolio, and get real-time stock prices.",
    siteName: "Stock Market Tracker",
    images: [
      {
        url: "/hero.svg",
        alt: "BUY, SELL, TRACK",
      },
    ],
  },
  twitter: {
    creator: "@sidlakhani_",
    creatorId: "x.com/sidlakhani_",
    site: "https://stockwise.sidlakhani.tech/",
    title: "StockWise",
    images: [
      {
        url: "/hero.svg",
        alt: "BUY, SELL, TRACK",
      },
    ],
  },
  metadataBase: new URL("https://stockwise.sidlakhani.tech"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" afterSignOutUrl="/">
      <html
        lang="en"
        className={`${inter.className} ${poppins.variable}`}
        suppressHydrationWarning
      >
          <body>
            <Providers>{children}</Providers>
          </body>
      </html>
    </ClerkProvider>
  );
}
