import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-display-md text-primary">404</p>
      <h1 className="text-h3 font-bold text-text-primary">
        Essa página não existe.
      </h1>
      <p className="max-w-md text-body text-text-secondary">
        O link pode estar quebrado ou a página foi movida. Vamos te levar de
        volta.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-md bg-primary px-6 py-4 text-body font-bold text-text-inverse shadow-sm transition duration-fast ease-summit hover:bg-primary-hover"
        >
          Ir para a Home
        </Link>
        <Link
          href="/contato"
          className="rounded-md border border-border-default px-6 py-4 text-body font-bold text-primary transition duration-fast ease-summit hover:bg-bg-soft"
        >
          Falar com a gente
        </Link>
      </div>
    </main>
  );
}
