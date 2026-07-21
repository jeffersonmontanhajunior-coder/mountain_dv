import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "./AnimatedCounter";

const STATS = [
  { value: 95, suffix: "+", label: "Lighthouse Score" },
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 100, suffix: "%", label: "Mobile First" },
  { value: 24, suffix: "h", label: "Tempo médio de resposta" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-16 md:px-20">
      <Reveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-h2 font-bold text-primary">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-body-sm text-text-secondary">{stat.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
