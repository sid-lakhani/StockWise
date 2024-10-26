import Image from "next/image";
import React from "react";
import BlurFade from "../magicui/blur-fade";

export default function MoreFeatures() {
  return (
    <div className="h-[150dvh] xl:flex flex-col items-center justify-center hidden">
      <BlurFade delay={0.25} inView className="h-[60dvh] flex flex-row gap-12 items-center justify-center mb-4">
        <div className="w-1/3 grid gap-2">
          <h2 className="text-5xl font-bold tracking-tighter">
            Market at your Fingertips.
          </h2>
          <p>
            Long-term or short-term, high risk or low risk. Be the kind of
            investor you want to be.
          </p>
        </div>
        <Image
          src="/marketinhand.png"
          width={500}
          height={500}
          alt="Market in Hands"
          className="rounded-2xl"
        />
      </BlurFade>
      <BlurFade delay={0.25} inView className="h-[60dvh] flex flex-row-reverse gap-12 items-center justify-center mb-4">
        <div className="w-1/3 grid gap-2">
          <h2 className="text-5xl font-bold tracking-tighter">
            All your Bills in one place.
          </h2>
          <p>Pay anyone, anywhere, anytime with UPI on StockWise.</p>
        </div>
        <Image
          src="/upiqr.png"
          width={500}
          height={500}
          alt="Market in Hands"
          className="rounded-2xl"
        />
      </BlurFade>
    </div>
  );
}
