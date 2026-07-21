export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  stack: string[];
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  placeholder?: boolean;
}

export const CATEGORIES = ["Todos", "E-commerce", "Sistema web", "Dashboard"] as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "salva-roupa",
    title: "Salva Roupa",
    category: "E-commerce",
    client: "Salva Roupa",
    year: "2026",
    stack: ["WordPress", "Elementor"],
    image: "/projects/salva-roupa.jpg",
    summary:
      "Site institucional e de vendas para a Salva Roupa, marca de spray anti-odor, construído em WordPress com Elementor.",
    challenge:
      "A marca precisava de uma loja online rápida e fácil de manter, sem depender de um time técnico pra cada atualização de conteúdo.",
    solution:
      "Construímos em WordPress/Elementor com foco em performance e facilidade de manutenção — o próprio cliente edita o conteúdo sem precisar de suporte técnico constante.",
    results: [
      { label: "Status", value: "Cliente recorrente" },
      { label: "Stack", value: "WordPress / Elementor" },
    ],
  },
  {
    slug: "case-2",
    title: "Próximo case",
    category: "Sistema web",
    client: "Nome do cliente",
    year: "2026",
    stack: ["Next.js", "TypeScript"],
    image: "/projects/placeholder.jpg",
    summary: "Resumo do projeto entra aqui — substituir antes de publicar.",
    challenge: "Descrição do desafio do cliente entra aqui.",
    solution: "Descrição da solução construída entra aqui.",
    results: [
      { label: "Métrica 1", value: "—" },
      { label: "Métrica 2", value: "—" },
    ],
    placeholder: true,
  },
  {
    slug: "case-3",
    title: "Próximo case",
    category: "Dashboard",
    client: "Nome do cliente",
    year: "2026",
    stack: ["React", "IA"],
    image: "/projects/placeholder.jpg",
    summary: "Resumo do projeto entra aqui — substituir antes de publicar.",
    challenge: "Descrição do desafio do cliente entra aqui.",
    solution: "Descrição da solução construída entra aqui.",
    results: [
      { label: "Métrica 1", value: "—" },
      { label: "Métrica 2", value: "—" },
    ],
    placeholder: true,
  },
];
