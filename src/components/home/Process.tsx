import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";

const STEPS = [
  { step: "01", title: "Descoberta", description: "Entendemos seu negócio, objetivo e público." },
  { step: "02", title: "Planejamento", description: "Arquitetura da informação e escopo técnico." },
  { step: "03", title: "Design", description: "UI seguindo o Design System da Mountain Dev." },
  { step: "04", title: "Desenvolvimento", description: "Código limpo, componentizado e testado." },
  { step: "05", title: "Integração", description: "APIs, automações e sistemas conectados." },
  { step: "06", title: "Testes", description: "Performance, acessibilidade e responsividade." },
  { step: "07", title: "Deploy", description: "Publicação com CI/CD e rollback disponível." },
  { step: "08", title: "Monitoramento", description: "Acompanhamento contínuo pós-lançamento." },
];

export function Process() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <Reveal className="max-w-xl">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Processo</p>
        <h2 className="mt-3 text-h2 font-bold text-text-primary">Do primeiro contato ao deploy.</h2>
      </Reveal>
      <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <RevealItem key={s.step}>
            <p className="font-display text-h4 font-bold text-primary/30">{s.step}</p>
            <h3 className="mt-2 text-h6 font-bold text-text-primary">{s.title}</h3>
            <p className="mt-1 text-body-sm text-text-secondary">{s.description}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
