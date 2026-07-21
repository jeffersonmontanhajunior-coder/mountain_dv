"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border-dark bg-surface-dark">
      <div className="flex items-center justify-between border-b border-border-dark px-4 py-2">
        <span className="text-caption text-text-muted">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-caption text-text-muted transition-colors duration-fast hover:text-text-inverse"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-body-sm text-text-inverse">
        <code>{code}</code>
      </pre>
    </div>
  );
}
