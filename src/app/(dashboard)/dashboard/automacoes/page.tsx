import type { Metadata } from "next";
import { AutomationCard } from "@/components/dashboard/AutomationCard";
import { AUTOMATIONS } from "@/constants/dashboard-data";

export const metadata: Metadata = { title: "Automações" };

export default function DashboardAutomacoesPage() {
  return (
    <div>
      <h1 className="text-h4 font-bold">Automações</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        {AUTOMATIONS.length} automações configuradas.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {AUTOMATIONS.map((automation) => (
          <AutomationCard key={automation.id} automation={automation} />
        ))}
      </div>
    </div>
  );
}
