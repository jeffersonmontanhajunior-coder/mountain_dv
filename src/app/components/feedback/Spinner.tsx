import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      role="status"
      aria-label="Carregando"
      className={cn(
        "h-6 w-6 animate-spin rounded-pill border-2 border-border-default border-t-primary",
        className,
      )}
    />
  );
}
