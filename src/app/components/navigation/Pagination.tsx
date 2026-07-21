"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// "Numérica. Setas. Responsiva." — flex-wrap garante que não quebre em telas pequenas.
export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border-default text-text-secondary transition-colors duration-fast hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-md text-body-sm font-medium transition-colors duration-fast",
            p === page ? "bg-primary text-text-inverse" : "text-text-secondary hover:bg-bg-soft hover:text-text-primary",
          )}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border-default text-text-secondary transition-colors duration-fast hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
