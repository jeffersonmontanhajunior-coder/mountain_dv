"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

// "Autoplay opcional. Touch. Keyboard." — os 3 requisitos do Summit.
export function Carousel({ children, autoplay = false, autoplayInterval = 5000 }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const total = children.length;

  function goTo(i: number) {
    setIndex(((i % total) + total) % total);
  }

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => goTo(index + 1), autoplayInterval);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayInterval, index, total]);

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") goTo(index - 1);
    if (e.key === "ArrowRight") goTo(index + 1);
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goTo(index - 1);
    if (delta < -50) goTo(index + 1);
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden rounded-lg outline-none"
    >
      <div
        className="flex transition-transform duration-slow ease-summit"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {children.map((child, i) => (
          <div key={i} className="w-full shrink-0">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={() => goTo(index - 1)}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-pill bg-surface/90 text-text-primary shadow-md transition-colors duration-fast hover:bg-surface"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Próximo"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-pill bg-surface/90 text-text-primary shadow-md transition-colors duration-fast hover:bg-surface"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para o item ${i + 1}`}
            className={cn("h-1.5 rounded-pill transition-all duration-fast", i === index ? "w-5 bg-primary" : "w-1.5 bg-surface/70")}
          />
        ))}
      </div>
    </div>
  );
}
