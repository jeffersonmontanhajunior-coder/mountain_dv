"use client";

import { useState, type DragEvent } from "react";
import { File, Upload as UploadIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadedFile {
  name: string;
  size: number;
}

// "Área Drag & Drop. Preview." — sem "Progresso" simulado de propósito:
// não existe endpoint real ainda, e uma barra de progresso fake passaria
// a impressão de um upload que não está de fato acontecendo.
export function Upload({ onFilesSelected }: { onFilesSelected?: (files: File[]) => void }) {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);

  function handleFiles(fileList: FileList) {
    const list = Array.from(fileList).map((f) => ({ name: f.name, size: f.size }));
    setFiles((prev) => [...prev, ...list]);
    onFilesSelected?.(Array.from(fileList));
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  }

  return (
    <div>
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed p-10 text-center transition-colors duration-fast",
          dragging ? "border-primary bg-primary/5" : "border-border-default hover:border-primary",
        )}
      >
        <UploadIcon className="h-8 w-8 text-text-muted" />
        <p className="text-body-sm text-text-secondary">
          Arraste arquivos aqui ou <span className="font-medium text-primary">clique pra escolher</span>
        </p>
        <input
          type="file"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </label>

      {files.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center justify-between rounded-md border border-border-light bg-surface px-4 py-3"
            >
              <span className="flex items-center gap-2 text-body-sm text-text-primary">
                <File className="h-4 w-4 text-text-muted" />
                {file.name}
                <span className="text-caption text-text-muted">{(file.size / 1024).toFixed(0)} KB</span>
              </span>
              <button onClick={() => removeFile(file.name)} className="text-text-muted hover:text-danger">
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
