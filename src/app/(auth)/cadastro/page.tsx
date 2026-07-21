import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/forms/Input";

export const metadata: Metadata = { title: "Criar conta" };

export default function CadastroPage() {
  return (
    <form className="flex flex-col gap-5">
      <h1 className="text-h5 font-bold text-text-primary">Criar conta</h1>
      <Input label="Nome" placeholder="Seu nome" />
      <Input label="E-mail" type="email" placeholder="voce@email.com" />
      <Input label="Senha" type="password" placeholder="••••••••" />
      <Button>Criar conta</Button>
      <Link
        href="/login"
        className="text-center text-body-sm text-text-secondary hover:text-primary"
      >
        Já tem conta? Entrar
      </Link>
    </form>
  );
}
