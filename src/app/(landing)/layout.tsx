import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

// Layout de Landing Page do Summit: "Nunca utilizar menu complexo."
// Só logo + um CTA — sem links de navegação, sem footer completo,
// pra não abrir porta de saída antes da conversão.
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-navbar border-b border-border-light bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-container-xl items-center justify-between px-5 py-4 md:px-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={28} height={28} />
            <span className="text-h6 font-bold text-text-primary">{SITE.name}</span>
          </Link>
          <Button href="/contato" size="sm">
            Solicitar orçamento
          </Button>
        </div>
      </header>
      {children}
      <p className="border-t border-border-light bg-bg-soft px-5 py-6 text-center text-caption text-text-muted">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </>
  );
}
