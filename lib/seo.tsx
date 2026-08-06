import type { Metadata } from "next";

const SITE = "https://orengen.io";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE}${path.startsWith("/") ? path : `/${path}`}`;
}

const DEFAULT_OG_IMAGE = absoluteUrl("/og-image.png");

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "OrenGen Worldwide",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "OrenGen Worldwide LLC",
      url: SITE,
    },
    areaServed: ["United States", "Worldwide"],
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
