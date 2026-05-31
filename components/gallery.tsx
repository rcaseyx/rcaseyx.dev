"use client";

import { useState, useEffect, useCallback } from "react";
import type { CloudinaryImage } from "@/lib/cloudinary";

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

function buildUrl(publicId: string, width: number): string {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GalleryItem({ img, onClick }: { img: CloudinaryImage; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className="block w-full mb-4 overflow-hidden cursor-pointer focus:outline-none group"
    >
      <div className="bg-[var(--color-bg-raised)] w-full" style={{ aspectRatio: img.width / img.height }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={buildUrl(img.public_id, 800)}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto transition-opacity duration-500 group-hover:opacity-75 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </button>
  );
}

type Direction = "next" | "prev" | "open";

function LightboxImage({ img }: { img: CloudinaryImage }) {
  const [src, setSrc] = useState(buildUrl(img.public_id, 800));

  useEffect(() => {
    setSrc(buildUrl(img.public_id, 800));
    const image = new window.Image();
    image.src = buildUrl(img.public_id, 1600);
    image.onload = () => setSrc(buildUrl(img.public_id, 1600));
  }, [img.public_id]);

  return (
    <img
      src={src}
      alt=""
      className="w-full h-auto max-h-[90vh] object-contain"
    />
  );
}

export default function Gallery({ images }: { images: CloudinaryImage[] }) {
  const [shuffled, setShuffled] = useState<CloudinaryImage[]>(images);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setShuffled(shuffle(images));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [direction, setDirection] = useState<Direction>("open");

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setDirection("prev");
    setActiveIndex((i) => i === null ? null : (i - 1 + shuffled.length) % shuffled.length);
  }, [shuffled.length]);

  const next = useCallback(() => {
    setDirection("next");
    setActiveIndex((i) => i === null ? null : (i + 1) % shuffled.length);
  }, [shuffled.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  if (shuffled.length === 0) {
    return <p className="text-sm text-[var(--color-text-muted)]">Nothing here yet.</p>;
  }

  const active = activeIndex !== null ? shuffled[activeIndex] : null;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {shuffled.map((img, i) => (
          <GalleryItem
            key={img.public_id}
            img={img}
            onClick={() => { setDirection("open"); setActiveIndex(i); }}
          />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white text-3xl transition-colors select-none cursor-pointer z-10"
            aria-label="Previous"
          >
            ←
          </button>

          <div
            key={active.public_id}
            className={`max-w-5xl max-h-[90vh] w-full px-16 ${
              direction === "next" ? "animate-slide-from-right" :
              direction === "prev" ? "animate-slide-from-left" :
              "animate-fade-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <LightboxImage img={active} />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white text-3xl transition-colors select-none cursor-pointer z-10"
            aria-label="Next"
          >
            →
          </button>

          <button
            onClick={close}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors cursor-pointer z-10"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
