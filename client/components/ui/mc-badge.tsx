import { cn } from "@/lib/utils";

interface McBadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "white";
  className?: string;
}

export function McBadge({ children, variant = "orange", className }: McBadgeProps) {
  const variantStyles = {
    orange: "border-primary bg-orange-50 text-primary backdrop-blur-sm",
    blue: "border-secondary bg-blue-50 text-secondary backdrop-blur-sm",
    white: "border-primary-50 bg-white/10 text-primary-50 backdrop-blur-sm"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-3xl border px-6 py-2 text-lg font-medium tracking-tight",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
