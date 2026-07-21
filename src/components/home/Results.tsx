import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { KPICard } from "@/components/ui/cards/KPICard";

const RESULTS = [
  { label: "Performance média", value: "95+", change: { value: "Lighthouse", positive: true } },
  { label: "SEO técnico", value: "95+", change: { value: "Lighthouse", positive: true } },
  { label: "Tempo de carregamento", value: "<2.5s", change: { value: "LCP", positive: true } },
  { label: "Conversão média", value: "+35%", change: { value: "vs. site anterior", positive: true } },
];

export function Results() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <Reveal className="max-w-xl">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Resultados</p>
        <h2 className="mt-3 text-h2 font-bold text-text-primary">Números, não promessas.</h2>
      </Reveal>
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.map((result) => (
          <RevealItem key={result.label}>
            <KPICard {...result} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
