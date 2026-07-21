import { cn } from "@/lib/utils";

// Shimmer (não pulse) — conforme o Summit: "Animação: Shimmer. Duração: 1.5s. Loop infinito."
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-md bg-gradient-to-r from-border-light via-bg-soft to-border-light bg-[length:200%_100%]",
        className,
      )}
    />
  );
}
