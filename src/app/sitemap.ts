import type { MetadataRoute } from "next";

const routes = [
  "",
  "/servicos",
  "/portfolio",
  "/tecnologias",
  "/ia",
  "/dashboards",
  "/blog",
  "/sobre",
  "/contato",
  "/documentacao",
  "/politica-de-privacidade",
  "/lgpd",
  "/status",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mountain-dv.com.br";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
