import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: string;
  price: string;
  benefits: string[];
  featured?: boolean;
  ctaHref?: string;
}

export function PricingCard({
  plan,
  price,
  benefits,
  featured,
  ctaHref = "/contato",
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-lg border p-10 shadow-md transition duration-medium ease-summit",
        featured
          ? "border-primary bg-surface shadow-lg"
          : "border-border-light bg-surface hover:-translate-y-1.5 hover:shadow-lg",
      )}
    >
      {featured && <Badge variant="premium">Mais popular</Badge>}
      <h3 className="text-h5 font-bold text-text-primary">{plan}</h3>
      <p className="text-h3 font-bold text-text-primary">{price}</p>
      <ul className="flex flex-col gap-2 text-body-sm text-text-secondary">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-success" />
            {b}
          </li>
        ))}
      </ul>
      <Button href={ctaHref} variant={featured ? "gradient" : "secondary"}>
        Escolher plano
      </Button>
    </div>
  );
}
