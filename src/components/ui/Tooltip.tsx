import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Content className="rounded-md bg-black/80 px-2 py-1 text-xs text-white border border-white/10 shadow">
      {children}
      <TooltipPrimitive.Arrow className="fill-black/80" />
    </TooltipPrimitive.Content>
  );
}