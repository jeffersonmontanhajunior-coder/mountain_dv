import type { Metadata } from "next";
import { Code2, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { KPICard } from "@/components/ui/cards/KPICard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { TechStack } from "@/components/home/TechStack";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem constrói a Mountain Dev.",
};

const VALUES = [
  { icon: <Rocket className="h-5 w-5" />, title: "Performance", description: "Nunca é opcional." },
  { icon: <Sparkles className="h-5 w-5" />, title: "IA aplicada", description: "Pilar, não enfeite." },
  { icon: <Code2 className="h-5 w-5" />, title: "Código limpo", description: "Sem dívida técnica escondida." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Transparência", description: "Você acompanha cada etapa." },
];

const RESULTS = [
  { label: "Lighthouse médio", value: "95+" },
  { label: "Projetos entregues", value: "30+" },
  { label: "Tempo médio de resposta", value: "24h" },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Sobre</p>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            Uma empresa de tecnologia, não uma agência.
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
            Construímos produtos digitais orientados por performance,
            automação e IA — não páginas bonitas sem engenharia por trás.
          </p>
        </Reveal>
      </section>

      {/* Nossa história */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-h3 font-bold text-text-primary">Nossa história</h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            A Mountain Dev nasceu de uma constatação simples: a maioria dos
            sites de pequenas empresas é lenta, genérica e não converte.
            Decidimos construir diferente — com o mesmo rigor de engenharia
            que empresas de tecnologia usam em produtos digitais de verdade.
          </p>
        </Reveal>
      </section>

      {/* Valores */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Valores</h2>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <RevealItem key={value.title} className="rounded-lg border border-border-light bg-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                {value.icon}
              </span>
              <p className="mt-4 font-bold text-text-primary">{value.title}</p>
              <p className="mt-1 text-body-sm text-text-secondary">{value.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Equipe — honesto sobre ser time enxuto, sem inventar nomes/fotos */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h3 font-bold text-text-primary">Time enxuto, decisão rápida</h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Cada projeto passa pelas mesmas mãos do início ao fim — sem
            terceirização, sem telefone sem fio. Você fala direto com quem
            constrói.
          </p>
        </Reveal>
      </section>

      <TechStack />

      {/* Resultados */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Resultados</h2>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-3">
          {RESULTS.map((r) => (
            <RevealItem key={r.label}>
              <KPICard label={r.label} value={r.value} />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
            Vamos construir seu próximo projeto?
          </h2>
          <div className="mt-8">
            <Button
              href="/contato"
              variant="secondary"
              size="lg"
              className="border-none bg-surface text-primary hover:bg-surface"
            >
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
