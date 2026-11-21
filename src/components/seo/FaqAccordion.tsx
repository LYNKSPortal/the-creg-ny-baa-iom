"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/data/faqs";

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-cng-black/10 border-t border-cng-black/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-lg font-bold uppercase tracking-tight text-cng-black sm:text-xl">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn("h-5 w-5 flex-shrink-0 text-cng-red transition-transform duration-200", isOpen && "rotate-180")}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid overflow-hidden transition-all duration-200", isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}
            >
              <div className="min-h-0">
                <p className="max-w-3xl text-sm leading-relaxed text-cng-grey-700 sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
