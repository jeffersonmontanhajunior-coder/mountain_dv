import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  avatarSrc?: string;
}

export function TestimonialCard({
  quote,
  name,
  company,
  avatarSrc,
}: TestimonialCardProps) {
  return (
    <Card hoverable={false}>
      <p className="text-body-lg text-text-primary">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <Avatar name={name} src={avatarSrc} size="md" />
        <div>
          <p className="text-body-sm font-bold text-text-primary">{name}</p>
          <p className="text-body-sm text-text-secondary">{company}</p>
        </div>
      </div>
    </Card>
  );
}
