import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { CASE_STUDIES, CATEGORIES } from "@/constants/portfolio-data";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Projetos reais, com stack, resultado e case study completo.",
};

export default function PortfolioPage() {
  const realCategories = CATEGORIES.filter((c) => c !== "Todos");

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Portfólio</p>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            Projetos que já escalaram.
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
            Cada projeto aqui é tratado como estudo de caso — problema,
            solução, stack e resultado.
          </p>
        </Reveal>
      </section>

      {/* Filtros + Projetos */}
      <section className="mx-auto max-w-container-xl px-5 pb-20 md:px-20">
        <Reveal>
          <PortfolioGrid />
        </Reveal>
      </section>

      {/* Categorias */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <Reveal>
            <h2 className="text-h3 font-bold text-text-primary">Explore por categoria</h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-3">
            {realCategories.map((cat) => {
              const count = CASE_STUDIES.filter((c) => c.category === cat).length;
              return (
                <RevealItem key={cat} className="rounded-lg border border-border-light bg-surface p-8">
                  <p className="text-h4 font-bold text-primary">{count}</p>
                  <p className="mt-1 text-body text-text-primary">{cat}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Seu projeto pode ser o próximo case.</h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contato" size="lg">
              Iniciar meu projeto
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
