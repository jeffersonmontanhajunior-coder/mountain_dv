export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

export function TableOfContents({ items }: { items: { heading: string }[] }) {
  return (
    <nav className="rounded-lg border border-border-light bg-bg-soft p-6">
      <p className="text-caption font-medium uppercase tracking-wide text-text-muted">Índice</p>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.heading}>
            <a href={`#${slugify(item.heading)}`} className="text-body-sm text-text-secondary hover:text-primary">
              {item.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
