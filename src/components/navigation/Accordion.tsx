"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

// Resolve a contradição do Summit (Motion proíbe animar `height`, mas o
// Accordion pede "Height Auto"): anima `grid-template-rows` (0fr → 1fr),
// não `height` — mesmo resultado visual, sem violar a regra de performance.
export function AccordionItem({ title, children, defaultOpen }: AccordionItemProps) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="border-b border-border-light">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-6 text-left text-body-lg font-medium text-text-primary"
      >
        {title}
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-text-secondary transition-transform duration-normal ease-summit",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-normal ease-summit",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-body text-text-secondary">{children}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
