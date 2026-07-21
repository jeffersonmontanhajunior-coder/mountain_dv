import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  stack: string[];
  image: string;
  result?: string;
}

export function ProjectCard({
  slug,
  title,
  category,
  stack,
  image,
  result,
}: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group block overflow-hidden rounded-lg border border-border-light bg-surface shadow-md transition duration-medium ease-summit hover:-translate-y-1.5 hover:border-primary hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-slow ease-summit group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">
          {category}
        </p>
        <h3 className="mt-2 text-h6 font-bold text-text-primary">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        {result && (
          <p className="mt-4 text-body-sm font-medium text-success">{result}</p>
        )}
      </div>
    </Link>
  );
}
