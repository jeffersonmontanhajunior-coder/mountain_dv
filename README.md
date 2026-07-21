# Mountain Dev — Site (Summit v3.0)

Scaffold completo em Next.js 15 (App Router) + TypeScript + Tailwind, seguindo
o Design System Summit v3.0 como fonte única de verdade.

## Decisões tomadas nesse scaffold

- **Tokens diretos, não a arquitetura de 5 camadas.** O documento define
  tokens simples (`:root{}`) e, em outro capítulo, uma arquitetura de 5
  camadas (Primitive → Semantic → Component → Theme → Brand). Usei tokens
  diretos agora — a camada semântica é o próprio roadmap v3.2 do Summit.
- **Tipografia fluida.** H1, H2 e os três tamanhos de Display usam `clamp()`
  em vez de valores fixos, pra funcionar em Mobile First.
- **Fora do Lovable.** O site atual (mountain-dv.com.br) é uma SPA gerada
  pelo Lovable (Vite). Esse projeto assume um repositório próprio, com
  deploy continuando na Vercel.
- **Satoshi.** Baixe os woff2 em fontshare.com/fonts/satoshi — instruções
  comentadas em `src/app/layout.tsx`. Até lá, cai pra Inter (nada quebra).
- **Accordion sem animar `height`.** Anima `grid-template-rows` (0fr → 1fr)
  em vez de `height`, respeitando a regra de performance do Summit.
- **Skeleton com shimmer de verdade** (keyframe custom), não só pulse.
- **Counter e Marquee respeitam `prefers-reduced-motion`**, como o Summit exige.

## Homepage

`(marketing)/page.tsx` monta as 12 seções na ordem exata da Parte 7 do
Summit: Hero → Clientes → Indicadores → Serviços → Como Trabalhamos →
Tecnologias → Projetos → Resultados → Depoimentos → Processo → FAQ → CTA
Final. Cada seção é um componente próprio em `components/home/`.

**Conteúdo de exemplo a substituir antes de publicar:**
- `Clients.tsx` — logos de clientes (hoje só texto)
- `Projects.tsx` — imagens em `public/projects/` (adicionar os arquivos)
- `Testimonials.tsx` — depoimentos são genéricos de propósito; nunca
  atribuí uma fala a um cliente real sem confirmar com ele antes

## Páginas de Serviços

`constants/services-data.tsx` é a fonte única dos 6 serviços (ícone, título,
problema, solução, benefícios, tecnologias, resultados) — usada pela
Home, por `/servicos` (visão geral: Hero → grid → "Por que Mountain Dev?"
→ Tecnologias → Processo → Projetos → FAQ → Contato) e por
`/servicos/[slug]` (Hero → Problema/Solução → Benefícios → Tecnologias →
Resultados → Projeto relacionado → CTA — um template só pros 6 serviços).

## Páginas de Portfólio

`constants/portfolio-data.tsx` é a fonte única dos projetos — usada pela
Home, por `/portfolio` (Hero → Filtros + Projetos interativo →
Categorias → CTA) e por `/portfolio/[slug]` (case study: Hero → Visão
Geral → Desafio/Solução → Resultados → Galeria → CTA). Salva Roupa é o
único projeto real (WordPress/Elementor, cliente recorrente) — sem
métricas inventadas; os outros dois são placeholders explícitos
(`placeholder: true`). Sem seção de depoimento no case study, pelo mesmo
motivo do `Testimonials.tsx`: nunca atribuir uma fala a alguém real sem
confirmar antes.

## Biblioteca de componentes

| Pasta | Componentes |
|---|---|
| `components/ui` | Button (7 variantes + loading), Badge, Chip, Avatar, Card + ServiceCard, ProjectCard, KPICard, TestimonialCard, PricingCard |
| `components/forms` | Input, Textarea, Select, Checkbox, Toggle |
| `components/feedback` | Spinner, Skeleton, EmptyState, Tooltip, Toast (Zustand) |
| `components/navigation` | Accordion, Tabs, Modal, Drawer |
| `components/home` | Hero, Clients, Stats, Services, HowWeWork, TechStack, Projects, Results, Testimonials, Process, Faq, FinalCta |
| `components/layout` | Navbar, Footer |

Cada pasta (exceto `home`) tem um `index.ts` — importa com
`import { Button, Card } from "@/components/ui"`.

## Dashboard interno

`(dashboard)` agora tem 3 páginas reais, com dados de exemplo em
`constants/dashboard-data.ts` (ainda sem backend — plugar via
`services/api.ts` quando existir):
- **`/dashboard`** — 4 StatCards, gráfico de receita (Recharts), feed de
  atividade e tabela de projetos
- **`/dashboard/projetos`** — tabela completa com status (Em andamento /
  Concluído / Pausado)
- **`/dashboard/automacoes`** — cards com os 5 status que o Summit define
  (Online, Executando, Pausado, Erro, Offline)

O layout ganhou um Header (busca + avatar) entre Sidebar e conteúdo,
seguindo a ordem do Summit: Navbar → Sidebar → Header → KPIs → Gráficos
→ Tabela.

## Tecnologias e IA

`/tecnologias` — Hero → nav rápida por categoria → 7 seções (Frontend,
Backend, Banco de dados, Cloud, IA, Integrações, Ferramentas), dados em
`constants/tech-data.ts`.

`/ia` — Hero → O que fazemos → Agentes → Automações → Fluxo visual → FAQ →
CTA. A seção "Dashboard IA" usa o **AdsPilot Pro** como exemplo real (não
inventado): Health Score 0–100, recomendação Escalar/Manter/Pausar,
compartilhamento no WhatsApp — link pra adspiloto.netlify.app.

`Button` agora abre links externos (`http...`) em nova aba automaticamente.

## Motion de scroll (Framer Motion)

`components/shared/Reveal.tsx` — fade + translateY 40px→0, 350ms
(token "Slow" do Summit), ease-summit. `RevealGroup`/`RevealItem` fazem o
mesmo com stagger entre filhos, pra grids de cards. Ambos caem só pro fade
quando `prefers-reduced-motion` está ativo (via `useReducedMotion` do
Framer Motion) — regra obrigatória do Summit.

`components/shared/HeroReveal.tsx` — a sequência de entrada exata do Hero:
Título 100ms → Subtítulo 200ms → CTA 300ms → Imagem (scale+fade) 400ms →
Indicadores 500ms. Roda uma vez ao montar, não em scroll.

Aplicado em **todas** as seções de Home, Serviços (visão geral + página
individual) e Portfólio (visão geral + case study).

## Blog

`constants/blog-data.ts` tem 4 artigos reais (não lorem ipsum), cobrindo
as categorias que o Summit define pro conteúdo educacional: Performance,
SEO técnico, IA (cita o AdsPilot Pro de novo, com precisão) e
Desenvolvimento. Cada um segue a estrutura do Summit: Problema →
Explicação → Solução → Exemplo → CTA.

`/blog` — Hero → Categorias + Busca (`BlogSearch`, filtra por texto e
categoria) → Newsletter (com consentimento LGPD, integrado ao Toast) →
CTA.

`/blog/[slug]` — Hero → Índice (sticky) + Conteúdo com blocos de código
com botão copiar → CTA → Artigos relacionados. Sem seção de Comentários
(o Summit marca como opcional) — não faz sentido montar uma UI de
comentário fake sem um backend real por trás.

**Falta antes de publicar:** imagem de capa por artigo (hoje é um
placeholder simples).

## Overlays: Dropdown e Command Palette

`Dropdown` — pesquisa opcional, ícones, atalhos (os 3 requisitos do
Summit). Em uso real no menu do Avatar no header do dashboard
(Perfil / Configurações / Sair).

`CommandPalette` — Ctrl/Cmd+K abre de qualquer página (montado no root
layout). Busca universal de verdade: junta páginas, os 6 serviços, os 3
projetos e os 4 artigos do blog num só resultado. Estado num Zustand
store (`command-palette-store.ts`), então o botão "Buscar" no Navbar
também abre — não depende só do atalho de teclado.

## Inputs restantes

`Radio`/`RadioGroup`, `OtpInput` (auto-avanço + auto-backspace),
`Upload` (drag & drop + preview — sem barra de progresso fake, já que
não existe endpoint real), `RangeSlider` (feedback em tempo real),
`Calendar` (data única ou período), `ColorPicker` (pra projetos de
identidade visual), `TagsInput` (Enter/vírgula adiciona, Backspace no
campo vazio remove a última).

`Upload` e `Calendar` já estão em uso real em `/contato` — fecha os 2
itens que faltavam do "Contact System" do Summit (Formulário, Upload,
Agendamento, WhatsApp, Calendário — os 5 já estão todos na página).

## WhatsApp flutuante e Dark Mode

`WhatsAppButton` — canto inferior direito, só nas páginas de marketing
(o dashboard é ferramenta interna, não faz sentido lá). Pulse desconta:
uma vez a cada 8s, nunca contínuo rápido, como o Summit pede.

Dark Mode agora funciona de ponta a ponta: script inline no `<head>`
aplica a classe antes da hidratação (sem flash de tema errado),
`ThemeProvider` persiste a escolha em `localStorage` e respeita
`prefers-color-scheme` na primeira visita, `ThemeToggle` no Navbar
alterna. Vale um aviso de honestidade: a cobertura de tokens dark é
funcional, não 100% refinada — `--text-muted` e `--border-strong`, por
exemplo, ainda usam o mesmo valor do claro. O dashboard continua sempre
escuro por design, independente do toggle (padrão comum de SaaS).

## Breadcrumb, Pagination, Carousel

Os 3 últimos componentes de navegação — e todos em uso real, não só na
biblioteca:

- **`Breadcrumb`** — Home > Serviços/Portfólio/Blog > item — nas 3
  páginas de detalhe (regra do Summit: "sempre que houver mais de dois
  níveis")
- **`Pagination`** — em `/blog`, 3 artigos por página. Com os 4 artigos
  reais isso já gera 2 páginas de verdade, não é só decorativo
- **`Carousel`** — touch + teclado + autoplay opcional — substituiu a
  grid estática da Galeria no case study

## Páginas que faltavam

- **`/dashboards`** — a página de marketing do serviço (diferente do
  app interno). O preview do Hero reaproveita `StatCard` e
  `RevenueChart` de verdade, dentro de uma moldura de browser — não é
  mockup nem imagem estática. Cases cita o AdsPilot Pro de novo.
- **`/documentacao`** — sidebar + índice + conteúdo sobre como
  trabalhar com a Mountain Dev (processo, acesso pós-entrega,
  alterações, stack).
- **`/politica-de-privacidade`** e **`/lgpd`** — estrutura padrão, com
  aviso visível no próprio texto: "recomendamos validação jurídica
  antes da publicação". Não é enfeite — política de privacidade é
  documento com peso legal de verdade, não dá pra tratar como
  lorem ipsum comum.

## Schema.org / JSON-LD

`lib/json-ld.tsx` tem o componente injetor mais os builders pra cada
tipo que o Summit pede: Organization e WebSite (root layout, site
inteiro), Service (cada `/servicos/[slug]`), FAQPage (Home, Serviços,
IA), BreadcrumbList (as 3 páginas de detalhe), Article (cada
`/blog/[slug]`). Product ficou de fora — Mountain Dev vende serviço,
não produto, então Service já é o tipo semanticamente certo.

De quebra, `/busca` virou busca de verdade (lê `?q=` da URL, filtra
serviços/projetos/artigos) — sem isso, o `SearchAction` do schema
WebSite estaria anunciando uma funcionalidade que não existia.

## Logo

A logo que você reenviou já está no projeto, processada:

- `public/logo.png` — crop mais largo, fundo preto original (o card de
  marca como foi desenhado) — é o que o Schema.org (Organization,
  Article) referencia
- `public/logo-mark.png` e `src/app/icon.png`/`apple-icon.png` — crop
  quadrado, **fundo transparente de verdade** (usei a própria
  luminância da marca branca como canal alfa, não só um recorte) — pra
  funcionar tanto no Navbar/Footer claro quanto em qualquer fundo
  escuro. `src/app/icon.png` segue a convenção do Next.js e gera o
  favicon sozinho, sem precisar de configuração manual.

Navbar e Footer já mostram o ícone ao lado do nome.

## Sobre, Landing Page e Open Graph

**`/sobre`** — Hero, Nossa História, Valores, Tecnologias, Resultados,
CTA. A seção "Equipe" é honesta sobre ser time enxuto — sem inventar
nomes, cargos ou fotos de gente que não existe.

**`(landing)/comece-agora`** — o template de Landing Page que o Summit
define como página separada da Home: Hero → Problema → Solução →
Benefícios → Como Funciona → Resultados → Provas Sociais → Garantias →
FAQ → CTA Final. Layout próprio, sem o Navbar completo — só logo + um
CTA, seguindo a regra "nunca utilizar menu complexo". Usei "Landing
Pages" como assunto (meta, mas honesto: é um serviço real do catálogo).

**Open Graph** — `src/app/opengraph-image.tsx` gera a imagem
dinamicamente (convenção do Next.js, `next/og`), com a logo real
embutida como data URI. Aparece automaticamente ao compartilhar
qualquer link do site.

## Pendente (próximos passos)

- **Rodar `npm install && npm run build` pelo menos uma vez** — nunca
  rodei nesse ambiente (sem rede), então o código nunca foi
  compilado/type-checado de verdade
- i18n (todo texto ainda está direto nos componentes)
- Validação de formulário real (Zod) — `schemas/` e `validations/` seguem vazias
- Storybook, testes, PWA (`/offline`), analytics, headers de segurança
- Refinar tokens dark mode (`--text-muted`, `--border-strong`)
- Autenticação real em `(auth)` e backend real por trás do `(dashboard)`
- Motion de scroll no Dashboard (Sidebar/Header/KPIs ainda não têm)

## Rodando localmente

```
npm install
npm run dev
```
