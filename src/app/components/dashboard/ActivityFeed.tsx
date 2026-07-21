import { Bot, Rocket, UserPlus, Zap } from "lucide-react";
import type { ActivityItem } from "@/constants/dashboard-data";

const ICONS: Record<ActivityItem["type"], typeof Rocket> = {
  deploy: Rocket,
  lead: UserPlus,
  automation: Zap,
  ai: Bot,
};

export function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <div className="rounded-lg border border-border-dark bg-surface-elevated p-8">
      <p className="text-body-sm text-text-secondary">Atividade recente</p>
      <ul className="mt-6 flex flex-col gap-5">
        {items.map((item) => {
          const Icon = ICONS[item.type];
          return (
            <li key={item.id} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-body-sm text-text-inverse">{item.message}</p>
                <p className="text-caption text-text-muted">{item.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
