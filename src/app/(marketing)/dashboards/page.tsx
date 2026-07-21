import type { Metadata } from "next";
import { Layers, TrendingUp, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { REVENUE_TREND } from "@/constants/dashboard-data";

export const metadata: Metadata = {
  title: "Dashboards",
  description: "KPIs, analytics e business intelligence sob medida.",
};

const ANALYTICS = ["Conversões", "Leads", "Vendas", "SEO", "Performance", "Usuários", "Receita", "ROI"];
const CHARTS = ["Line", "Bar", "Area", "Pie", "Donut", "Funnel", "Gauge", "Sparkline"];
const INTEGRATIONS = ["Google Analytics", "Meta Ads", "Google Ads", "PostgreSQL", "Planilhas", "APIs REST"];

// Preview real: reaproveita os componentes de dashboard.md (StatCard,
// RevenueChart) — não é mockup/imagem estática, é o produto de verdade
// rodando dentro de uma moldura de "browser".
function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border-light bg-bg-dark p-6 shadow-xl">
      <div className="mb-6 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-pill bg-danger/60" />
        <span className="h-2.5 w-2.5 rounded-pill bg-warning/60" />
        <span className="h-2.5 w-2.5 rounded-pill bg-success/60" />
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard icon={<Layers className="h-4 w-4" />} label="Projetos ativos" value="2" change={{ value: "+1", positive: true }} />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Receita" value="R$ 12.600" change={{ value: "+12,5%", positive: true }} />
        <StatCard icon={<Users className="h-4 w-4" />} label="Leads" value="18" change={{ value: "+6", positive: true }} />
        <StatCard icon={<Zap className="h-4 w-4" />} label="Automações" value="3" />
      </div>
      <div className="mt-4">
        <RevenueChart data={REVENUE_TREND} />
      </div>
    </div>
  );
}

export default function DashboardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-caption font-medium uppercase tracking-wide text-primary">Dashboards</p>
              <h1 className="mt-4 font-display text-h1 font-bold text-text-primary">
                Decisões com dado, não com achismo.
              </h1>
              <p className="mt-4 text-body-lg text-text-secondary">
                KPIs, gráficos e alertas construídos sob medida — tudo em um
                lugar só, sem planilha manual.
              </p>
              <Button href="/contato" size="lg" className="mt-8">
                Solicitar orçamento
              </Button>
            </div>
            <DashboardPreview />
          </div>
        </Reveal>
      </section>

      {/* KPIs / Analytics */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <div className="mx-auto max-w-container-xl">
          <Reveal>
            <h2 className="text-h3 font-bold text-text-primary">KPIs que realmente importam</h2>
            <p className="mt-3 max-w-xl text-body text-text-secondary">
              Cada dashboard nasce a partir do que o seu negócio precisa
              decidir — não de um template genérico.
            </p>
          </Reveal>
          <RevealGroup className="mt-8 flex flex-wrap gap-3">
            {ANALYTICS.map((item) => (
              <RevealItem key={item}>
                <Badge variant="primary">{item}</Badge>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Gráficos */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Gráficos pro seu tipo de dado</h2>
        </Reveal>
        <RevealGroup className="mt-8 flex flex-wrap gap-3">
          {CHARTS.map((chart) => (
            <RevealItem key={chart}>
              <Badge variant="secondary">{chart}</Badge>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Cases */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-container-xl">
          <h2 className="text-h3 font-bold text-text-primary">Um exemplo real</h2>
          <p className="mt-3 max-w-2xl text-body-lg text-text-secondary">
            O AdsPilot Pro, que construímos internamente, é um dashboard de
            decisão pra gestores de tráfego — Health Score, recomendação
            automática de Escalar/Manter/Pausar e histórico de evolução,
            tudo num painel só.
          </p>
          <Button href="/ia" variant="secondary" className="mt-6">
            Ver o AdsPilot Pro
          </Button>
        </Reveal>
      </section>

      {/* Integrações */}
      <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Integrações</h2>
        </Reveal>
        <RevealGroup className="mt-8 flex flex-wrap gap-3">
          {INTEGRATIONS.map((integration) => (
            <RevealItem key={integration}>
              <Badge variant="secondary">{integration}</Badge>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
            Quer ver seus dados assim?
          </h2>
          <div className="mt-8">
            <Button
              href="/contato"
              variant="secondary"
              size="lg"
              className="border-none bg-surface text-primary hover:bg-surface"
            >
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
