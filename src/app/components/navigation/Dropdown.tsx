"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  onSelect: () => void;
  danger?: boolean;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
  searchable?: boolean;
}

// Dropdown do Summit: pesquisa opcional, ícones, atalhos.
export function Dropdown({ trigger, items, align = "left", searchable }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = searchable
    ? items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
    : items;

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen((v) => !v)}>{trigger}</button>

      {open && (
        <div
          className={cn(
            "absolute z-dropdown mt-2 w-56 rounded-md border border-border-light bg-surface p-2 shadow-lg",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {searchable && (
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar..."
              className="mb-2 w-full rounded-sm border border-border-default px-2 py-1.5 text-body-sm outline-none focus:border-primary"
            />
          )}
          {filtered.length === 0 ? (
            <p className="px-3 py-2 text-body-sm text-text-muted">Nada encontrado.</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.onSelect();
                  setOpen(false);
                  setQuery("");
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-sm px-3 py-2 text-body-sm transition-colors duration-fast hover:bg-bg-soft",
                  item.danger ? "text-danger" : "text-text-primary",
                )}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {item.shortcut && <span className="text-caption text-text-muted">{item.shortcut}</span>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
