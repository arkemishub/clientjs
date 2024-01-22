import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outlined: "border",
      },
      color: {
        primary: "",
        secondary: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "default",
        className: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        color: "secondary",
        variant: "default",
        className:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        color: "primary",
        variant: "outlined",
        className:
          "border-primary text-primary hover:border-primary/90 hover:text-primary/90",
      },
      {
        color: "secondary",
        variant: "outlined",
        className:
          "border-secondary text-secondary hover:border-secondary/90 hover:text-secondary/90",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "primary",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, color, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
