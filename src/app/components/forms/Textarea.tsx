import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={textareaId} className="text-body-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-[140px] w-full resize-y rounded-md border px-5 py-4 text-body text-text-primary outline-none transition-colors duration-fast placeholder:text-text-muted",
            error
              ? "border-danger focus:border-danger"
              : "border-border-default focus:border-primary",
            className,
          )}
          {...props}
        />
        {error && <p className="text-body-sm text-danger">{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
