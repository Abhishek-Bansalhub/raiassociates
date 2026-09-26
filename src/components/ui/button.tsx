import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-navy text-paper hover:bg-navy-deep",
        gold: "bg-gold text-navy-deep hover:bg-gold-soft",
        outline:
          "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-paper",
        invert:
          "border border-paper/30 bg-transparent text-paper hover:bg-paper hover:text-navy",
        ghost: "text-navy hover:bg-mist",
        link: "text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-md px-5",
        sm: "h-9 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-md px-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
