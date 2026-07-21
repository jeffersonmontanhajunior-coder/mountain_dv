import type { Automation } from "@/constants/dashboard-data";
import { cn } from "@/lib/utils";

const STATUS_LABELS: Record<Automation["status"], string> = {
  online: "Online",
  executando: "Executando",
  pausado: "Pausado",
  erro: "Erro",
  offline: "Offline",
};

const STATUS_STYLES: Record<Automation["status"], string> = {
  online: "bg-success/15 text-success",
  executando: "bg-info/15 text-info",
  pausado: "bg-warning/15 text-warning",
  erro: "bg-danger/15 text-danger",
  offline: "bg-text-muted/15 text-text-muted",
};

export function AutomationCard({ automation }: { automation: Automation }) {
  return (
    <div className="rounded-lg border border-border-dark bg-surface-elevated p-8">
      <div className="flex items-start justify-between gap-3">
        <p className="font-bold text-text-inverse">{automation.name}</p>
        <span
          className={cn(
            "flex shrink-0 items-center gap-1.5 rounded-pill px-3 py-1 text-caption font-medium",
            STATUS_STYLES[automation.status],
          )}
        >
          <span className="h-1.5 w-1.5 rounded-pill bg-current" />
          {STATUS_LABELS[automation.status]}
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 text-body-sm">
        <div>
          <p className="text-text-muted">Última execução</p>
          <p className="mt-1 text-text-inverse">{automation.lastRun}</p>
        </div>
        <div>
          <p className="text-text-muted">Execuções</p>
          <p className="mt-1 text-text-inverse">{automation.executions}</p>
        </div>
        <div>
          <p className="text-text-muted">Economia</p>
          <p className="mt-1 text-text-inverse">{automation.timeSaved}</p>
        </div>
      </div>
    </div>
  );
}
