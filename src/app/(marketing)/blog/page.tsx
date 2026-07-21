import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Newsletter } from "@/components/blog/Newsletter";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdo sobre performance, SEO, IA e desenvolvimento.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-container-xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <p className="text-caption font-medium uppercase tracking-wide text-primary">Blog</p>
          <h1 className="mt-4 max-w-2xl font-display text-h1 font-bold text-text-primary">
            Conteúdo pra quem constrói.
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-text-secondary">
            Guias e bastidores sobre performance, SEO técnico, IA e
            desenvolvimento — sem enrolação.
          </p>
        </Reveal>
      </section>

      {/* Categorias + Busca + Artigos */}
      <section className="mx-auto max-w-container-xl px-5 pb-20 md:px-20">
        <Reveal>
          <BlogSearch />
        </Reveal>
      </section>

      {/* Newsletter */}
      <section className="bg-bg-soft px-5 py-20 md:px-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-h3 font-bold text-text-primary">Receba conteúdo novo</h2>
          <p className="mt-3 text-body text-text-secondary">Sem spam — só o que a gente realmente publica.</p>
          <div className="mt-8 text-left">
            <Newsletter />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-container-xl px-5 py-24 text-center md:px-20">
        <Reveal>
          <h2 className="text-h3 font-bold text-text-primary">Quer aplicar isso no seu negócio?</h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contato" size="lg">
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
