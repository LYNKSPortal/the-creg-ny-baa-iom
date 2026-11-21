import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

type PageMeta = {
  href: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

// Priorities/frequencies tuned by how often each page's content changes and
// how central it is to the site (kept separate from primaryNav so this can
// diverge, e.g. if a page is added that shouldn't appear in the header).
const pages: PageMeta[] = [
  { href: "/", changeFrequency: "weekly", priority: 1 },
  { href: "/menus", changeFrequency: "weekly", priority: 0.9 },
  { href: "/functions-events", changeFrequency: "monthly", priority: 0.8 },
  { href: "/tt-2027", changeFrequency: "weekly", priority: 0.9 },
  { href: "/mgp-classic-tt", changeFrequency: "monthly", priority: 0.7 },
  { href: "/merchandise", changeFrequency: "monthly", priority: 0.6 },
  { href: "/gallery", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
