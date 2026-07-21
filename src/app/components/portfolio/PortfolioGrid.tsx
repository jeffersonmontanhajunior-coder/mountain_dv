"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { ProjectCard } from "@/components/ui/cards/ProjectCard";
import { CASE_STUDIES, CATEGORIES } from "@/constants/portfolio-data";

export function PortfolioGrid() {
  const [active, setActive] = useState<string>("Todos");

  const filtered =
    active === "Todos" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => (
          <Chip key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-body text-text-secondary">
          Nenhum projeto nessa categoria ainda.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <ProjectCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              category={c.category}
              stack={c.stack}
              image={c.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}
