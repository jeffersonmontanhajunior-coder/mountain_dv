import type { Metadata } from "next";
import {
  BarChart3,
  Bot,
  ChevronRight,
  Headset,
  MessageSquareText,
  Receipt,
  RefreshCw,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AccordionItem } from "@/components/navigation/Accordion";
import { JsonLd, faqSchema } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Inteligência Artificial",
  description: "Agentes, automações e fluxos de IA aplicados ao seu negócio.",
};

const PRINCIPLES = [
  "Nunca substitui o produto — sempre resolve um problema real",
  "Sempre com fallback quando o modelo falha",
  "Sempre monitorada, com log de execução e custo",
];

const AGENTS = [
  {
    icon: <MessageSquareText className="h-6 w-6" />,
    title: "Atendimento",
    description: "Responde dúvidas e qualifica lead no WhatsApp, 24 horas por dia.",
  },
  {
    icon: <Receipt className="h-6 w-6" />,
    title: "Orçamento",
    description: "Coleta escopo e contexto do projeto antes de chegar num humano.",
  },
  {
    icon: <Headset className="h-6 w-6" />,
    title: "Suporte técnico",
    description: "Responde dúvidas recorrentes de clientes sobre o próprio site.",
  },
];

const AUTOMATIONS = [
  { icon: <RefreshCw className="h-6 w-6" />, title: "Lead scoring", description: "Prioriza quem tem mais chance de fechar." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Relatórios automáticos", description: "Performance e resultado, sem planilha manual." },
  { icon: <Wallet className="h-6 w-6" />, title: "Backup e monitoramento", description: "Rotina que roda sozinha, sem depender de lembrete." },
];

const FLOW_STEPS = ["Entrada", "Processamento", "IA", "Resultado", "Integrações"];

const IA_FAQS = [
  {
    question: "A IA substitui o atendimento humano?",
    answer: "Não. Ela filtra e agiliza — perguntas fora do escopo sempre caem pra um humano.",
  },
  {
    question: "E se o modelo de IA falhar ou ficar fora do ar?",
    answer: "Todo agente tem fallback: cai pra um fluxo simples ou pra um humano, nunca trava o atendimento.",
  },
  {
    question: "Meus dados ficam expostos pra terceiros?",
    answer: "Não. Chaves de API ficam protegidas no backend — nunca expostas no frontend.",
  },
];

export default function IaPage() {
  return (
    <>
      <JsonLd data={faqSchema(IA_FAQS)} />

      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">IA</p>
        <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
          IA aplicada ao seu negócio, não só no discurso.
        </h1>
        <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
          Agentes, automações e fluxos que reduzem trabalho manual e aceleram
          resultado — sempre com fallback e monitoramento.
        </p>
        <Button href="/contato" size="lg" className="mt-8">
          Solicitar orçamento
        </Button>
      </section>

      {/* O que fazemos */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <h2 className="max-w-xl text-h2 font-bold text-text-primary">
            A IA não é um diferencial na Mountain Dev. É um pilar.
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-lg border border-border-light bg-surface p-6">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-pill bg-success" />
                <span className="text-body-sm text-text-primary">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Agentes */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <h2 className="text-h3 font-bold text-text-primary">Agentes</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {AGENTS.map((a) => (
            <div key={a.title} className="rounded-lg border border-border-light bg-surface p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                {a.icon}
              </span>
              <p className="mt-6 font-bold text-text-primary">{a.title}</p>
              <p className="mt-1 text-body-sm text-text-secondary">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Automações */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <h2 className="text-h3 font-bold text-text-primary">Automações</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {AUTOMATIONS.map((a) => (
              <div key={a.title} className="rounded-lg border border-border-light bg-surface p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  {a.icon}
                </span>
                <p className="mt-6 font-bold text-text-primary">{a.title}</p>
                <p className="mt-1 text-body-sm text-text-secondary">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fluxos */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <h2 className="text-h3 font-bold text-text-primary">Como um fluxo de IA funciona</h2>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {FLOW_STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-md border border-border-light bg-surface px-5 py-3 text-body-sm font-medium text-text-primary">
                {step}
              </span>
              {i < FLOW_STEPS.length - 1 && (
                <ChevronRight className="h-4 w-4 shrink-0 text-text-muted" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard IA — exemplo real */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <p className="text-caption font-medium uppercase tracking-wide text-primary">
            IA em produção
          </p>
          <h2 className="mt-3 text-h2 font-bold text-text-primary">AdsPilot Pro</h2>
          <p className="mt-4 max-w-2xl text-body-lg text-text-secondary">
            Plataforma de decisão pra gestores de tráfego no Meta Ads — Health
            Score de 0 a 100 por campanha, recomendação automática de Escalar
            / Manter / Pausar, sugestão de orçamento, headlines gerados por
            IA e histórico com gráfico de evolução, tudo compartilhável
            direto no WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Health Score", "Escalar/Manter/Pausar", "5 perfis de campanha", "ROAS configurável"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-pill bg-primary/10 px-3 py-1 text-caption font-medium text-primary"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
          <Button
            href="https://adspiloto.netlify.app"
            variant="secondary"
            className="mt-8"
          >
            Ver AdsPilot Pro
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24 md:px-20">
        <h2 className="text-h2 font-bold text-text-primary">Perguntas sobre IA.</h2>
        <div className="mt-8">
          {IA_FAQS.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20">
        <h2 className="text-h3 font-bold text-text-primary">
          Onde a IA pode economizar tempo no seu negócio?
        </h2>
        <div className="mt-6 flex justify-center">
          <Button href="/contato" size="lg">
            Solicitar orçamento
          </Button>
        </div>
      </section>
    </>
  );
}
