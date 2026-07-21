"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  delayMs: number;
  className?: string;
  scale?: boolean;
}

// Hero Motion do Summit: Título 100ms → Subtítulo 200ms → CTA 300ms →
// Imagem (scale+fade) 400ms → Indicadores 500ms. Roda uma vez, ao montar
// (não é scroll reveal — o Hero já está visível no primeiro paint).
export function HeroReveal({ children, delayMs, className, scale }: HeroRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : scale
      ? { opacity: 0, scale: 0.95 }
      : { opacity: 0, y: 24 };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : scale
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.35,
        delay: shouldReduceMotion ? 0 : delayMs / 1000,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
