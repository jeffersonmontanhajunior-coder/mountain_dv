import { Reveal } from "@/components/shared/Reveal";

// Placeholders de texto — trocar por logos reais (SVG) quando disponíveis.
const CLIENTS = ["Salva Roupa", "Seu logo aqui", "Próximo case", "Escalando com a gente"];

export function Clients() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="border-y border-border-light bg-bg-soft py-10">
      <Reveal>
        <p className="mb-6 text-center text-caption font-medium uppercase tracking-wide text-text-muted">
          Empresas que já confiam na Mountain Dev
        </p>
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee gap-16">
            {items.map((client, i) => (
              <span key={`${client}-${i}`} className="whitespace-nowrap text-body font-bold text-text-muted">
                {client}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
