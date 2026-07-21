import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const POINTS = [
  { title: "Sem intermediários", description: "Você fala direto com quem constrói." },
  { title: "Entrega em semanas", description: "Não em meses. Ciclos curtos, resultado rápido." },
  { title: "Código que você é dono", description: "Sem vendor lock-in, sem letras miúdas." },
];

export function HowWeWork() {
  return (
    <section className="bg-bg-soft px-5 py-24 md:px-20">
      <div className="mx-auto max-w-container-xl">
        <Reveal>
          <h2 className="max-w-xl text-h2 font-bold text-text-primary">Como a gente trabalha.</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3">
          {POINTS.map((point) => (
            <RevealItem key={point.title}>
              <h3 className="text-h5 font-bold text-text-primary">{point.title}</h3>
              <p className="mt-2 text-body text-text-secondary">{point.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
