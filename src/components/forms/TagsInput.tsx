"use client";

import { useState, type KeyboardEvent } from "react";
import { X } from "lucide-react";

// "Adicionar/remover tags dinamicamente" — Enter ou vírgula adiciona,
// Backspace num campo vazio remove a última tag.
export function TagsInput({
  label,
  defaultTags = [],
  onChange,
}: {
  label?: string;
  defaultTags?: string[];
  onChange?: (tags: string[]) => void;
}) {
  const [tags, setTags] = useState<string[]>(defaultTags);
  const [input, setInput] = useState("");

  function addTag(value: string) {
    const trimmed = value.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    const next = [...tags, trimmed];
    setTags(next);
    onChange?.(next);
    setInput("");
  }

  function removeTag(tag: string) {
    const next = tags.filter((t) => t !== tag);
    setTags(next);
    onChange?.(next);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(input);
    }
    if (e.key === "Backspace" && !input && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-body-sm font-medium text-text-primary">{label}</p>}
      <div className="flex flex-wrap items-center gap-2 rounded-md border border-border-default px-3 py-2 focus-within:border-primary">
        {tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1.5 rounded-pill bg-primary/10 px-3 py-1 text-body-sm text-primary">
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-primary-active">
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? "Digite e pressione Enter" : ""}
          className="min-w-[120px] flex-1 bg-transparent py-1 text-body-sm text-text-primary outline-none"
        />
      </div>
    </div>
  );
}
