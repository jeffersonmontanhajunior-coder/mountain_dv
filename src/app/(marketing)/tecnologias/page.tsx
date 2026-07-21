import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TechCategorySection } from "@/components/tech/TechCategorySection";
import { TECH_CATEGORIES } from "@/constants/tech-data";

export const metadata: Metadata = {
  title: "Tecnologias",
  description: "Frontend, backend, cloud, IA e integrações usadas na Mountain Dev.",
};

export default function TecnologiasPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Stack</p>
        <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
          A tecnologia por trás de cada projeto.
        </h1>
        <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
          Escolhemos cada peça da stack pensando em performance, manutenção e
          escala — nunca por modismo.
        </p>
      </section>

      {/* Categorias — navegação rápida */}
      <section className="border-y border-border-light bg-bg-soft px-5 py-6 md:px-20">
        <div className="mx-auto flex max-w-container-xl flex-wrap gap-3">
          {TECH_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="rounded-pill border border-border-default bg-surface px-4 py-2 text-body-sm font-medium text-text-secondary transition-colors duration-fast hover:border-primary hover:text-primary"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {TECH_CATEGORIES.map((cat) => (
        <TechCategorySection key={cat.slug} category={cat} />
      ))}

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
        <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
          Quer saber qual stack faz sentido pro seu projeto?
        </h2>
        <div className="mt-8">
          <Button
            href="/contato"
            variant="secondary"
            size="lg"
            className="border-none bg-surface text-primary hover:bg-surface"
          >
            Falar com a gente
          </Button>
        </div>
      </section>
    </>
  );
}
