import { BarChartIcon, BellIcon, Lock, PieChartIcon, SmartphoneIcon, TrendingUpIcon } from "lucide-react";

export const features = [
  {
    title: "Real-Time Market Data",
    description:
      "Stay updated with real-time market trends and stock prices for timely investment decisions.",
    icon: <TrendingUpIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Use powerful analytics to assess market performance and make data-driven investment strategies.",
    icon: <BarChartIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Customizable Alerts",
    description: "Set up notifications for stock price changes and market news tailored to your preferences.", 
    icon: <BellIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Portfolio Management",
    description:
      "Track and manage your investments, monitor performance, and analyze asset allocation in one place.",
      icon: <PieChartIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Mobile-Friendly",
    description: "Access your portfolio and market data on the go with our responsive mobile app.",
    icon: <SmartphoneIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Secure and Private",
    description: "We prioritize your data security with advanced encryption and privacy measures.",
    icon: <Lock className="h-8 w-8 text-primary" />,
  }
];
