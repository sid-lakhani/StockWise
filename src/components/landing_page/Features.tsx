import { Badge } from "../ui/badge";
import { FeatureCards, MobFeatureCards } from "./FeatureCards";

export default function Features() {
  return (
    <div
      id="features"
      className="h-auto flex flex-col gap-8 items-center justify-center border-slate-500 mx-12 md:mx-32 pt-28 pb-12 md:pb-0"
    >
      <Badge variant={"secondary"} className="cursor-default" >
        Key Features
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
        Unlock the Power of Data-Driven Investing
      </h2>
      <p className="text-lg md:text-xl text-slate-800 dark:text-slate-300">
        Our stock market tracker provides the tools and insights you need to
        make informed investment decisions and stay ahead of the curve.
      </p>
      <MobFeatureCards />
      <FeatureCards />
    </div>
  );
}
