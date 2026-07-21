import type { Metadata } from "next";
import { Suspense } from "react";
import { BuscaContent } from "@/components/shared/BuscaContent";

export const metadata: Metadata = { title: "Buscar" };

// useSearchParams exige Suspense no App Router — assim /busca?q=... também
// funciona (o mesmo endpoint que o schema WebSite/SearchAction anuncia).
export default function BuscaPage() {
  return (
    <Suspense fallback={null}>
      <BuscaContent />
    </Suspense>
  );
}
