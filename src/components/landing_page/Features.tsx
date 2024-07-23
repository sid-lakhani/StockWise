import FeatureCards from "./FeatureCards";

export default function Features() {
  return (
    <div
      id="features"
      className="h-[110dvh] flex flex-col gap-8 items-center justify-center border-b-[1px] border-slate-500 mx-32"
    >
      <div className="inline-block rounded-lg bg-slate-800 dark:bg-slate-900 text-white px-3 py-1 text-xs">
        Key Features
      </div>
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
