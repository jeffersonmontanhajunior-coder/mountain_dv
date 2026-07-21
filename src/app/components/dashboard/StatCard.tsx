import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  change?: { value: string; positive: boolean };
}

export function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border-dark bg-surface-elevated p-8 transition duration-medium ease-summit hover:border-primary">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        {change && (
          <span
            className={cn(
              "text-body-sm font-medium",
              change.positive ? "text-success" : "text-danger",
            )}
          >
            {change.positive ? "↑" : "↓"} {change.value}
          </span>
        )}
      </div>
      <p className="mt-6 text-body-sm text-text-secondary">{label}</p>
      <p className="mt-1 text-h3 font-bold">{value}</p>
    </div>
  );
}
