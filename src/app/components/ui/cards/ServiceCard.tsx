import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  href: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  benefits,
  href,
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col gap-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-h5 font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-body-sm text-text-secondary">{description}</p>
      </div>
      <ul className="flex flex-col gap-2 text-body-sm text-text-secondary">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-primary" />
            {b}
          </li>
        ))}
      </ul>
      <Button href={href} variant="ghost" size="sm" className="mt-auto self-start px-0">
        Saiba mais →
      </Button>
    </Card>
  );
}
