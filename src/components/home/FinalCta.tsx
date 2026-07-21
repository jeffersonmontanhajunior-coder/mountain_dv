import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary px-5 py-24 text-center md:px-20">
      <Reveal>
        <h2 className="mx-auto max-w-xl font-display text-h2 font-bold text-text-inverse">
          Seu próximo cliente está a um clique.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-body-lg text-white/80">
          Solicita um orçamento e recebe uma resposta em até 24h.
        </p>
        <div className="mt-8">
          <Button href="/contato" variant="secondary" size="lg" className="border-none bg-surface text-primary hover:bg-surface">
            Solicitar orçamento
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
