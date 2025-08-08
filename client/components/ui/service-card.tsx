import { cn } from "@/lib/utils";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ image, title, description, className }: ServiceCardProps) {
  return (
    <div className={cn(
      "flex flex-1 flex-col items-center rounded-[40px] bg-white p-4 shadow-sm h-[376px] -mb-1",
      className
    )}>
      <img
        src={image}
        alt={title}
        className="h-52 w-full rounded-3xl object-cover"
      />
      <div className="flex flex-col items-start gap-1 p-4 self-stretch">
        <h3 className="text-xl font-medium uppercase text-foreground leading-tight">
          {title}
        </h3>
        <p className="text-base font-light text-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
