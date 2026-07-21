"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

interface CalendarProps {
  mode?: "single" | "range";
  onSelect?: (date: Date | { start: Date; end: Date | null }) => void;
}

// "Datas. Períodos." — suporta seleção de uma data ou de um período.
export function Calendar({ mode = "single", onSelect }: CalendarProps) {
  const [viewDate, setViewDate] = useState(new Date());
  const [selected, setSelected] = useState<Date | null>(null);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function handleSelect(day: number) {
    const date = new Date(year, month, day);

    if (mode === "single") {
      setSelected(date);
      onSelect?.(date);
      return;
    }

    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(date);
      setRangeEnd(null);
    } else {
      const [start, end] = date < rangeStart ? [date, rangeStart] : [rangeStart, date];
      setRangeStart(start);
      setRangeEnd(end);
      onSelect?.({ start, end });
    }
  }

  function isSelected(day: number) {
    const date = new Date(year, month, day);
    if (mode === "single") return selected?.toDateString() === date.toDateString();
    if (rangeStart && date.toDateString() === rangeStart.toDateString()) return true;
    if (rangeEnd && date.toDateString() === rangeEnd.toDateString()) return true;
    return false;
  }

  function isInRange(day: number) {
    if (mode !== "range" || !rangeStart || !rangeEnd) return false;
    const date = new Date(year, month, day);
    return date > rangeStart && date < rangeEnd;
  }

  return (
    <div className="w-full max-w-xs rounded-lg border border-border-light bg-surface p-5">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setViewDate(new Date(year, month - 1, 1))}
          className="rounded-sm p-1 text-text-muted hover:bg-bg-soft hover:text-text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <p className="text-body-sm font-bold text-text-primary">
          {MONTHS[month]} {year}
        </p>
        <button
          onClick={() => setViewDate(new Date(year, month + 1, 1))}
          className="rounded-sm p-1 text-text-muted hover:bg-bg-soft hover:text-text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-caption text-text-muted">
        {WEEKDAYS.map((day, i) => (
          <span key={i}>{day}</span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <span key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={() => handleSelect(day)}
              className={cn(
                "aspect-square rounded-sm text-body-sm text-text-primary transition-colors duration-fast hover:bg-primary/10",
                isSelected(day) && "bg-primary text-text-inverse hover:bg-primary",
                isInRange(day) && "bg-primary/10",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
