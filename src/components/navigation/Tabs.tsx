"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div className="flex gap-6 border-b border-border-light">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative py-4 text-body-sm font-medium text-text-secondary transition-colors duration-fast",
              active === tab.id && "text-primary",
            )}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-pill bg-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="pt-6">{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}
