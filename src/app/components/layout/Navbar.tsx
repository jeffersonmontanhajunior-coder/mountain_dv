import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CommandPaletteTrigger } from "@/components/navigation/CommandPaletteTrigger";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { NAV_LINKS, SITE } from "@/constants/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-navbar border-b border-border-light bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-container-xl items-center justify-between px-5 py-4 md:px-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo-mark.png" alt="" width={28} height={28} priority />
          <span className="text-h6 font-bold text-text-primary">{SITE.name}</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm font-medium text-text-secondary transition-colors duration-fast hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CommandPaletteTrigger />
          <ThemeToggle />
          <Button href="/contato" variant="primary" className="px-5 py-3 text-body-sm">
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </header>
  );
}
