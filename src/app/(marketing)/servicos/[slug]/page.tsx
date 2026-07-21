import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KPICard } from "@/components/ui/cards/KPICard";
import { ProjectCard } from "@/components/ui/cards/ProjectCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/json-ld";
import { CASE_STUDIES } from "@/constants/portfolio-data";
import { SERVICES_DATA } from "@/constants/services-data";

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  return { title: service?.title ?? "Serviço", description: service?.description };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: service.title },
        ])}
      />

      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: service.title },
            ]}
          />
          <p className="mt-6 text-caption font-medium uppercase tracking-wide text-primary">Serviço</p>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            {service.title}
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-text-secondary">{service.description}</p>
          <Button href="/contato" size="lg" className="mt-8">
            Solicitar orçamento
          </Button>
        </Reveal>
      </section>

      {/* Problema / Solução */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto grid max-w-container-xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-h4 font-bold text-danger">O problema</h2>
            <p className="mt-3 text-body-lg text-text-secondary">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-h4 font-bold text-success">A solução</h2>
            <p className="mt-3 text-body-lg text-text-secondary">{service.solution}</p>
          </div>
        </Reveal>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Benefícios</h2>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <RevealItem
              key={b}
              className="flex items-center gap-3 rounded-md border border-border-light bg-surface p-5 text-body text-text-primary"
            >
              <span className="h-2 w-2 shrink-0 rounded-pill bg-success" />
              {b}
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Tecnologias */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-container-xl">
          <h2 className="text-h3 font-bold text-text-primary">Tecnologias</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Resultados */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Resultados</h2>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
          {service.results.map((r) => (
            <RevealItem key={r.label}>
              <KPICard label={r.label} value={r.value} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Projeto relacionado — só mostra quando existe um case real que combina */}
      {slug === "sites" &&
        (() => {
          const related = CASE_STUDIES.find((c) => c.slug === "salva-roupa");
          if (!related) return null;
          return (
            <section className="bg-bg-soft px-5 py-20 md:px-20">
              <Reveal className="mx-auto max-w-container-xl">
                <h2 className="text-h3 font-bold text-text-primary">Projeto relacionado</h2>
                <div className="mt-8 max-w-sm">
                  <ProjectCard
                    slug={related.slug}
                    title={related.title}
                    category={related.category}
                    stack={related.stack}
                    image={related.image}
                  />
                </div>
              </Reveal>
            </section>
          );
        })()}

      {/* CTA final */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Bora colocar isso em prática?</h2>
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
