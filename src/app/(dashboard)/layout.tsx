import Link from "next/link";
import { LogOut, Search, Settings, User } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Dropdown } from "@/components/navigation/Dropdown";

const SIDEBAR_LINKS = [
  { label: "Visão geral", href: "/dashboard" },
  { label: "Projetos", href: "/dashboard/projetos" },
  { label: "Automações", href: "/dashboard/automacoes" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bg-dark text-text-inverse">
      <aside className="w-64 shrink-0 border-r border-border-dark p-6">
        <p className="mb-8 text-h6 font-bold">Mountain Dev</p>
        <nav className="flex flex-col gap-1">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-3 text-body-sm text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-inverse"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-border-dark px-8 py-5">
          <div className="flex items-center gap-2 text-text-muted">
            <Search className="h-4 w-4" />
            <span className="text-body-sm">Buscar...</span>
          </div>
          <Dropdown
            align="right"
            trigger={<Avatar name="Mountain Dev" size="sm" />}
            items={[
              { label: "Perfil", icon: <User className="h-4 w-4" />, onSelect: () => {} },
              { label: "Configurações", icon: <Settings className="h-4 w-4" />, shortcut: "⌘,", onSelect: () => {} },
              { label: "Sair", icon: <LogOut className="h-4 w-4" />, danger: true, onSelect: () => {} },
            ]}
          />
        </header>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
