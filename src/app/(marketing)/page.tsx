import type { Metadata } from "next";
import { Clients } from "@/components/home/Clients";
import { Faq, FAQS } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/HowWeWork";
import { Process } from "@/components/home/Process";
import { Projects } from "@/components/home/Projects";
import { Results } from "@/components/home/Results";
import { Services } from "@/components/home/Services";
import { Stats } from "@/components/home/Stats";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { JsonLd, faqSchema } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Mountain Dev — Tecnologia que gera resultado",
  description:
    "Criamos produtos digitais rápidos, escaláveis e preparados para crescer.",
};

// Ordem de seções conforme o Summit v3.0 (Parte 7 — Home Page):
// Hero → Clientes → Indicadores → Serviços → Como Trabalhamos →
// Tecnologias → Projetos → Resultados → Depoimentos → Processo → FAQ → CTA Final
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <Hero />
      <Clients />
      <Stats />
      <Services />
      <HowWeWork />
      <TechStack />
      <Projects />
      <Results />
      <Testimonials />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
