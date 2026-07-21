import type { Metadata } from "next";
import { Cog, Gauge, Rocket, Search, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { AccordionItem } from "@/components/navigation/Accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { JsonLd, faqSchema } from "@/lib/json-ld";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { TechStack } from "@/components/home/TechStack";
import { SERVICES_DATA } from "@/constants/services-data";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Sites, sistemas web, IA, dashboards e SEO técnico — cada serviço pensado pra gerar resultado.",
};

const WHY_MOUNTAIN_DEV = [
  { icon: <Wrench className="h-5 w-5" />, title: "Desenvolvimento sob medida" },
  { icon: <Gauge className="h-5 w-5" />, title: "Performance otimizada" },
  { icon: <Search className="h-5 w-5" />, title: "SEO técnico" },
  { icon: <Sparkles className="h-5 w-5" />, title: "IA integrada" },
  { icon: <Rocket className="h-5 w-5" />, title: "Escalabilidade" },
  { icon: <Cog className="h-5 w-5" />, title: "Código limpo" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Suporte contínuo" },
];

const SERVICE_FAQS = [
  { question: "Como escolho qual serviço faz sentido pro meu negócio?", answer: "Depende do problema. Se o site não converte, começamos por ali. Se o gargalo é operacional, IA e automação resolvem primeiro." },
  { question: "Dá pra combinar mais de um serviço no mesmo projeto?", answer: "Sim — a maioria dos projetos combina site, SEO técnico e, quando faz sentido, automação." },
  { question: "Vocês entregam só o design ou o projeto completo?", answer: "Entregamos do design ao deploy. Design sem engenharia por trás não faz parte do Summit." },
];

export default function ServicosPage() {
  return (
    <>
      <JsonLd data={faqSchema(SERVICE_FAQS)} />

      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Serviços</p>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            O que a Mountain Dev constrói.
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
            Cada serviço existe pra resolver um problema específico — não pra
            preencher proposta.
          </p>
          <Button href="/contato" size="lg" className="mt-8">
            Solicitar orçamento
          </Button>
        </Reveal>
      </section>

      {/* Serviço Principal — grid completo */}
      <section className="mx-auto max-w-container-xl px-5 pb-20 md:px-20">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_DATA.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefits={service.benefits.slice(0, 3)}
                href={`/servicos/${service.slug}`}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Benefícios — "Por que Mountain Dev?" */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <Reveal>
            <h2 className="text-h2 font-bold text-text-primary">Por que Mountain Dev?</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_MOUNTAIN_DEV.map((item) => (
              <RevealItem key={item.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {item.icon}
                </span>
                <p className="text-body-sm font-bold text-text-primary">{item.title}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <TechStack />
      <Process />
      <Projects />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24 md:px-20">
        <Reveal>
          <h2 className="text-h2 font-bold text-text-primary">Perguntas sobre nossos serviços.</h2>
          <div className="mt-8">
            {SERVICE_FAQS.map((faq) => (
              <AccordionItem key={faq.question} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Contato */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
            Não sabe qual serviço faz sentido pro seu negócio?
          </h2>
          <div className="mt-8">
            <Button href="/contato" variant="secondary" size="lg" className="border-none bg-surface text-primary hover:bg-surface">
              Falar com a gente
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
