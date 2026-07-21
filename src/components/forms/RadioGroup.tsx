"use client";

import { Radio } from "./Radio";

interface RadioGroupProps {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function RadioGroup({ name, label, options, defaultValue, onChange }: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      {label && <p className="text-body-sm font-medium text-text-primary">{label}</p>}
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <Radio
            key={opt.value}
            name={name}
            value={opt.value}
            label={opt.label}
            defaultChecked={opt.value === defaultValue}
            onChange={() => onChange?.(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}
