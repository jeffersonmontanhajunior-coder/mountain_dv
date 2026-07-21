"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/ui/cards/BlogCard";
import { ProjectCard } from "@/components/ui/cards/ProjectCard";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { BLOG_POSTS } from "@/constants/blog-data";
import { CASE_STUDIES } from "@/constants/portfolio-data";
import { SERVICES_DATA } from "@/constants/services-data";

export function BuscaContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const q = query.toLowerCase();
  const services = useMemo(() => SERVICES_DATA.filter((s) => s.title.toLowerCase().includes(q)), [q]);
  const projects = useMemo(() => CASE_STUDIES.filter((c) => c.title.toLowerCase().includes(q)), [q]);
  const posts = useMemo(() => BLOG_POSTS.filter((p) => p.title.toLowerCase().includes(q)), [q]);
  const total = services.length + projects.length + posts.length;

  return (
    <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20">
      <h1 className="text-h2 font-bold text-text-primary">Buscar</h1>
      <div className="relative mt-8 max-w-lg">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar serviços, projetos, artigos..."
          className="h-12 w-full rounded-md border border-border-default bg-surface pl-11 pr-4 text-body-sm text-text-primary outline-none focus:border-primary"
        />
      </div>

      {query && (
        <p className="mt-6 text-body-sm text-text-secondary">
          {total} resultado{total !== 1 ? "s" : ""} pra &ldquo;{query}&rdquo;
        </p>
      )}

      {services.length > 0 && (
        <div className="mt-10">
          <h2 className="text-h5 font-bold text-text-primary">Serviços</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
                benefits={s.benefits.slice(0, 3)}
                href={`/servicos/${s.slug}`}
              />
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mt-10">
          <h2 className="text-h5 font-bold text-text-primary">Projetos</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} slug={p.slug} title={p.title} category={p.category} stack={p.stack} image={p.image} />
            ))}
          </div>
        </div>
      )}

      {posts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-h5 font-bold text-text-primary">Blog</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <BlogCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      )}

      {query && total === 0 && (
        <p className="mt-10 text-center text-body text-text-secondary">Nenhum resultado encontrado.</p>
      )}
      {!query && (
        <p className="mt-10 text-center text-body text-text-secondary">
          Digite algo pra buscar em serviços, projetos e artigos.
        </p>
      )}
    </section>
  );
}
