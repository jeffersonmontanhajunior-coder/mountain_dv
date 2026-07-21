import { SITE } from "@/constants/site";

// Componente genérico pra injetar qualquer bloco JSON-LD.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    sameAs: [SITE.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${SITE.whatsapp}`,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/busca?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(service: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.description,
    url: `${SITE.url}/servicos/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: "BR",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
    })),
  };
}

export function articleSchema(post: {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    url: `${SITE.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
  };
}
