import type { Metadata } from "next";
import { Layers, TrendingUp, Users, Zap } from "lucide-react";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { ACTIVITY, PROJECTS, REVENUE_TREND } from "@/constants/dashboard-data";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-h4 font-bold">Visão geral</h1>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Layers className="h-5 w-5" />}
          label="Projetos ativos"
          value="2"
          change={{ value: "+1 este mês", positive: true }}
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5" />}
          label="Receita do mês"
          value="R$ 12.600"
          change={{ value: "+12,5%", positive: true }}
        />
        <StatCard
          icon={<Users className="h-5 w-5" />}
          label="Leads gerados"
          value="18"
          change={{ value: "+6", positive: true }}
        />
        <StatCard icon={<Zap className="h-5 w-5" />} label="Automações ativas" value="3" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={REVENUE_TREND} />
        </div>
        <ActivityFeed items={ACTIVITY} />
      </div>

      <div className="mt-6">
        <ProjectsTable projects={PROJECTS} />
      </div>
    </div>
  );
}
