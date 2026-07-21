import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Calendar } from "@/components/forms/Calendar";
import { Checkbox } from "@/components/forms/Checkbox";
import { Input } from "@/components/forms/Input";
import { Textarea } from "@/components/forms/Textarea";
import { Upload } from "@/components/forms/Upload";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Mountain Dev.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto grid max-w-container-xl gap-16 px-5 py-24 md:grid-cols-2 md:px-20 md:py-40">
      <div>
        <p className="mb-4 text-caption font-medium uppercase tracking-wide text-primary">
          Contato
        </p>
        <h1 className="max-w-md font-display text-h1 font-bold text-text-primary">
          Vamos construir seu próximo projeto.
        </h1>
        <p className="mt-6 max-w-md text-body-lg text-text-secondary">
          Preenche o formulário, anexa referências se tiver, ou agenda uma
          call direto no calendário.
        </p>
        <Button
          href={`https://wa.me/${SITE.whatsapp}`}
          variant="secondary"
          className="mt-8"
        >
          Chamar no WhatsApp — {SITE.whatsappDisplay}
        </Button>

        <div className="mt-10">
          <p className="mb-3 text-body-sm font-medium text-text-primary">
            Ou agenda uma call
          </p>
          <Calendar mode="single" />
        </div>
      </div>

      <form className="flex flex-col gap-5">
        <Input label="Nome" placeholder="Seu nome" />
        <Input label="E-mail" type="email" placeholder="voce@email.com" />
        <Textarea label="Como podemos ajudar?" placeholder="Conta um pouco do seu projeto" />
        <div>
          <p className="mb-2 text-body-sm font-medium text-text-primary">
            Referências (opcional)
          </p>
          <Upload />
        </div>
        <Checkbox label="Concordo com a política de privacidade (LGPD)" />
        <Button type="submit">Enviar mensagem</Button>
      </form>
    </section>
  );
}
