import News from "@/components/dashboard/bento-bg/News";
import { DollarSign, Eye, FileCheck2, Newspaper, ShoppingCart, TrendingUp } from "lucide-react";

export const bentoelements = [
    {
      Icon: TrendingUp,
      name: "Market Overview",
      description: "Stay updated with real-time data on the latest stock market trends.",
      href: "/dashboard/explore",
      cta: "Explore Market Trends",
      className: "md:row-span-2 md:col-span-2",
      background: "",
    },
    {
      Icon: FileCheck2,
      name: "My Portfolio",
      description: "Efficiently monitor and manage your stock portfolio.",
      href: "/dashboard/investments",
      cta: "View Portfolio",
      className: "md:row-span-1 md:col-span-1",
      background: "",
    },
    {
      Icon: Eye,
      name: "Watchlist",
      description: "Add desired stocks to your watchlist and track their performance.",
      href: "/dashboard/explore/watchlist",
      cta: "Manage Watchlist",
      className: "md:row-span-1 md:col-span-1",
      background: "",
    },
    {
      Icon: ShoppingCart,
      name: "Buy Stocks",
      description: "Easily purchase stocks and track your investments seamlessly.",
      href: "/dashboard/explore/stocks",
      cta: "Buy Stocks Now",
      className: "md:col-span-1",
      background: "",
    },
    {
      Icon: DollarSign,
      name: "Pay Bills",
      description: "Conveniently pay your bills directly from your account using UPI.",
      className: "md:col-span-1",
      href: "/dashboard/pay",
      cta: "Pay Bills",
      background: "",
    },
    {
      Icon: Newspaper,
      name: "News",
      description: "Stay informed with the latest news affecting your investments.",
      href: "/dashboard/news",
      cta: "Read Latest News",
      className: "md:row-span-1 md:col-span-1",
      background: <News />,
    },
];
