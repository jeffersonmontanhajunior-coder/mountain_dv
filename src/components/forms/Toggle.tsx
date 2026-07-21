import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, className, id, ...props }, ref) => {
    const toggleId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <label
        htmlFor={toggleId}
        className="flex cursor-pointer items-center gap-3 text-body-sm text-text-primary"
      >
        <span className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-pill bg-border-strong transition-colors duration-normal has-[:checked]:bg-primary">
          <input
            ref={ref}
            id={toggleId}
            type="checkbox"
            className={cn("peer sr-only", className)}
            {...props}
          />
          <span className="absolute left-1 h-4 w-4 rounded-pill bg-surface shadow-xs transition-transform duration-normal ease-summit peer-checked:translate-x-5" />
        </span>
        {label}
      </label>
    );
  },
);
Toggle.displayName = "Toggle";
