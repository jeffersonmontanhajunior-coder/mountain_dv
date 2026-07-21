import { Button } from "@/components/ui/Button";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel = "Solicitar orçamento",
  ctaHref = "/contato",
}: PageHeroProps) {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-40">
      {eyebrow && (
        <p className="mb-4 text-caption font-medium uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-3xl font-display text-h1 font-bold text-text-primary">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-body-lg text-text-secondary">
        {description}
      </p>
      <div className="mt-8">
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
    </section>
  );
}
