"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  optional?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, optional, type = "text", className, id, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={inputId} className="text-body-sm font-medium text-text-primary">
            {label}
            {optional && <span className="text-text-muted"> (Opcional)</span>}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              "h-14 w-full rounded-md border px-5 text-body text-text-primary outline-none transition-colors duration-fast placeholder:text-text-muted",
              error
                ? "border-danger focus:border-danger"
                : success
                  ? "border-success"
                  : "border-border-default focus:border-primary",
              isPassword && "pr-12",
              className,
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>
        {error && <p className="text-body-sm text-danger">{error}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";
