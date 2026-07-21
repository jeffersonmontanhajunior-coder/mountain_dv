export interface TechCategory {
  slug: string;
  label: string;
  description: string;
  items: { name: string; description: string }[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    slug: "frontend",
    label: "Frontend",
    description: "Interfaces rápidas, acessíveis e fáceis de manter.",
    items: [
      { name: "React", description: "Biblioteca de componentes — a base de toda interface." },
      { name: "Next.js", description: "App Router, Server Components e performance de produção." },
      { name: "TypeScript", description: "Tipagem estrita — menos bug em produção." },
      { name: "Tailwind CSS", description: "Estilização orientada a tokens, sem CSS solto." },
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    description: "APIs previsíveis, seguras e fáceis de escalar.",
    items: [
      { name: "Node.js", description: "Runtime padrão pra APIs e automações." },
      { name: "Express", description: "Camada leve pra rotas e middlewares." },
      { name: "NestJS", description: "Arquitetura modular quando o projeto cresce." },
    ],
  },
  {
    slug: "banco-de-dados",
    label: "Banco de dados",
    description: "Armazenamento certo pra cada tipo de dado.",
    items: [
      { name: "PostgreSQL", description: "Banco relacional principal." },
      { name: "Supabase", description: "Postgres gerenciado com auth e storage prontos." },
      { name: "Firebase", description: "Quando o projeto precisa de real-time." },
    ],
  },
  {
    slug: "cloud",
    label: "Cloud",
    description: "Infraestrutura que escala sem dor de cabeça.",
    items: [
      { name: "Vercel", description: "Deploy contínuo e edge network pro frontend." },
      { name: "Cloudflare", description: "CDN, DNS e proteção contra DDoS." },
      { name: "AWS", description: "Quando o projeto precisa de infraestrutura sob medida." },
    ],
  },
  {
    slug: "ia",
    label: "IA",
    description: "Inteligência artificial como parte do produto, não enfeite.",
    items: [
      { name: "Claude", description: "Modelos da Anthropic pra agentes e automação de texto." },
      { name: "OpenAI / Groq", description: "Modelos alternativos conforme custo e caso de uso." },
      { name: "LangChain", description: "Orquestração de fluxos de IA multi-etapa." },
    ],
  },
  {
    slug: "integracoes",
    label: "Integrações",
    description: "Seu site conversando com o resto do seu negócio.",
    items: [
      { name: "REST", description: "Padrão pra a maioria das integrações." },
      { name: "GraphQL", description: "Quando o cliente precisa buscar dados complexos." },
      { name: "Webhooks", description: "Eventos em tempo real entre sistemas." },
    ],
  },
  {
    slug: "ferramentas",
    label: "Ferramentas",
    description: "O que garante qualidade antes de qualquer deploy.",
    items: [
      { name: "Git / GitHub", description: "Versionamento e histórico de todo o código." },
      { name: "ESLint / Prettier", description: "Padrão de código automático, sem debate manual." },
      { name: "Figma", description: "Handoff de design pro Summit." },
    ],
  },
];
