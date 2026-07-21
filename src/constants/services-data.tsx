import type { ReactNode } from "react";
import { Cpu, LayoutTemplate, LineChart, Rocket, Search, Server } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: ReactNode;
  title: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  tech: string[];
  results: { label: string; value: string }[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "sites",
    icon: <LayoutTemplate className="h-6 w-6" />,
    title: "Sites institucionais",
    description: "Sites rápidos e escaláveis, construídos pra converter.",
    problem:
      "Seu site atual carrega devagar, não aparece no Google e não gera contato nenhum.",
    solution:
      "Construímos com Next.js e Tailwind, seguindo o Design System Summit — performance, SEO técnico e conversão desde o primeiro pixel.",
    benefits: [
      "Lighthouse 95+",
      "SEO técnico embutido",
      "Mobile First",
      "Componentização completa",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    results: [
      { label: "Tempo de carregamento", value: "<2.5s" },
      { label: "Lighthouse", value: "95+" },
    ],
  },
  {
    slug: "landing-pages",
    icon: <Rocket className="h-6 w-6" />,
    title: "Landing pages",
    description: "Páginas focadas em uma coisa: conversão.",
    problem: "Sua campanha de tráfego pago gera clique, mas não gera venda.",
    solution:
      "Landing pages focadas em uma única conversão, com copy testada e carregamento instantâneo.",
    benefits: [
      "Copy orientada a resultado",
      "Testes A/B",
      "Alta velocidade",
      "Integração com Meta Ads",
    ],
    tech: ["Next.js", "Tailwind CSS", "Meta Pixel"],
    results: [
      { label: "Taxa de conversão", value: "+35%" },
      { label: "LCP", value: "<2s" },
    ],
  },
  {
    slug: "ia",
    icon: <Cpu className="h-6 w-6" />,
    title: "IA e automação",
    description: "Agentes e fluxos que tiram trabalho manual do seu time.",
    problem:
      "Seu time perde horas em tarefas repetitivas que uma automação resolveria em segundos.",
    solution:
      "Agentes e fluxos de IA integrados ao seu negócio — não como enfeite, como parte do produto.",
    benefits: [
      "Chatbots sob medida",
      "Automações de processo",
      "Integrações via API",
      "Fallback e monitoramento",
    ],
    tech: ["OpenAI", "Claude", "LangChain", "Zapier"],
    results: [
      { label: "Horas economizadas/mês", value: "40+" },
      { label: "Tempo de resposta", value: "-70%" },
    ],
  },
  {
    slug: "dashboards",
    icon: <LineChart className="h-6 w-6" />,
    title: "Dashboards",
    description: "KPIs e analytics pra decisão com dado, não achismo.",
    problem: "Seus dados estão espalhados e a decisão vira achismo.",
    solution:
      "Dashboards sob medida com KPIs, gráficos e alertas — tudo em um lugar só.",
    benefits: [
      "Business Intelligence",
      "Relatórios automáticos",
      "Alertas em tempo real",
      "Multi-fonte de dados",
    ],
    tech: ["React", "Recharts", "PostgreSQL", "Supabase"],
    results: [
      { label: "Tempo até a decisão", value: "-60%" },
      { label: "Fontes integradas", value: "Ilimitadas" },
    ],
  },
  {
    slug: "seo",
    icon: <Search className="h-6 w-6" />,
    title: "SEO técnico",
    description: "Indexação, Core Web Vitals e estrutura pra ranquear.",
    problem: "Seu site existe, mas ninguém encontra ele no Google.",
    solution:
      "SEO técnico de verdade: Core Web Vitals, Schema.org e arquitetura pensada pra indexação.",
    benefits: [
      "Schema.org completo",
      "Sitemap dinâmico",
      "Core Web Vitals aprovados",
      "Estrutura de heading correta",
    ],
    tech: ["Next.js", "Schema.org", "Search Console"],
    results: [
      { label: "Lighthouse SEO", value: "95+" },
      { label: "Indexação", value: "100% das páginas" },
    ],
  },
  {
    slug: "sistemas-web",
    icon: <Server className="h-6 w-6" />,
    title: "Sistemas web",
    description: "Plataformas sob medida, prontas pra escalar.",
    problem: "Planilhas e ferramentas soltas não aguentam o crescimento do seu negócio.",
    solution:
      "Plataformas sob medida, com APIs, autenticação e integrações prontas pra escalar.",
    benefits: [
      "APIs REST/GraphQL",
      "Autenticação segura",
      "Integrações com ERP/CRM",
      "Arquitetura escalável",
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js"],
    results: [
      { label: "Uptime", value: "99.9%" },
      { label: "Tempo de resposta API", value: "<200ms" },
    ],
  },
];
