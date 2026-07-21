"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-bg-dark/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-xl bg-surface p-10 shadow-xl transition duration-normal ease-summit">
        <button onClick={onClose} className="absolute right-6 top-6 text-text-muted">
          <X className="h-5 w-5" />
        </button>
        {title && <h2 className="text-h5 font-bold text-text-primary">{title}</h2>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
