import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface McButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "orange" | "blue" | "outline-orange" | "outline-blue";
  size?: "sm" | "md" | "lg";
}

const McButton = forwardRef<HTMLButtonElement, McButtonProps>(
  ({ className, variant = "orange", size = "md", ...props }, ref) => {
    const variantStyles = {
      orange: "bg-primary text-primary-foreground hover:bg-primary/90",
      blue: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      "outline-orange": "border-4 border-primary text-primary bg-transparent hover:bg-primary/10",
      "outline-blue": "border-4 border-secondary text-secondary bg-transparent hover:bg-secondary/10"
    };

    const sizeStyles = {
      sm: "px-6 py-2 text-sm",
      md: "px-10 py-4 text-xl",
      lg: "px-12 py-5 text-2xl"
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

McButton.displayName = "McButton";

export { McButton };
