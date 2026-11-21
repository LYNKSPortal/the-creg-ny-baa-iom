"use client";

import { useState } from "react";
import { ChevronDown, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

type ArchiveDisclosureProps = {
  label: string;
  children: React.ReactNode;
};

/**
 * Collapses historical/archived pricing behind a closed-by-default toggle,
 * so it can't be mistaken for current information at a glance while
 * remaining easy to find for anyone who wants the reference material.
 */
export function ArchiveDisclosure({ label, children }: ArchiveDisclosureProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-dashed border-cng-black/20">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 bg-cng-grey-100 px-5 py-4 text-left"
      >
        <span className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-cng-grey-700">
          <Archive className="h-4 w-4 text-cng-grey-500" aria-hidden="true" />
          {label}
        </span>
        <ChevronDown className={cn("h-4 w-4 flex-shrink-0 text-cng-grey-500 transition-transform duration-200", open && "rotate-180")} aria-hidden="true" />
      </button>
      <div className={cn("grid overflow-hidden transition-all duration-200", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0">
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
