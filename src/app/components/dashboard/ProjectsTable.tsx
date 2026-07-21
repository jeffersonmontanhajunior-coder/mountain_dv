import type { DashboardProject } from "@/constants/dashboard-data";
import { cn } from "@/lib/utils";

const STATUS_STYLES: Record<DashboardProject["status"], string> = {
  "Em andamento": "bg-info/15 text-info",
  Concluído: "bg-success/15 text-success",
  Pausado: "bg-warning/15 text-warning",
};

export function ProjectsTable({ projects }: { projects: DashboardProject[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-dark bg-surface-elevated">
      <table className="w-full text-left text-body-sm">
        <thead>
          <tr className="border-b border-border-dark text-text-secondary">
            <th className="px-6 py-4 font-medium">Projeto</th>
            <th className="px-6 py-4 font-medium">Cliente</th>
            <th className="px-6 py-4 font-medium">Stack</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium">Atualizado</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id} className="border-b border-border-dark last:border-0">
              <td className="px-6 py-4 font-medium text-text-inverse">{p.name}</td>
              <td className="px-6 py-4 text-text-secondary">{p.client}</td>
              <td className="px-6 py-4 text-text-secondary">{p.stack.join(", ")}</td>
              <td className="px-6 py-4">
                <span className={cn("rounded-pill px-3 py-1 text-caption font-medium", STATUS_STYLES[p.status])}>
                  {p.status}
                </span>
              </td>
              <td className="px-6 py-4 text-text-secondary">{p.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
