import type { Metadata } from "next";
import { Check, Gauge, MousePointerClick, TestTube2 } from "lucide-react";
import { AccordionItem } from "@/components/navigation/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { KPICard } from "@/components/ui/cards/KPICard";

export const metadata: Metadata = {
  title: "Landing pages que convertem",
  description: "Página de conversão pronta em dias, com copy testada e carregamento instantâneo.",
};

const BENEFITS = [
  { icon: <MousePointerClick className="h-5 w-5" />, title: "Copy orientada a resultado", description: "Cada frase existe pra levar a uma ação." },
  { icon: <TestTube2 className="h-5 w-5" />, title: "Testes A/B", description: "Duas versões, um vencedor com dado." },
  { icon: <Gauge className="h-5 w-5" />, title: "Carregamento instantâneo", description: "LCP abaixo de 2s, sem exceção." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Briefing", description: "Entendemos sua oferta e seu público em uma call." },
  { step: "02", title: "Copy + Design", description: "Escrevemos e desenhamos com base no Summit." },
  { step: "03", title: "Deploy", description: "No ar em dias, com tracking configurado." },
];

const RESULTS = [
  { label: "Taxa de conversão", value: "+35%" },
  { label: "LCP médio", value: "<2s" },
];

const GUARANTEES = [
  "Lighthouse 95+ ou ajustamos sem custo extra",
  "Primeira versão no ar em até 10 dias úteis",
  "Você é dono do código — sem vendor lock-in",
];

const FAQS = [
  { question: "Quanto tempo leva pra ficar pronta?", answer: "Em média 10 dias úteis, do briefing ao deploy." },
  { question: "Vocês cuidam do tráfego pago também?", answer: "Não gerenciamos mídia, mas a página já sai preparada pra Meta Pixel e Google Ads." },
  { question: "Posso pedir alterações depois?", answer: "Sim — pequenos ajustes entram no suporte contínuo." },
];

export default function LandingComeceAgoraPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20 md:py-32">
        <Badge variant="ai">Landing Pages</Badge>
        <h1 className="mx-auto mt-6 max-w-2xl font-display text-h1 font-bold text-text-primary">
          Sua página de conversão, pronta em dias.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-body-lg text-text-secondary">
          Copy testada, carregamento instantâneo e integração com Meta
          Ads — pra transformar clique em cliente.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contato" size="lg">
            Solicitar orçamento
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm text-text-secondary">
          <span className="font-bold text-text-primary">95+ Lighthouse</span>
          <span className="h-1 w-1 rounded-pill bg-border-strong" />
          <span className="font-bold text-text-primary">10 dias úteis</span>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-bg-soft px-5 py-20 text-center md:px-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-h3 font-bold text-text-primary">
            Sua campanha gera clique, mas não gera venda?
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Se a página de destino é lenta, genérica ou confusa, o
            investimento em tráfego pago vira dinheiro perdido.
          </p>
        </div>
      </section>

      {/* Solução */}
      <section className="mx-auto max-w-container-xl px-5 py-20 text-center md:px-20">
        <h2 className="text-h3 font-bold text-text-primary">
          Uma página focada em uma única conversão
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-text-secondary">
          Construímos com Next.js e Tailwind, seguindo o Design System
          Summit — nada de elementos que distraem de quem realmente
          importa: a ação que você quer que o visitante tome.
        </p>
      </section>

      {/* Benefícios */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <h2 className="text-center text-h3 font-bold text-text-primary">Benefícios</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-lg border border-border-light bg-surface p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {b.icon}
                </span>
                <p className="mt-4 font-bold text-text-primary">{b.title}</p>
                <p className="mt-1 text-body-sm text-text-secondary">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <h2 className="text-center text-h3 font-bold text-text-primary">Como funciona</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.step} className="text-center">
              <p className="font-display text-h4 font-bold text-primary/30">{s.step}</p>
              <h3 className="mt-2 text-h6 font-bold text-text-primary">{s.title}</h3>
              <p className="mt-1 text-body-sm text-text-secondary">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <h2 className="text-center text-h3 font-bold text-text-primary">Resultados</h2>
          <div className="mx-auto mt-10 grid max-w-lg gap-6 sm:grid-cols-2">
            {RESULTS.map((r) => (
              <KPICard key={r.label} label={r.label} value={r.value} />
            ))}
          </div>
        </div>
      </section>

      {/* Provas sociais */}
      <section className="mx-auto max-w-container-xl px-5 py-20 text-center md:px-20">
        <h2 className="text-h3 font-bold text-text-primary">Quem já confia na Mountain Dev</h2>
        <p className="mt-4 text-body text-text-secondary">Salva Roupa e outros negócios que já escalaram com a gente.</p>
      </section>

      {/* Garantias */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-lg">
          <h2 className="text-center text-h3 font-bold text-text-primary">Garantias</h2>
          <ul className="mt-8 flex flex-col gap-3">
            {GUARANTEES.map((g) => (
              <li key={g} className="flex items-center gap-3 text-body text-text-primary">
                <Check className="h-5 w-5 shrink-0 text-success" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-5 py-20 md:px-20">
        <h2 className="text-center text-h3 font-bold text-text-primary">Perguntas frequentes</h2>
        <div className="mt-8">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
        <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
          Sua página de conversão começa aqui.
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
      </section>
    </>
  );
}
