"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, testimonialsPlaceholderNote } from "@/data/testimonials";
import { cn } from "@/lib/utils";

type TestimonialCarouselProps = {
  align?: "center" | "left";
};

export function TestimonialCarousel({ align = "center" }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const centered = align === "center";

  if (testimonials.length === 0) {
    return (
      <div className={cn("rounded-sm border border-dashed border-cng-black/20 bg-white p-8 text-sm text-cng-grey-700", centered ? "mx-auto max-w-2xl text-center" : "text-left")}>
        {testimonialsPlaceholderNote}
      </div>
    );
  }

  const current = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div
      className={cn(centered && "mx-auto max-w-2xl text-center")}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <Quote className={cn("h-10 w-10 text-cng-red", centered && "mx-auto")} aria-hidden="true" />
      <p
        className="mt-5 text-balance font-display text-3xl font-medium leading-snug text-cng-black sm:text-4xl"
        aria-live="polite"
      >
        &ldquo;{current.quote}&rdquo;
      </p>
      {current.source ? (
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-cng-grey-500">{current.source}</p>
      ) : null}
      {testimonials.length > 1 ? (
        <div className={cn("mt-8 flex items-center gap-4", centered && "justify-center")}>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cng-black/15 hover:border-cng-red hover:text-cng-red"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cng-black/15 hover:border-cng-red hover:text-cng-red"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-cng-grey-500">
            {index + 1} / {testimonials.length}
          </span>
        </div>
      ) : null}
    </div>
  );
}
