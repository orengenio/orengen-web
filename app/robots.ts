import type { MetadataRoute } from "next";

const PUBLIC_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const privatePaths = ["/api/", "/cart", "/login", "/search"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: PUBLIC_CRAWLERS,
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: "https://orengen.io/sitemap.xml",
    host: "https://orengen.io",
  };
}
