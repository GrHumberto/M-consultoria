import { cn } from "@/lib/utils";

interface DictamenCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function DictamenCard({ icon, title, description, className }: DictamenCardProps) {
  return (
    <div className={cn(
      "flex min-w-64 min-h-48 flex-col justify-center items-start gap-4 flex-1 p-6 rounded-3xl border border-primary bg-gradient-radial from-orange-100 to-background",
      className
    )}>
      <div className="flex justify-center items-center gap-2 p-2 rounded-2xl bg-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-primary text-center leading-tight">
        {title}
      </h3>
      <p className="text-sm font-light text-foreground leading-relaxed self-stretch">
        {description}
      </p>
    </div>
  );
}
