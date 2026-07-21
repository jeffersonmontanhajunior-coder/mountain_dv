"use client";

import { useRef, useState, type KeyboardEvent } from "react";

interface OtpInputProps {
  length?: number;
  onComplete?: (value: string) => void;
}

// "Campos separados. Auto avanço." — o Summit define assim pro OTP.
export function OtpInput({ length = 6, onComplete }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(index: number, digit: string) {
    if (!/^[0-9]?$/.test(digit)) return;
    const next = [...values];
    next[index] = digit;
    setValues(next);

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    if (next.every((v) => v !== "")) {
      onComplete?.(next.join(""));
    }
  }

  function handleKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  return (
    <div className="flex gap-3">
      {values.map((value, i) => (
        <input
          key={i}
          ref={(el) => {
            inputsRef.current[i] = el;
          }}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          inputMode="numeric"
          maxLength={1}
          className="h-14 w-12 rounded-md border border-border-default text-center text-h5 font-bold text-text-primary outline-none focus:border-primary"
        />
      ))}
    </div>
  );
}
