import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// Mesmo padrão visual do Checkbox — o Summit define "Radio: Mesmo padrão."
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => {
    const radioId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <label htmlFor={radioId} className="flex cursor-pointer items-center gap-3 text-body-sm text-text-primary">
        <span className="relative flex h-5 w-5 shrink-0">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className={cn(
              "peer absolute inset-0 h-5 w-5 cursor-pointer appearance-none rounded-pill border border-border-default transition-colors duration-fast checked:border-primary",
              className,
            )}
            {...props}
          />
          <span className="pointer-events-none absolute inset-0 m-auto h-2.5 w-2.5 scale-0 rounded-pill bg-primary transition-transform duration-fast peer-checked:scale-100" />
        </span>
        {label}
      </label>
    );
  },
);
Radio.displayName = "Radio";
