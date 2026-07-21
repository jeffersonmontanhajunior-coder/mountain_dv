"use client";

import { Search } from "lucide-react";
import { useCommandPaletteStore } from "./command-palette-store";

export function CommandPaletteTrigger() {
  const setOpen = useCommandPaletteStore((s) => s.setOpen);

  return (
    <button
      onClick={() => setOpen(true)}
      className="hidden items-center gap-2 rounded-md border border-border-default px-3 py-2 text-body-sm text-text-secondary transition-colors duration-fast hover:border-primary hover:text-primary sm:flex"
    >
      <Search className="h-4 w-4" />
      <span>Buscar</span>
      <kbd className="rounded-xs border border-border-default bg-bg-soft px-1.5 py-0.5 text-caption">⌘K</kbd>
    </button>
  );
}
