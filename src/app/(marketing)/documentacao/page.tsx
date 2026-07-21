import type { Metadata } from "next";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Documentação",
  description: "Como funciona o processo, acesso e suporte pós-entrega.",
};

const DOCS = [
  {
    id: "processo",
    title: "Como funciona o processo",
    content:
      "Todo projeto passa por Descoberta, Planejamento, Design, Desenvolvimento, Testes e Deploy. Você acompanha cada etapa — sem caixa-preta.",
  },
  {
    id: "acesso",
    title: "Acesso ao seu projeto após a entrega",
    content:
      "Você recebe acesso ao repositório (GitHub) e à hospedagem (Vercel/Cloudflare). O código é seu — sem vendor lock-in.",
  },
  {
    id: "alteracoes",
    title: "Como solicitar alterações",
    content:
      "Alterações pequenas entram no plano de suporte contínuo. Mudanças maiores viram um novo escopo, orçado antes de começar.",
  },
  {
    id: "stack",
    title: "Stack e hospedagem",
    content:
      "Projetos novos usam React, Next.js, TypeScript e Tailwind, hospedados na Vercel com CDN da Cloudflare. Rodar localmente:",
    code: { language: "bash", snippet: "npm install\nnpm run build\nnpm run start" },
  },
];

export default function DocumentacaoPage() {
  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <Reveal>
        <p className="text-caption font-medium uppercase tracking-wide text-primary">Documentação</p>
        <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
          Como trabalhar com a Mountain Dev.
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[240px_1fr]">
        <nav className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-border-light bg-bg-soft p-6">
            <p className="text-caption font-medium uppercase tracking-wide text-text-muted">Índice</p>
            <ul className="mt-4 flex flex-col gap-2">
              {DOCS.map((doc) => (
                <li key={doc.id}>
                  <a href={`#${doc.id}`} className="text-body-sm text-text-secondary hover:text-primary">
                    {doc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex flex-col gap-12">
          {DOCS.map((doc) => (
            <div key={doc.id} id={doc.id}>
              <h2 className="text-h4 font-bold text-text-primary">{doc.title}</h2>
              <p className="mt-3 text-body-lg text-text-secondary">{doc.content}</p>
              {doc.code && (
                <div className="mt-4">
                  <CodeBlock language={doc.code.language} code={doc.code.snippet} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
