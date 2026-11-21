import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { primaryNav } from "@/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  return primaryNav.map((link) => ({
    url: `${siteConfig.url}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
