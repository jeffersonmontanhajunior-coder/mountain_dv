import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KPICard } from "@/components/ui/cards/KPICard";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Carousel } from "@/components/navigation/Carousel";
import { JsonLd, breadcrumbSchema } from "@/lib/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { CASE_STUDIES } from "@/constants/portfolio-data";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  return { title: study?.title ?? "Case Study" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Portfólio", href: "/portfolio" },
          { label: study.title },
        ])}
      />

      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Portfólio", href: "/portfolio" },
              { label: study.title },
            ]}
          />
          <div className="mt-6 flex flex-wrap items-center gap-3 text-body-sm text-text-secondary">
            <Badge variant="secondary">{study.category}</Badge>
            <span>{study.client}</span>
            <span>·</span>
            <span>{study.year}</span>
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            {study.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {study.stack.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Visão Geral */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-h3 font-bold text-text-primary">Visão geral</h2>
          <p className="mt-4 text-body-lg text-text-secondary">{study.summary}</p>
        </Reveal>
      </section>

      {/* Desafio / Solução */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-h4 font-bold text-danger">O desafio</h2>
            <p className="mt-3 text-body-lg text-text-secondary">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-h4 font-bold text-success">A solução</h2>
            <p className="mt-3 text-body-lg text-text-secondary">{study.solution}</p>
          </div>
        </Reveal>
      </section>

      {/* Resultados */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <Reveal>
            <h2 className="text-h3 font-bold text-text-primary">Resultados</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            {study.results.map((r) => (
              <RevealItem key={r.label}>
                <KPICard label={r.label} value={r.value} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Galeria */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Galeria</h2>
          <div className="mt-8 max-w-2xl">
            <Carousel>
              {["Desktop", "Tablet", "Mobile"].map((device) => (
                <div
                  key={device}
                  className="flex aspect-[16/10] items-center justify-center bg-border-light text-body-sm text-text-muted"
                >
                  {device} — imagem a adicionar
                </div>
              ))}
            </Carousel>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Quer um resultado parecido?</h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contato" size="lg">
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
