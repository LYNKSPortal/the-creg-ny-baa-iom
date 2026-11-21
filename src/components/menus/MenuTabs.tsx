"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { menuCategories } from "@/data/menus";
import { cn } from "@/lib/utils";

export function MenuTabs() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  return (
    <div>
      <div role="tablist" aria-label="Menu categories" className="flex flex-wrap gap-2 border-b border-cng-black/10 pb-4">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            id={`tab-${cat.id}`}
            aria-selected={activeId === cat.id}
            aria-controls={`panel-${cat.id}`}
            onClick={() => setActiveId(cat.id)}
            className={cn(
              "rounded-sm px-4 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors",
              activeId === cat.id ? "bg-cng-red text-white" : "bg-cng-grey-100 text-cng-grey-700 hover:bg-cng-grey-300/60",
            )}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src={active.image}
            alt={active.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-cng-black">{active.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-cng-grey-700">{active.description}</p>
          {active.pdfHref ? (
            <a
              href={active.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-cng-black px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-cng-black-soft"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download {active.title}
            </a>
          ) : (
            <p className="mt-6 inline-flex items-center gap-2 rounded-sm border border-dashed border-cng-black/20 px-4 py-3 text-sm text-cng-grey-500">
              <FileText className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              Full menu details coming soon — please call us for today&apos;s offering.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
