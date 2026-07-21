import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-light bg-surface p-10 shadow-md transition duration-medium ease-summit",
        hoverable && "hover:-translate-y-1.5 hover:border-primary hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
