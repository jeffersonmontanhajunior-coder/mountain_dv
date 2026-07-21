import type { Metadata } from "next";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { PROJECTS } from "@/constants/dashboard-data";

export const metadata: Metadata = { title: "Projetos" };

export default function DashboardProjetosPage() {
  return (
    <div>
      <h1 className="text-h4 font-bold">Projetos</h1>
      <p className="mt-2 text-body-sm text-text-secondary">
        {PROJECTS.length} projetos no total.
      </p>
      <div className="mt-8">
        <ProjectsTable projects={PROJECTS} />
      </div>
    </div>
  );
}
