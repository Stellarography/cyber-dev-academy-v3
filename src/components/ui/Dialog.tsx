import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  ...props
}: DialogPrimitive.DialogContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <DialogPrimitive.Content
        className={twMerge(
          "fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
          "rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl",
          className
        )}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}