"use client";

import { useState, type InputHTMLAttributes } from "react";

interface RangeSliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: string;
  min?: number;
  max?: number;
  formatValue?: (value: number) => string;
  onValueChange?: (value: number) => void;
}

// "Feedback em tempo real" — o valor atualiza a cada movimento do slider.
export function RangeSlider({
  label,
  min = 0,
  max = 100,
  defaultValue = 50,
  formatValue,
  onValueChange,
  ...props
}: RangeSliderProps) {
  const [value, setValue] = useState(Number(defaultValue));

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="flex items-center justify-between">
          <p className="text-body-sm font-medium text-text-primary">{label}</p>
          <span className="text-body-sm font-bold text-primary">{formatValue ? formatValue(value) : value}</span>
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const next = Number(e.target.value);
          setValue(next);
          onValueChange?.(next);
        }}
        className="h-2 w-full cursor-pointer appearance-none rounded-pill bg-border-default accent-primary"
        {...props}
      />
    </div>
  );
}
