import type { Metadata } from "next";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = { title: "Política de Privacidade" };

const SECTIONS = [
  {
    title: "Quais dados coletamos",
    content:
      "Nome, e-mail e mensagem enviados pelo formulário de contato. Dados de navegação (páginas visitadas, tempo de sessão) via Google Analytics, quando ativado.",
  },
  {
    title: "Como usamos esses dados",
    content:
      "Pra responder seu contato, entender como o site é usado e melhorar a experiência. Nunca vendemos dados a terceiros.",
  },
  {
    title: "Cookies",
    content:
      "Usamos cookies essenciais (funcionamento do site) e, quando aplicável, cookies de analytics. Você pode desativá-los no seu navegador a qualquer momento.",
  },
  {
    title: "Seus direitos (LGPD)",
    content:
      "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento — veja como na nossa página de LGPD.",
  },
  {
    title: "Contato",
    content: "Dúvidas sobre privacidade? Fale com a gente pelo WhatsApp ou pelo formulário de contato.",
  },
];

export default function PoliticaPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 md:px-20">
      <Reveal>
        <h1 className="font-display text-h2 font-bold text-text-primary">Política de Privacidade</h1>
        <p className="mt-4 text-body-sm text-text-muted">
          Última atualização: julho de 2026. Este documento serve como modelo
          inicial — recomendamos validação jurídica antes da publicação.
        </p>
        <div className="mt-10 flex flex-col gap-8">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-h5 font-bold text-text-primary">{section.title}</h2>
              <p className="mt-2 text-body text-text-secondary">{section.content}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
