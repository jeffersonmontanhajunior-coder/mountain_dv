import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  label: string;
  value: string;
  change?: { value: string; positive: boolean };
}

export function KPICard({ label, value, change }: KPICardProps) {
  return (
    <Card hoverable={false} className="p-8">
      <p className="text-body-sm text-text-secondary">{label}</p>
      <p className="mt-2 text-h3 font-bold text-text-primary">{value}</p>
      {change && (
        <p
          className={cn(
            "mt-2 text-body-sm font-medium",
            change.positive ? "text-success" : "text-danger",
          )}
        >
          {change.positive ? "↑" : "↓"} {change.value}
        </p>
      )}
    </Card>
  );
}
