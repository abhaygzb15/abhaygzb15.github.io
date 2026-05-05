"use client";

import { cn } from "@/lib/utils";

interface NoiseTextureProps {
  className?: string;
}

export function NoiseTexture({ className }: NoiseTextureProps) {
  return (
    <svg
      className={cn("pointer-events-none h-full w-full opacity-45", className)}
      aria-hidden="true"
    >
      <filter id="noise-texture-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-texture-filter)" />
    </svg>
  );
}
