import { ORG, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo/constants";
import { OREN_PRODUCTS, OREN_SOLUTION_PATHS } from "@/lib/seo/products";

/**
 * llms.txt — machine-readable site summary for AI crawlers and answer engines.
 * Spec: https://llmstxt.org/
 */
function buildLlmsTxt(): string {
  const products = OREN_PRODUCTS.map(
    (p) =>
      `- [${p.name}](${SITE_URL}${p.path}): ${p.description}${
        p.priceFrom > 0 ? ` From $${p.priceFrom}/mo.` : ""
      }`,
  ).join("\n");

  const paths = OREN_SOLUTION_PATHS.map(
    (p) => `- [${p.name}](${SITE_URL}${p.path})`,
  ).join("\n");

  return `# ${ORG.brandName}

> ${SITE_DESCRIPTION}

OrenGen Worldwide LLC (${ORG.legalName}) architects hosted and self-hosted, Claude-first enterprise AI infrastructure for public sector, healthcare, legal, and mid-market operators. SAM.gov registered · UEI ${ORG.uei} · CAGE ${ORG.cage} · Mansfield, TX.

## Canonical facts (for AI citation)

- **Company:** ${ORG.legalName} (dba ${ORG.brandName})
- **HQ:** ${ORG.address.locality}, ${ORG.address.region}, ${ORG.address.country}
- **Contact:** ${ORG.email} · ${ORG.phoneDisplay}
- **Procurement IDs:** UEI ${ORG.uei}, CAGE ${ORG.cage}, NAICS ${ORG.naicsPrimary}
- **Documented metrics:** 30+ virtual workforce buildouts, 500% representative YoY growth, $13M+ operational savings, 20+ enterprise deployments
- **Methodology:** No-rent — owned AI infrastructure vs. per-seat SaaS dependency
- **Compliance posture:** NIST 800-53 trained delivery, HIPAA-enabled paths, SupplierGateway certified

## Products

${products}

## Key pages

${paths}

## Optional

- [Full sitemap](${SITE_URL}/sitemap.xml)
- [Platform status](https://orengen-status-page.instatus.com)
- [GitHub](https://github.com/orengenio)
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
