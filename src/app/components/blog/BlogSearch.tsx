"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Chip } from "@/components/ui/Chip";
import { BlogCard } from "@/components/ui/cards/BlogCard";
import { Pagination } from "@/components/navigation/Pagination";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blog-data";

const PAGE_SIZE = 3;

export function BlogSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = category === "Todos" || post.category === category;
      const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function handleFilterChange(next: () => void) {
    next();
    setPage(1);
  }

  return (
    <div>
      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        <input
          value={query}
          onChange={(e) => handleFilterChange(() => setQuery(e.target.value))}
          placeholder="Buscar artigos..."
          className="h-12 w-full rounded-md border border-border-default bg-surface pl-11 pr-4 text-body-sm text-text-primary outline-none focus:border-primary"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {BLOG_CATEGORIES.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            active={category === cat}
            onClick={() => handleFilterChange(() => setCategory(cat))}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-body text-text-secondary">Nenhum artigo encontrado.</p>
      ) : (
        <>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
