import { CASE_STUDIES } from "@/lib/caseStudies";
import { ORG, SITE_URL } from "./constants";
import type { FaqEntry } from "./faqs";
import { OREN_PRODUCTS } from "./products";

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function buildOrganization(): JsonLd {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: ORG.legalName,
    alternateName: ORG.brandName,
    url: ORG.url,
    logo: { "@type": "ImageObject", url: ORG.logo },
    image: ORG.logo,
    email: ORG.email,
    telephone: ORG.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORG.address.locality,
      addressRegion: ORG.address.region,
      addressCountry: ORG.address.country,
    },
    sameAs: [...ORG.sameAs],
    knowsAbout: [...ORG.knowsAbout],
    identifier: [
      { "@type": "PropertyValue", name: "UEI", value: ORG.uei },
      { "@type": "PropertyValue", name: "CAGE Code", value: ORG.cage },
      { "@type": "PropertyValue", name: "Primary NAICS", value: ORG.naicsPrimary },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Government Registration",
        name: "SAM.gov Registered",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification",
        name: "SupplierGateway Supplier Impact Certified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Training",
        name: "NIST SP 800-53 Risk Management Framework",
      },
    ],
  };
}

export function buildWebSite(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: ORG.brandName,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPage({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

export function buildFAQPage(faqs: FaqEntry[], pageUrl: string): JsonLd {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildBreadcrumbList(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildServiceCatalog(): JsonLd {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#product-catalog`,
    name: "OrenGen Product Suite",
    itemListElement: OREN_PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE_URL}${p.path}#service`,
        name: p.name,
        url: `${SITE_URL}${p.path}`,
        description: p.description,
        serviceType: p.category,
        provider: { "@id": ORG_ID },
        areaServed: "United States",
        ...(p.priceFrom > 0
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: p.currency,
                price: String(p.priceFrom),
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: String(p.priceFrom),
                  priceCurrency: p.currency,
                  unitText: "MONTH",
                },
              },
            }
          : {}),
      },
    })),
  };
}

export function buildCaseStudyItemList(): JsonLd {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/case-studies#list`,
    name: "OrenGen Documented Outcomes",
    itemListElement: CASE_STUDIES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Article",
        "@id": `${SITE_URL}/case-studies#${s.id}`,
        headline: s.headline,
        description: s.summary,
        author: { "@id": ORG_ID },
        publisher: { "@id": ORG_ID },
        about: s.sector,
      },
    })),
  };
}

export function buildGlobalSiteGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganization(), buildWebSite(), buildServiceCatalog()],
  };
}

export function buildPageGraph(...nodes: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
