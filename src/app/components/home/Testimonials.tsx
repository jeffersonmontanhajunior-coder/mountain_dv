import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { TestimonialCard } from "@/components/ui/cards/TestimonialCard";

// Depoimentos de exemplo — substituir por citações reais dos clientes
// antes de publicar (nunca atribuir uma fala a um cliente sem confirmar com ele).
const TESTIMONIALS = [
  { quote: "Texto do depoimento entra aqui — trocar por uma citação real do cliente.", name: "Nome do cliente", company: "Nome da empresa" },
  { quote: "Segundo depoimento de exemplo — trocar antes de publicar.", name: "Nome do cliente", company: "Nome da empresa" },
];

export function Testimonials() {
  return (
    <section className="bg-bg-soft px-5 py-24 md:px-20">
      <div className="mx-auto max-w-container-xl">
        <Reveal className="max-w-xl">
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Depoimentos</p>
          <h2 className="mt-3 text-h2 font-bold text-text-primary">Quem trabalhou com a gente.</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name + t.quote}>
              <TestimonialCard {...t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
