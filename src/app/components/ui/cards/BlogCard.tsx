import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  readingTime: number;
  summary: string;
}

export function BlogCard({ slug, title, category, readingTime, summary }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-lg border border-border-light bg-surface shadow-md transition duration-medium ease-summit hover:-translate-y-1.5 hover:border-primary hover:shadow-lg"
    >
      <div className="flex aspect-[16/9] items-center justify-center bg-bg-soft text-text-muted">
        <span className="text-caption">Imagem do artigo</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-caption text-text-muted">{readingTime} min de leitura</span>
        </div>
        <h3 className="mt-3 text-h6 font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-body-sm text-text-secondary">{summary}</p>
      </div>
    </Link>
  );
}
