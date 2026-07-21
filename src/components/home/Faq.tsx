import { Reveal } from "@/components/shared/Reveal";
import { AccordionItem } from "@/components/navigation/Accordion";

export const FAQS = [
  { question: "Quanto tempo leva pra construir um site?", answer: "Sites institucionais ficam prontos em 2 a 4 semanas. Sistemas mais complexos variam conforme o escopo." },
  { question: "Vocês atendem empresas fora de São Paulo?", answer: "Sim — todo o processo acontece remoto, do briefing ao deploy." },
  { question: "O site já vem com IA?", answer: "Automação e IA entram quando fazem sentido pro seu negócio — não como enfeite." },
  { question: "Preciso pagar hospedagem separada?", answer: "Trabalhamos com Vercel e Cloudflare — o custo de infraestrutura entra na proposta." },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 md:px-20">
      <Reveal>
        <h2 className="text-h2 font-bold text-text-primary">Perguntas frequentes.</h2>
        <div className="mt-8">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
