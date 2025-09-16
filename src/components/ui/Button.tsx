import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white hover:from-fuchsia-400 hover:to-cyan-300",
        ghost:
          "border border-white/20 bg-white/5 hover:bg-white/10 text-white",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={twMerge(buttonVariants({ variant, size }), className)} {...props} />
  );
}