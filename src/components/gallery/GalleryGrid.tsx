"use client";

import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/data/gallery";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter],
  );

  const close = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("All")}
          className={cn(
            "rounded-sm px-4 py-2 text-sm font-semibold uppercase tracking-wide",
            filter === "All" ? "bg-cng-red text-white" : "bg-cng-grey-100 text-cng-grey-700 hover:bg-cng-grey-300/60",
          )}
        >
          All
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-sm px-4 py-2 text-sm font-semibold uppercase tracking-wide",
              filter === cat ? "bg-cng-red text-white" : "bg-cng-grey-100 text-cng-grey-700 hover:bg-cng-grey-300/60",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className={cn(
              "group block w-full overflow-hidden rounded-sm border border-cng-black/10 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cng-gold",
              img.tall ? "aspect-[3/4]" : "aspect-[4/3]",
            )}
            aria-label={`View image: ${img.alt}`}
          >
            <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
              <PlaceholderImage alt={img.alt} />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="h-[70vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
              <PlaceholderImage alt={filtered[lightboxIndex].alt} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
