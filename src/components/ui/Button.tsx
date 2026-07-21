import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "gradient"
  | "success"
  | "danger";

type Size = "sm" | "md" | "lg" | "icon";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  isLoading?: boolean;
  icon?: ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-text-inverse shadow-sm hover:bg-primary-hover hover:-translate-y-0.5 active:scale-[0.98]",
  secondary:
    "bg-surface text-primary border border-primary hover:bg-primary/5 hover:shadow-xs",
  ghost: "bg-transparent text-primary hover:bg-primary/5",
  outline:
    "bg-transparent text-text-primary border border-border-default hover:border-primary hover:text-primary",
  gradient:
    "bg-gradient-to-br from-primary to-secondary text-text-inverse shadow-md hover:-translate-y-0.5",
  success: "bg-success text-text-inverse shadow-sm hover:brightness-95",
  danger: "bg-danger text-text-inverse shadow-sm hover:brightness-95",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-body-sm",
  md: "h-14 px-6 text-body",
  lg: "h-16 px-8 text-body-lg",
  icon: "h-14 w-14 p-0",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  isLoading,
  icon,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-bold transition duration-fast ease-summit disabled:cursor-not-allowed disabled:opacity-40",
    variants[variant],
    sizes[size],
    className,
  );

  const content = isLoading ? (
    <span className="h-4 w-4 animate-spin rounded-pill border-2 border-current border-t-transparent" />
  ) : (
    <>
      {icon}
      {children}
    </>
  );

  const isExternal = href?.startsWith("http");

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
