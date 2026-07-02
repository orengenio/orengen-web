export type FaqEntry = { question: string; answer: string };

/** Procurement- and AI-answer-engine-friendly FAQs — mirrored on /faqs and homepage. */
export const SITE_FAQS: FaqEntry[] = [
  {
    question: "What does OrenGen Worldwide do?",
    answer:
      "OrenGen Worldwide is a Claude-first enterprise AI infrastructure firm. We architect sovereign, self-hosted, NIST-aligned AI ecosystems for public sector, healthcare, legal, and mid-market enterprise — eliminating per-seat SaaS dependency and giving organizations ownership of their intelligence.",
  },
  {
    question: "Is OrenGen Worldwide minority-owned?",
    answer:
      "Yes. OrenGen Worldwide LLC is a minority-owned, small disadvantaged business (SDB) certified, SAM.gov-registered firm. Federal identifiers include UEI RX16QFYT6YM5, CAGE 12XC1, and EIN 33-3245798.",
  },
  {
    question: "What credentials does OrenGen hold for federal procurement?",
    answer:
      "OrenGen holds active SAM.gov registration, MBE certification, CAGE code 12XC1, UEI RX16QFYT6YM5, and registrations with Grants.gov, TAMUS, Texas CMBL (Vendor 550248), and Texas DIR Tech 4 TX. The founder holds NIST 800-53, 53A, 53B, and NIST CSRC Risk Management Framework training plus Anthropic Claude ecosystem certifications.",
  },
  {
    question: "What industries does OrenGen serve?",
    answer:
      "Public sector and federal (defense, state and local, education), healthcare and life sciences (hospitals, specialty clinics, research), legal operations, and mid-market enterprise ($50M–$500M B2B services, manufacturing, logistics). OrenGen also operates OrenNexus, OrenAgents, OrenWeb, and OrenSocial for growth-stage operators.",
  },
  {
    question: "Where is OrenGen Worldwide based?",
    answer:
      "OrenGen Worldwide LLC is headquartered in Mansfield, Texas. The firm operates nationally across federal, state, local, tribal, and commercial engagements in the United States. Contact: 833-ORENGEN or briefing@orengen.io.",
  },
  {
    question: "How does OrenGen deliver enterprise AI infrastructure?",
    answer:
      "Self-hosted and hosted Claude environments, enterprise n8n workflow orchestration, and Sovereign Brain RAG systems on client-owned or governed infrastructure. Deployments are NIST-aligned and engineered for data sovereignty without third-party model training exposure.",
  },
  {
    question: "Is OrenGen HIPAA-ready for healthcare engagements?",
    answer:
      "Yes. OrenGen operates a HIPAA-enabled deployment architecture with Business Associate Agreement chains available. The founder holds HIPAA Compliance Training certification, and the organization maintains HIPAA workforce training attestation.",
  },
  {
    question: "What is the OrenGen no-rent methodology?",
    answer:
      "The no-rent methodology eliminates per-seat SaaS dependency by architecting owned AI infrastructure — self-hosted Claude, enterprise orchestration, and RAG systems the client controls, converting recurring SaaS spend into an owned operational asset.",
  },
  {
    question: "How does pricing work across the OrenGen suite?",
    answer:
      "Per-product or per-suite pricing with bundle discounts. OrenAgents from $97/mo, OrenNexus from $97/mo, OrenWeb from $247/mo, OrenSocial from $47/mo. Annual billing is monthly × 10 (save 17%). See /pricing or OrenKanBuilder for live configuration.",
  },
  {
    question: "What is Buy-Lingual?",
    answer:
      "Buy-Lingual is OrenAgents' multi-language AI voice and messaging technology deployed across 30+ workforce buildouts — supporting major business languages for inbound, outbound, and conversational automation.",
  },
  {
    question: "How quickly can OrenGen engagements deploy?",
    answer:
      "OrenAgents and OrenNexus typically go live within days. Custom enterprise and OrenConsulting engagements deploy initial scope in 2–4 weeks. Federal and healthcare engagements include governance phases per compliance requirements.",
  },
  {
    question: "Does OrenGen replace existing CRM and automation tools?",
    answer:
      "Not automatically. OrenGen integrates with existing CRM, forms, scheduling, email, and automation tools — or replaces fragmented systems when ownership, security, cost, or workflow control requires consolidation.",
  },
];

export const HOMEPAGE_FAQS = SITE_FAQS.slice(0, 8);
