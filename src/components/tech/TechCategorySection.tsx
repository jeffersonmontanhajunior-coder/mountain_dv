import type { TechCategory } from "@/constants/tech-data";

export function TechCategorySection({ category }: { category: TechCategory }) {
  return (
    <section id={category.slug} className="mx-auto max-w-container-xl px-5 py-16 md:px-20">
      <div className="max-w-xl">
        <p className="text-caption font-medium uppercase tracking-wide text-primary">
          {category.label}
        </p>
        <p className="mt-2 text-body text-text-secondary">{category.description}</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <div key={item.name} className="rounded-lg border border-border-light bg-surface p-6">
            <p className="font-bold text-text-primary">{item.name}</p>
            <p className="mt-1 text-body-sm text-text-secondary">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
