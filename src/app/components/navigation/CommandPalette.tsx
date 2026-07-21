"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FileText, Layers, Search, Wrench } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog-data";
import { CASE_STUDIES } from "@/constants/portfolio-data";
import { SERVICES_DATA } from "@/constants/services-data";
import { NAV_LINKS } from "@/constants/site";
import { useCommandPaletteStore } from "./command-palette-store";

interface CommandItem {
  label: string;
  href: string;
  group: string;
  icon: typeof FileText;
}

// Command Palette do Summit: inspirado no Linear, atalho Ctrl/Cmd+K, busca universal.
export function CommandPalette() {
  const { open, setOpen, toggle } = useCommandPaletteStore();
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [toggle, setOpen]);

  const items = useMemo<CommandItem[]>(() => {
    const pages = NAV_LINKS.map((link) => ({
      label: link.label,
      href: link.href,
      group: "Páginas",
      icon: Layers,
    }));
    const services = SERVICES_DATA.map((s) => ({
      label: s.title,
      href: `/servicos/${s.slug}`,
      group: "Serviços",
      icon: Wrench,
    }));
    const projects = CASE_STUDIES.map((c) => ({
      label: c.title,
      href: `/portfolio/${c.slug}`,
      group: "Projetos",
      icon: Layers,
    }));
    const posts = BLOG_POSTS.map((p) => ({
      label: p.title,
      href: `/blog/${p.slug}`,
      group: "Blog",
      icon: FileText,
    }));
    return [...pages, ...services, ...projects, ...posts];
  }, []);

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  function handleSelect(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-command flex items-start justify-center bg-bg-dark/40 p-5 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-xl border border-border-light bg-surface shadow-xl"
      >
        <div className="flex items-center gap-3 border-b border-border-light px-5 py-4">
          <Search className="h-4 w-4 text-text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar páginas, serviços, projetos, artigos..."
            className="w-full bg-transparent text-body text-text-primary outline-none placeholder:text-text-muted"
          />
          <kbd className="rounded-xs border border-border-default px-1.5 py-0.5 text-caption text-text-muted">
            Esc
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-body-sm text-text-muted">Nada encontrado.</p>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => handleSelect(item.href)}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-body-sm text-text-primary transition-colors duration-fast hover:bg-bg-soft"
                >
                  <Icon className="h-4 w-4 shrink-0 text-text-muted" />
                  <span>{item.label}</span>
                  <span className="ml-auto text-caption text-text-muted">{item.group}</span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
