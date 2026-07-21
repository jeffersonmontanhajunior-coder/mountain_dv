import { MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

// FAB do Summit: canto inferior, radius pill, Shadow LG, pulse
// extremamente discreto (uma vez a cada 8s — nunca infinito rápido).
// "Sempre disponível. Não bloquear conteúdo."
export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-floating-cta flex h-14 w-14 animate-whatsapp-pulse items-center justify-center rounded-pill bg-success text-text-inverse shadow-lg transition-transform duration-fast ease-summit hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
