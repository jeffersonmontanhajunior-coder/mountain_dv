import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/forms/Input";

export const metadata: Metadata = { title: "Entrar" };

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-5">
      <h1 className="text-h5 font-bold text-text-primary">Entrar</h1>
      <Input label="E-mail" type="email" placeholder="voce@email.com" />
      <Input label="Senha" type="password" placeholder="••••••••" />
      <Button>Entrar</Button>
      <Link
        href="/cadastro"
        className="text-center text-body-sm text-text-secondary hover:text-primary"
      >
        Não tem conta? Cadastre-se
      </Link>
    </form>
  );
}
