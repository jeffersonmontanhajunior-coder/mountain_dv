// Dados de exemplo pro dashboard interno — ainda não existe backend
// conectado. Plugar numa fonte real (Supabase, planilha, etc.) via
// src/services/api.ts quando existir.

export interface DashboardProject {
  id: string;
  name: string;
  client: string;
  status: "Em andamento" | "Concluído" | "Pausado";
  stack: string[];
  updatedAt: string;
}

export const PROJECTS: DashboardProject[] = [
  {
    id: "1",
    name: "Salva Roupa",
    client: "Salva Roupa",
    status: "Concluído",
    stack: ["WordPress", "Elementor"],
    updatedAt: "2026-06-02",
  },
  {
    id: "2",
    name: "Site institucional — case 2",
    client: "A confirmar",
    status: "Em andamento",
    stack: ["Next.js", "TypeScript"],
    updatedAt: "2026-07-10",
  },
  {
    id: "3",
    name: "Dashboard interno",
    client: "Mountain Dev",
    status: "Em andamento",
    stack: ["React", "Recharts"],
    updatedAt: "2026-07-16",
  },
  {
    id: "4",
    name: "Landing page — case 4",
    client: "A confirmar",
    status: "Pausado",
    stack: ["Next.js"],
    updatedAt: "2026-05-20",
  },
];

export type AutomationStatus = "online" | "executando" | "pausado" | "erro" | "offline";

export interface Automation {
  id: string;
  name: string;
  status: AutomationStatus;
  lastRun: string;
  executions: number;
  timeSaved: string;
}

export const AUTOMATIONS: Automation[] = [
  {
    id: "1",
    name: "Resposta automática — WhatsApp",
    status: "online",
    lastRun: "há 4 min",
    executions: 312,
    timeSaved: "18h/mês",
  },
  {
    id: "2",
    name: "Lead scoring — formulário de contato",
    status: "executando",
    lastRun: "agora",
    executions: 89,
    timeSaved: "6h/mês",
  },
  {
    id: "3",
    name: "Relatório semanal de performance",
    status: "pausado",
    lastRun: "há 6 dias",
    executions: 24,
    timeSaved: "3h/mês",
  },
  {
    id: "4",
    name: "Backup automático — Cloudflare",
    status: "online",
    lastRun: "há 1h",
    executions: 540,
    timeSaved: "—",
  },
];

export interface ActivityItem {
  id: string;
  type: "deploy" | "lead" | "automation" | "ai";
  message: string;
  time: string;
}

export const ACTIVITY: ActivityItem[] = [
  { id: "1", type: "deploy", message: "Deploy concluído — dashboard interno", time: "há 12 min" },
  { id: "2", type: "lead", message: "Novo lead recebido pelo formulário de contato", time: "há 40 min" },
  { id: "3", type: "automation", message: "Automação 'Resposta automática' executada", time: "há 1h" },
  { id: "4", type: "ai", message: "Assistente de IA respondeu 3 dúvidas de orçamento", time: "há 2h" },
  { id: "5", type: "deploy", message: "Deploy concluído — landing page case 4", time: "ontem" },
];

export const REVENUE_TREND = [
  { month: "Fev", value: 8200 },
  { month: "Mar", value: 9100 },
  { month: "Abr", value: 8800 },
  { month: "Mai", value: 10400 },
  { month: "Jun", value: 11200 },
  { month: "Jul", value: 12600 },
];
