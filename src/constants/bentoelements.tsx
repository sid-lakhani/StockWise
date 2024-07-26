import { DollarSign, FileCheck2, Newspaper, ShoppingCart, TrendingUp } from "lucide-react";

export const bentoelements = [
    {
      Icon: TrendingUp,
      name: "Market Overview",
      description: "Stay updated with real-time data on the latest stock market trends.",
      href: "",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-2",
      background: "",
    },
    {
      Icon: FileCheck2,
      name: "My Portfolio",
      description: "Efficiently monitor and manage your stock portfolio.",
      href: "/dashboard/portfolio",
      cta: "Learn more",
      className: "row-span-1 col-span-3 lg:col-span-1",
      background: "",
    },
    {
      Icon: Newspaper,
      name: "News",
      description: "Stay informed with the latest news affecting your investments.",
      href: "/dashboard/news",
      cta: "Learn more",
      className: "row-span-2 col-span-3 lg:col-span-1",
      background: "",
    },
    {
      Icon: ShoppingCart,
      name: "Buy Stocks",
      description: "Easily purchase stocks and track your investments seamlessly.",
      href: "/dashboard/stocks",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: "",
    },
    {
      Icon: DollarSign,
      name: "Pay Bills",
      description: "Conveniently pay your bills directly from your account using UPI.",
      className: "col-span-3 lg:col-span-1",
      href: "/dashboard/pay",
      cta: "Learn more",
      background: "",
    },
];
