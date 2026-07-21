"use client";

import { useState } from "react";

const PRESET_COLORS = ["#2563EB", "#7C3AED", "#10B981", "#FACC15", "#EF4444", "#0EA5E9", "#111827", "#FFFFFF"];

// "Projetos de identidade visual" — o Summit reserva esse componente
// especificamente pra esse tipo de projeto.
export function ColorPicker({
  label,
  defaultValue = "#2563EB",
  onChange,
}: {
  label?: string;
  defaultValue?: string;
  onChange?: (color: string) => void;
}) {
  const [color, setColor] = useState(defaultValue);

  function handleChange(value: string) {
    setColor(value);
    onChange?.(value);
  }

  return (
    <div className="flex flex-col gap-3">
      {label && <p className="text-body-sm font-medium text-text-primary">{label}</p>}
      <div className="flex items-center gap-3">
        <label className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md border border-border-default">
          <input
            type="color"
            value={color}
            onChange={(e) => handleChange(e.target.value)}
            className="absolute -left-1 -top-1 h-14 w-14 cursor-pointer border-none"
          />
        </label>
        <input
          value={color}
          onChange={(e) => handleChange(e.target.value)}
          className="h-11 w-28 rounded-md border border-border-default px-3 text-body-sm uppercase text-text-primary outline-none focus:border-primary"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {PRESET_COLORS.map((preset) => (
          <button
            key={preset}
            onClick={() => handleChange(preset)}
            style={{ backgroundColor: preset }}
            className="h-7 w-7 rounded-pill border border-border-default transition-transform duration-fast hover:scale-110"
            aria-label={preset}
          />
        ))}
      </div>
    </div>
  );
}
