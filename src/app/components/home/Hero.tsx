import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroReveal } from "@/components/shared/HeroReveal";

const STACK = ["React", "Next.js", "TypeScript", "Tailwind", "IA"];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-20 md:px-20 md:pb-32 md:pt-28">
      {/* Background: glow + linhas geométricas discretas (opacidade máxima 25%/6%) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-pill bg-gradient-to-br from-primary/25 to-secondary/25 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" aria-hidden>
          <pattern id="mountain-lines" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M0 120 L60 20 L120 120" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#mountain-lines)" className="text-text-primary" />
        </svg>
      </div>

      <div className="mx-auto max-w-container-xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            {/* Título — 100ms */}
            <HeroReveal delayMs={100}>
              <Badge variant="ai">Tecnologia + IA</Badge>
              <h1 className="mt-6 max-w-xl font-display text-h1 font-bold text-text-primary">
                Sites rápidos, sistemas inteligentes e IA que gera resultado.
              </h1>
            </HeroReveal>

            {/* Subtítulo — 200ms */}
            <HeroReveal delayMs={200}>
              <p className="mt-6 max-w-md text-body-lg text-text-secondary">
                Construímos produtos digitais pra pequenas empresas que
                precisam de mais que um site bonito — precisam de clientes.
              </p>
            </HeroReveal>

            {/* CTA — 300ms */}
            <HeroReveal delayMs={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contato" size="lg">
                  Solicitar orçamento
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  Ver projetos
                </Button>
              </div>
            </HeroReveal>

            {/* Indicadores — 500ms */}
            <HeroReveal delayMs={500}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-body-sm text-text-secondary">
                <span className="font-bold text-text-primary">95+ Lighthouse</span>
                <span className="h-1 w-1 rounded-pill bg-border-strong" />
                <span className="font-bold text-text-primary">30+ projetos entregues</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </HeroReveal>
          </div>

          {/* Imagem (mockup) — scale+fade, 400ms */}
          <HeroReveal delayMs={400} scale className="relative">
            <div className="overflow-hidden rounded-xl border border-border-light bg-surface shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-border-light px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-pill bg-danger/60" />
                <span className="h-2.5 w-2.5 rounded-pill bg-warning/60" />
                <span className="h-2.5 w-2.5 rounded-pill bg-success/60" />
              </div>
              <div className="grid gap-3 p-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 animate-pulse rounded-md bg-primary/10" />
                  <div className="h-16 animate-pulse rounded-md bg-secondary/10 [animation-delay:150ms]" />
                  <div className="h-16 animate-pulse rounded-md bg-success/10 [animation-delay:300ms]" />
                </div>
                <div className="h-32 rounded-md bg-bg-soft" />
                <div className="h-3 w-3/4 rounded-pill bg-bg-soft" />
                <div className="h-3 w-1/2 rounded-pill bg-bg-soft" />
              </div>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
