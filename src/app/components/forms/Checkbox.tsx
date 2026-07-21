import { forwardRef, type InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const checkboxId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <label
        htmlFor={checkboxId}
        className="flex cursor-pointer items-center gap-3 text-body-sm text-text-primary"
      >
        <span className="relative flex h-5 w-5 shrink-0">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={cn(
              "peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-xs border border-border-default transition-colors duration-fast checked:border-primary checked:bg-primary",
              className,
            )}
            {...props}
          />
          <Check className="pointer-events-none absolute inset-0 m-auto h-3.5 w-3.5 text-text-inverse opacity-0 transition-opacity duration-fast peer-checked:opacity-100" />
        </span>
        {label}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
