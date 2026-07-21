"use client";

import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToastStore, type ToastType } from "./toast-store";

const icons: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const colors: Record<ToastType, string> = {
  success: "text-success",
  error: "text-danger",
  warning: "text-warning",
  info: "text-info",
};

export function ToastViewport() {
  const { toasts, dismiss } = useToastStore();

  return (
    <div className="pointer-events-none fixed right-5 top-5 z-toast flex flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];
        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 rounded-md border border-border-light bg-surface px-5 py-4 shadow-lg"
          >
            <Icon className={cn("h-5 w-5 shrink-0", colors[toast.type])} />
            <p className="text-body-sm text-text-primary">{toast.message}</p>
            <button onClick={() => dismiss(toast.id)} className="text-text-muted">
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
