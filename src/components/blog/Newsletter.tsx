"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/forms/Checkbox";
import { Input } from "@/components/forms/Input";
import { useToastStore } from "@/components/feedback/toast-store";

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const show = useToastStore((s) => s.show);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    show("success", "Inscrição confirmada!");
  }

  if (submitted) {
    return <p className="text-body font-medium text-success">Inscrição confirmada — obrigado!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
      <Input label="Nome" placeholder="Seu nome" required />
      <Input label="E-mail" type="email" placeholder="voce@email.com" required />
      <Button type="submit">Inscrever</Button>
      <div className="sm:col-span-3">
        <Checkbox label="Concordo em receber e-mails da Mountain Dev (LGPD)" required />
      </div>
    </form>
  );
}
