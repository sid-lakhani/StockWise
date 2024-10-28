import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { bentoelements } from "@/constants/bentoelements";

export default function Bento() {
  return (
    <BentoGrid className="md:grid-rows-3 md:grid-cols-3 pt-28 h-[95dvh] grid mx-6 md:mx-12 lg:mx-40">
      {bentoelements.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
