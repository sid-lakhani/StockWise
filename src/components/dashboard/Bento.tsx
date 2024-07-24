
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { DollarSign, FileCheck2, Newspaper, TrendingUp } from "lucide-react";

const features = [
  {
    Icon: TrendingUp,
    name: "Buy Stocks",
    description: "Easily purchase stocks and track your investments.",
    href: "/dashboard/stocks",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: "",
  },
  {
    Icon: FileCheck2,
    name: "My Portfolio",
    description: "Monitor and manage your stock portfolio efficiently.",
    href: "/dashboard/portfolio",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    Icon: Newspaper,
    name: "News",
    description: "Stay updated with the latest market news.",
    href: "/dashboard/news",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    Icon: DollarSign,
    name: "Pay Bills",
    description: "Conveniently pay your bills directly from your account.",
    className: "col-span-3 lg:col-span-1",
    href: "/dashboard/pay",
    cta: "Learn more",
    background: "",
  },
];

export async function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-3 pt-32 h-[100dvh] grid w-2/3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
