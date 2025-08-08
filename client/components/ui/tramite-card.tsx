import { cn } from "@/lib/utils";

interface TramiteCardProps {
  title: string;
  description: string;
  className?: string;
}

export function TramiteCard({ title, description, className }: TramiteCardProps) {
  return (
    <div className={cn(
      "flex flex-col justify-center items-center gap-4 flex-1 p-10 rounded-3xl border-4 border-gray-500 bg-gray-500",
      className
    )}>
      <h3 className="text-2xl font-bold text-white leading-tight text-center self-stretch tracking-tight capitalize">
        {title}
      </h3>
      <p className="text-base text-white leading-relaxed self-stretch">
        {description}
      </p>
    </div>
  );
}
