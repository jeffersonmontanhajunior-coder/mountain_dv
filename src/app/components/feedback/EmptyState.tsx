import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  ctaLabel,
  ctaHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      {icon && <div className="text-text-muted">{icon}</div>}
      <h3 className="text-h5 font-bold text-text-primary">{title}</h3>
      <p className="max-w-sm text-body text-text-secondary">{description}</p>
      {ctaLabel && ctaHref && (
        <Button href={ctaHref} variant="secondary" size="sm">
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
