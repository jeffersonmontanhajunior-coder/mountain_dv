import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastViewport } from "@/components/feedback/Toast";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/json-ld";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

// Satoshi (fonte de display do Summit) não está no Google Fonts.
// 1. Baixe os woff2 em fontshare.com/fonts/satoshi
// 2. Salve em src/app/fonts/Satoshi-Variable.woff2
// 3. Descomente o bloco abaixo e troque `inter.variable` por
//    `${inter.variable} ${satoshi.variable}` na tag <html>
//
// import localFont from "next/font/local";
// const satoshi = localFont({
//   src: "./fonts/Satoshi-Variable.woff2",
//   variable: "--font-display",
//   display: "swap",
// });
// Até lá, --font-display já cai pra Inter (ver globals.css) — nada quebra.

export const metadata: Metadata = {
  metadataBase: new URL("https://mountain-dv.com.br"),
  title: {
    default: "Mountain Dev — Tecnologia que gera resultado",
    template: "%s | Mountain Dev",
  },
  description:
    "Criamos produtos digitais rápidos, escaláveis e preparados para crescer.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Mountain Dev" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Aplica a classe .dark antes da hidratação — evita o "flash"
            de tema claro em quem já escolheu escuro (ou cujo SO prefere
            escuro). Sem isso, ThemeProvider só reagiria depois do mount. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased">
        <ThemeProvider>
          {children}
          <ToastViewport />
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
