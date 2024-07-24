import { Badge } from "../ui/badge";
import FeatureCards from "./FeatureCards";

export default function Features() {
  return (
    <div
      id="features"
      className="h-[100dvh] flex flex-col gap-8 items-center justify-center  border-slate-500 mx-32 mt-12"
    >
      <Badge variant={"secondary"} className="cursor-default" >
        Key Features
      </Badge>
      <h2 className="text-5xl font-bold tracking-tighter">
        Unlock the Power of Data-Driven Investing
      </h2>
      <p className="">
        Our stock market tracker provides the tools and insights you need to
        make informed investment decisions and stay ahead of the curve.
      </p>
      <FeatureCards />
    </div>
  );
}
