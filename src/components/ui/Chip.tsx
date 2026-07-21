"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  active?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
}

export function Chip({ label, active, onRemove, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill border px-4 py-2 text-body-sm font-medium transition-colors duration-fast",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-border-default bg-surface text-text-secondary hover:border-primary hover:text-primary",
      )}
    >
      {label}
      {onRemove && (
        <X
          className="h-3.5 w-3.5"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </button>
  );
}
