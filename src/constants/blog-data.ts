export interface BlogContentBlock {
  heading: string;
  body: string;
  code?: { language: string; snippet: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readingTime: number;
  summary: string;
  publishedAt: string;
  content: BlogContentBlock[];
}

export const BLOG_CATEGORIES = ["Todos", "Performance", "SEO técnico", "IA", "Desenvolvimento"] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "por-que-seu-site-e-lento",
    title: "Por que seu site é lento (e como resolver)",
    category: "Performance",
    readingTime: 5,
    summary: "As causas mais comuns de lentidão em sites institucionais — e o que fazer sobre cada uma.",
    publishedAt: "2026-06-10",
    content: [
      {
        heading: "O problema",
        body: "Cada segundo a mais de carregamento reduz a taxa de conversão. Em mobile, o efeito é ainda maior — a maioria dos visitantes abandona um site que demora mais de 3 segundos pra carregar.",
      },
      {
        heading: "As causas mais comuns",
        body: "Na prática, quase sempre é a mesma lista: imagens sem otimização, JavaScript carregado antes da hora, fontes bloqueando a renderização e hospedagem sem CDN.",
      },
      {
        heading: "Como resolvemos",
        body: "Todo projeto Mountain Dev nasce com a meta de Lighthouse 95+. Isso significa lazy loading por padrão, code splitting automático do Next.js e imagens servidas em WebP/AVIF.",
        code: {
          language: "tsx",
          snippet: 'import Image from "next/image";\n\n<Image\n  src="/hero.jpg"\n  alt="Produto"\n  width={800}\n  height={600}\n  priority\n/>',
        },
      },
      {
        heading: "Próximo passo",
        body: "Se você não sabe onde seu site está perdendo performance, rodar um Lighthouse já mostra os 3 maiores gargalos.",
      },
    ],
  },
  {
    slug: "core-web-vitals-2026",
    title: "Core Web Vitals: o que realmente importa em 2026",
    category: "SEO técnico",
    readingTime: 6,
    summary: "LCP, INP e CLS explicados sem jargão — e como cada um afeta seu ranqueamento no Google.",
    publishedAt: "2026-05-22",
    content: [
      {
        heading: "O problema",
        body: "Muito site com conteúdo bom rankeia mal porque falha nos critérios técnicos que o Google usa pra medir experiência de página.",
      },
      {
        heading: "As três métricas",
        body: "LCP mede quanto tempo o maior elemento visível leva pra aparecer. INP mede a resposta a cliques e toques. CLS mede quanto o layout 'pula' enquanto carrega.",
      },
      {
        heading: "Como melhorar cada uma",
        body: "LCP melhora com imagens otimizadas e preload da imagem principal. INP melhora reduzindo JavaScript bloqueante. CLS melhora reservando espaço pra imagens antes delas carregarem.",
        code: {
          language: "html",
          snippet: '<link\n  rel="preload"\n  as="image"\n  href="/hero.webp"\n/>',
        },
      },
      {
        heading: "Resultado esperado",
        body: "Projetos que seguem o Design System Summit já nascem com essas três métricas dentro do recomendado pelo Google.",
      },
    ],
  },
  {
    slug: "quando-usar-ia-no-seu-negocio",
    title: "Quando faz sentido usar IA no seu negócio",
    category: "IA",
    readingTime: 4,
    summary: "3 sinais de que uma automação com IA resolveria mais do que atrapalharia.",
    publishedAt: "2026-07-02",
    content: [
      {
        heading: "O problema",
        body: "Muita empresa pequena adota IA por modismo e larga em 2 meses — geralmente porque o problema que ela deveria resolver nunca foi bem definido.",
      },
      {
        heading: "3 sinais de que vale a pena",
        body: "Sua equipe repete a mesma tarefa manual todo dia. Seu tempo de resposta ao cliente é o principal motivo de reclamação. Você tem dado suficiente pra uma decisão, mas ninguém tem tempo de olhar.",
      },
      {
        heading: "Como implementamos",
        body: "Todo agente de IA que construímos sai com fallback (cai pra um humano quando não sabe responder) e monitoramento (log de toda execução e custo).",
      },
      {
        heading: "Um exemplo real",
        body: "O AdsPilot Pro, que construímos internamente, usa IA pra recomendar Escalar/Manter/Pausar em campanhas de Meta Ads — decisão que antes levava horas de análise manual.",
      },
    ],
  },
  {
    slug: "sites-vs-sistemas",
    title: "Sites vs sistemas: qual o seu negócio precisa",
    category: "Desenvolvimento",
    readingTime: 4,
    summary: "Como saber se você precisa de uma presença digital ou de uma ferramenta operacional.",
    publishedAt: "2026-04-15",
    content: [
      {
        heading: "O problema",
        body: "É comum um cliente pedir 'um site' quando na verdade o problema dele é operacional — e um site institucional não resolve isso.",
      },
      {
        heading: "A diferença",
        body: "Um site existe pra gerar confiança e conversão com quem ainda não é cliente. Um sistema existe pra rodar uma operação que já existe — atendimento, estoque, agendamento.",
      },
      {
        heading: "Como decidir",
        body: "Se o problema é 'ninguém me encontra' ou 'ninguém confia', o caminho é site institucional e SEO. Se o problema é 'minha operação não escala', o caminho é sistema sob medida.",
      },
      {
        heading: "Na dúvida",
        body: "A maioria dos projetos combina os dois — um site que gera lead e um sistema simples que organiza o que vem depois.",
      },
    ],
  },
];
