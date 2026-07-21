import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { ProjectCard } from "@/components/ui/cards/ProjectCard";
import { CASE_STUDIES } from "@/constants/portfolio-data";

export function Projects() {
  return (
    <section className="bg-bg-soft px-5 py-24 md:px-20">
      <div className="mx-auto max-w-container-xl">
        <Reveal className="max-w-xl">
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Projetos</p>
          <h2 className="mt-3 text-h2 font-bold text-text-primary">Projetos que já escalaram.</h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                category={project.category}
                stack={project.stack}
                image={project.image}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
