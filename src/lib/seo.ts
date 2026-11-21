import type { Metadata } from "next";
import { ogImage } from "@/data/site";

/**
 * Per-page Open Graph metadata. Next.js merges `metadata` objects shallowly:
 * if a page sets its own `openGraph` key at all, it fully replaces the root
 * layout's `openGraph` object rather than deep-merging it, so the shared
 * share image must be re-specified on every page that sets a page-specific
 * `openGraph.url` (otherwise `og:image` silently disappears on that page).
 */
export function pageOpenGraph(path: string): Metadata["openGraph"] {
  return {
    url: path,
    images: [ogImage],
  };
}
