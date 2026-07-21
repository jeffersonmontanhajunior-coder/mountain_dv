"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Envie pro seu provedor de monitoramento (Sentry, etc.)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-display text-display-md text-danger">500</p>
      <h1 className="text-h3 font-bold text-text-primary">
        Algo deu errado do nosso lado.
      </h1>
      <p className="max-w-md text-body text-text-secondary">
        Já registramos o erro. Tenta de novo em alguns segundos.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-primary px-6 py-4 text-body font-bold text-text-inverse shadow-sm transition duration-fast ease-summit hover:bg-primary-hover"
      >
        Tentar novamente
      </button>
    </main>
  );
}
