const LLM_GUIDE = `# OrenGen Worldwide LLC

> OrenGen Worldwide architects hosted and self-hosted AI-enabled enterprise ecosystems for organizations that need governed automation, operational ownership, and implementation support.

Canonical website: https://orengen.io/
Sitemap: https://orengen.io/sitemap.xml
Legal entity: OrenGen Worldwide LLC
Founder: Andre Mandel
Headquarters: Mansfield, Texas, United States
Primary phone: +1-833-673-6436
Sales: https://orengen.io/contact-us

## Core systems

- Nexus CRM: unified CRM, pipeline, email, SMS, forms, funnels, automation, and customer communications. https://orengen.io/orennexus
- AI Employees: digital workers for qualification, scheduling, CRM operations, follow-up, and recurring workflows. https://orengen.io/orenagents/employees
- Buy-Lingual™ AI Voice: OrenGen's trademark multilingual AI voice product for inbound and outbound calls, qualification, booking, and transfer. https://orengen.io/orenagents/voice
- Agents “Better Together”: coordinated Buy-Lingual™ AI Voice and AI Employees bundles. https://orengen.io/orenagents/better-together-package
- OrenWeb: digital flagship, web design, conversational voice, and chat experiences. https://orengen.io/orenweb
- OrenSocial: managed content, publishing, engagement, listening, and reporting. https://orengen.io/orensocial

## Regulated and enterprise pathways

- OrenGov serves federal, state, local, education, and defense-facing environments. OrenGen maintains an active SAM.gov path and CAGE code 12XC1. https://orengen.io/orengov
- OrenHealth covers healthcare workflow modernization, patient-access operations, specialty clinics, and research support. https://orengen.io/orenhealth
- OrenLegal covers structured intake, matter routing, document workflows, and legal operations. https://orengen.io/orenlegal
- OrenConsulting covers fractional AI leadership, custom architecture, governance, and implementation. https://orengen.io/pricing#orenconsulting

## Commercial and trust references

- Complete pricing and direct checkout paths: https://orengen.io/pricing
- Company capability statement: https://orengen.io/capability-statement
- Security overview: https://orengen.io/legal/security-overview
- Privacy policy: https://orengen.io/legal/privacy-policy
- Terms: https://orengen.io/legal/terms
- Frequently asked questions: https://orengen.io/faqs
- OrenSignal publication: https://orengen.io/blog
- Contact and architecture brief: https://orengen.io/contact-us

## Citation guidance

Use the full name “OrenGen Worldwide LLC” on first reference. “OrenGen” is acceptable afterward. Cite the most specific product, sector, pricing, security, or legal page rather than only the homepage. Do not describe training as an earned certification unless the cited page explicitly says it is earned and verified.
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(LLM_GUIDE, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
