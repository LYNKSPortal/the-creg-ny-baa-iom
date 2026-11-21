"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, testimonialsPlaceholderNote } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) {
    return (
      <div className="mx-auto max-w-2xl rounded-sm border border-dashed border-cng-black/20 bg-white p-8 text-center text-sm text-cng-grey-700">
        {testimonialsPlaceholderNote}
      </div>
    );
  }

  const current = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="mx-auto max-w-2xl text-center" role="region" aria-roledescription="carousel" aria-label="Customer testimonials">
      <Quote className="mx-auto h-8 w-8 text-cng-gold" aria-hidden="true" />
      <p className="mt-4 text-balance font-display text-2xl font-medium leading-snug text-cng-black sm:text-3xl" aria-live="polite">
        &ldquo;{current.quote}&rdquo;
      </p>
      {current.source ? <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-cng-grey-500">{current.source}</p> : null}
      {testimonials.length > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button type="button" onClick={prev} aria-label="Previous testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cng-black/15 hover:border-cng-red hover:text-cng-red">
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={next} aria-label="Next testimonial" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cng-black/15 hover:border-cng-red hover:text-cng-red">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
