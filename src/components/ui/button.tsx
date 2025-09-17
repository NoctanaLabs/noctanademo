import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 button-breathe relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-button hover:shadow-button-hover transform hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-button hover:shadow-button-hover transform hover:scale-105",
        outline: "border-2 border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 text-foreground shadow-button hover:shadow-button-hover transform hover:scale-105",
        secondary: "bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground hover:from-secondary/80 hover:to-secondary/60 shadow-button hover:shadow-button-hover transform hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground transform hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline transform hover:scale-105",
      },
      size: {
        default: "h-12 px-8 py-3 text-base font-semibold",
        sm: "h-10 rounded-full px-6 text-sm",
        lg: "h-14 rounded-full px-10 text-lg font-semibold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
