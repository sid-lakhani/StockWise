import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { bentoelements } from "@/constants/bentoelements";


export default function Bento() {
  return (
    <BentoGrid className="lg:grid-rows-3 grid-cols-3 pt-28 h-[95dvh] grid w-2/3">
      {bentoelements.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
