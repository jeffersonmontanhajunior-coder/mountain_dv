import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "ai"
  | "premium"
  | "novo"
  | "em-breve";

const variants: Record<Variant, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-[#92650a]",
  danger: "bg-danger/10 text-danger",
  info: "bg-info/10 text-info",
  ai: "bg-gradient-to-r from-primary/10 to-secondary/10 text-secondary",
  premium: "bg-warning/15 text-[#92650a]",
  novo: "bg-success/10 text-success",
  "em-breve": "bg-text-muted/10 text-text-secondary",
};

export function Badge({
  variant = "primary",
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-caption font-medium",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}
