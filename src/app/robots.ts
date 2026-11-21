import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// The entire site is public marketing content, so every crawler (including
// AI/answer-engine crawlers used for GEO/AEO visibility, e.g. ChatGPT's
// search crawler, Google's AI features, and Perplexity) is explicitly
// welcomed rather than relying on an implicit default-allow.
const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
