import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border-light bg-bg-soft px-5 py-16 md:px-20">
      <div className="mx-auto flex max-w-container-xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={24} height={24} />
            <p className="text-h6 font-bold text-text-primary">{SITE.name}</p>
          </div>
          <p className="mt-2 max-w-sm text-body-sm text-text-secondary">
            {SITE.description}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-body-sm text-text-secondary">
          <a href={`https://wa.me/${SITE.whatsapp}`} className="hover:text-primary">
            {SITE.whatsappDisplay}
          </a>
          <a href={SITE.instagram} className="hover:text-primary">
            Instagram
          </a>
        </div>
        <div className="flex flex-col gap-2 text-body-sm text-text-secondary">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-container-xl text-caption text-text-muted">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
