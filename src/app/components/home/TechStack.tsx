import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const CATEGORIES = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "NestJS"] },
  { label: "Banco de dados", items: ["PostgreSQL", "Supabase", "Firebase"] },
  { label: "Cloud", items: ["Vercel", "Cloudflare", "AWS"] },
  { label: "IA", items: ["OpenAI", "Claude", "LangChain"] },
];

export function TechStack() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <Reveal className="max-w-xl">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Stack</p>
        <h2 className="mt-3 text-h2 font-bold text-text-primary">Tecnologia por trás de cada projeto.</h2>
      </Reveal>
      <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {CATEGORIES.map((cat) => (
          <RevealItem key={cat.label}>
            <p className="text-body-sm font-bold text-text-primary">{cat.label}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {cat.items.map((item) => (
                <li key={item} className="text-body-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
