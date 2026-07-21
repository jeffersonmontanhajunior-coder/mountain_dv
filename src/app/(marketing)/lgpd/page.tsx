import type { Metadata } from "next";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = { title: "LGPD" };

const RIGHTS = [
  "Confirmação de que tratamos seus dados",
  "Acesso aos dados que temos sobre você",
  "Correção de dados incompletos ou desatualizados",
  "Exclusão dos seus dados, quando aplicável",
  "Portabilidade dos seus dados a outro fornecedor",
  "Revogação do consentimento a qualquer momento",
];

export default function LgpdPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 md:px-20">
      <Reveal>
        <h1 className="font-display text-h2 font-bold text-text-primary">LGPD</h1>
        <p className="mt-4 text-body-lg text-text-secondary">
          A Mountain Dev trata dados pessoais em conformidade com a Lei Geral
          de Proteção de Dados (Lei nº 13.709/2018).
        </p>

        <h2 className="mt-10 text-h4 font-bold text-text-primary">Seus direitos</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {RIGHTS.map((right) => (
            <li key={right} className="flex items-center gap-3 text-body text-text-secondary">
              <span className="h-1.5 w-1.5 shrink-0 rounded-pill bg-primary" />
              {right}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-h4 font-bold text-text-primary">Como exercer seus direitos</h2>
        <p className="mt-3 text-body text-text-secondary">
          Envie uma solicitação pelo formulário de contato ou WhatsApp,
          indicando qual direito deseja exercer. Respondemos em até 15 dias
          úteis.
        </p>

        <p className="mt-10 text-body-sm text-text-muted">
          Este documento serve como modelo inicial. Recomendamos validação
          jurídica antes da publicação.
        </p>
      </Reveal>
    </section>
  );
}
