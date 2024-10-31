import { cn } from "@/lib/utils";

export const NewsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
      )}
    >
      <h3 className="text-lg font-bold dark:text-white">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </figure>
  );
};
