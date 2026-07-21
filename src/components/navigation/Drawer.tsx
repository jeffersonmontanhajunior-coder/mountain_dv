"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: "right" | "bottom";
}

export function Drawer({ open, onClose, title, children, side = "right" }: DrawerProps) {
  return (
    <div className={cn("fixed inset-0 z-drawer", open ? "pointer-events-auto" : "pointer-events-none")}>
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-bg-dark/40 transition-opacity duration-normal",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className={cn(
          "absolute bg-surface shadow-xl transition-transform duration-normal ease-summit",
          side === "right"
            ? cn("right-0 top-0 h-full w-full max-w-sm", open ? "translate-x-0" : "translate-x-full")
            : cn("bottom-0 left-0 w-full rounded-t-xl", open ? "translate-y-0" : "translate-y-full"),
        )}
      >
        <div className="flex items-center justify-between p-6">
          {title && <h2 className="text-h6 font-bold text-text-primary">{title}</h2>}
          <button onClick={onClose} className="text-text-muted">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );
}
