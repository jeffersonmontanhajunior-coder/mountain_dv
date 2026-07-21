import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/ui/cards/BlogCard";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { TableOfContents, slugify } from "@/components/blog/TableOfContents";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { Reveal } from "@/components/shared/Reveal";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/json-ld";
import { BLOG_POSTS } from "@/constants/blog-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? "Artigo", description: post?.summary };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ])}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 py-24 md:px-20 md:py-32">
        <Reveal>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="mt-6 flex items-center gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-caption text-text-muted">{post.readingTime} min de leitura</span>
          </div>
          <h1 className="mt-4 font-display text-h1 font-bold text-text-primary">{post.title}</h1>
          <p className="mt-4 text-body-lg text-text-secondary">{post.summary}</p>
        </Reveal>
      </section>

      {/* Índice + Conteúdo */}
      <section className="mx-auto max-w-container-xl px-5 pb-24 md:px-20">
        <Reveal className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={post.content} />
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {post.content.map((block) => (
              <div key={block.heading} id={slugify(block.heading)}>
                <h2 className="text-h4 font-bold text-text-primary">{block.heading}</h2>
                <p className="mt-3 text-body-lg text-text-secondary">{block.body}</p>
                {block.code && (
                  <div className="mt-4">
                    <CodeBlock language={block.code.language} code={block.code.snippet} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary px-5 py-20 text-center md:px-20">
        <Reveal>
          <h2 className="mx-auto max-w-xl font-display text-h3 font-bold text-text-inverse">
            Quer aplicar isso no seu projeto?
          </h2>
          <div className="mt-6">
            <Button
              href="/contato"
              variant="secondary"
              className="border-none bg-surface text-primary hover:bg-surface"
            >
              Solicitar orçamento
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Artigos relacionados */}
      {related.length > 0 && (
        <section className="mx-auto max-w-container-xl px-5 py-20 md:px-20">
          <Reveal>
            <h2 className="text-h3 font-bold text-text-primary">Artigos relacionados</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </Reveal>
        </section>
      )}
    </>
  );
}
