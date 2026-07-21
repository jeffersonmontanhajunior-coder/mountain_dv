import Image from "next/image";
import { cn } from "@/lib/utils";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  xs: "h-6 w-6 text-caption",
  sm: "h-8 w-8 text-caption",
  md: "h-10 w-10 text-body-sm",
  lg: "h-14 w-14 text-body",
  xl: "h-[72px] w-[72px] text-h6",
};

interface AvatarProps {
  src?: string;
  name: string;
  size?: Size;
}

export function Avatar({ src, name, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={72}
        height={72}
        className={cn("rounded-pill object-cover", sizes[size])}
      />
    );
  }

  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-pill bg-primary/10 font-bold text-primary",
        sizes[size],
      )}
    >
      {initials}
    </span>
  );
}
