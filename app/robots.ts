import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/constants";

/**
 * robots.txt — allows major search and AI answer-engine crawlers so OrenGen
 * content can be indexed and cited by ChatGPT, Claude, Perplexity, Google AI
 * Overviews, etc.
 */
export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const };

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "GPTBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "anthropic-ai", ...allowAll },
      { userAgent: "ClaudeBot", ...allowAll },
      { userAgent: "Claude-Web", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Applebot-Extended", ...allowAll },
      { userAgent: "cohere-ai", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
