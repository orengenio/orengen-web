export type CaseStudy = {
  id: string;
  sector: string;
  headline: string;
  primaryMetric: string;
  metricLabel: string;
  timeframe: string;
  stack: string[];
  summary: string;
  outcomes: string[];
};

/** Representative documented outcomes — counterpart identities redacted per NDA policy. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "b2b-growth",
    sector: "Mid-Market · B2B Services",
    headline: "500% YoY revenue growth",
    primaryMetric: "500%",
    metricLabel: "YoY revenue growth",
    timeframe: "12 months",
    stack: ["Self-hosted Claude", "n8n orchestration", "OrenNexus CRM"],
    summary:
      "Self-hosted Claude environment plus n8n orchestration replaced four SaaS subscriptions and lifted sales-cycle velocity across multi-state operations.",
    outcomes: [
      "4 SaaS subscriptions consolidated into one owned stack",
      "3.4× sales-cycle velocity improvement",
      "Multi-state pipeline unified in OrenNexus",
    ],
  },
  {
    id: "ops-savings",
    sector: "Mid-Market · Operations",
    headline: "$13M+ operational savings captured",
    primaryMetric: "$13M+",
    metricLabel: "documented savings",
    timeframe: "18 months",
    stack: ["Workflow orchestration", "OrenAutomations", "Executive dashboards"],
    summary:
      "Workflow consolidation, SaaS sprawl elimination, and AI-augmented operations across a multi-state enterprise — measured cost reduction tracked monthly.",
    outcomes: [
      "SaaS spend reduced through stack consolidation",
      "Manual handoffs replaced with governed automations",
      "Executive reporting surfaced ROI by business unit",
    ],
  },
  {
    id: "healthcare-clinic",
    sector: "Healthcare · Specialty Clinic",
    headline: "HIPAA-enabled clinical workflow offload",
    primaryMetric: "0",
    metricLabel: "PHI events to third-party AI vendors",
    timeframe: "6-month rollout",
    stack: ["Self-hosted Claude", "BAA-ready architecture", "OrenHealth intake"],
    summary:
      "BAA-ready architecture deployed on counterpart infrastructure. Administrative burden reduced for clinical staff with no PHI routed to external model APIs.",
    outcomes: [
      "Clinical admin tasks automated without PHI exposure",
      "Intake routing reduced front-desk load",
      "Audit-ready access controls documented",
    ],
  },
  {
    id: "state-agency",
    sector: "Public Sector · State Agency",
    headline: "NIST-aligned AI pilot, on-time delivery",
    primaryMetric: "100%",
    metricLabel: "procurement milestone delivery",
    timeframe: "90-day pilot",
    stack: ["Self-hosted Claude", "NIST 800-53 controls", "OrenGov delivery"],
    summary:
      "Self-hosted Claude pilot deployed against state-agency procurement specs with documented controls — foundation for a multi-year set-aside engagement.",
    outcomes: [
      "Controls mapped to NIST 800-53 baselines",
      "Pilot delivered on procurement timeline",
      "Architecture brief accepted for phase-two scope",
    ],
  },
  {
    id: "logistics-workforce",
    sector: "Mid-Market · Logistics",
    headline: "30+ virtual workforce buildouts",
    primaryMetric: "30+",
    metricLabel: "workforce buildouts deployed",
    timeframe: "24 months cumulative",
    stack: ["OrenAgents Voice", "OrenAgents Employees", "OrenNexus"],
    summary:
      "AI-augmented operations teams architected, deployed, and operationalized end-to-end across logistics, dispatch, and support functions.",
    outcomes: [
      "Voice + chat agents covering dispatch and support",
      "24/7 intake without added headcount",
      "Playbooks handed off for counterpart-owned ops",
    ],
  },
  {
    id: "federal-subcontract",
    sector: "Federal Subcontracting",
    headline: "SDB set-aside positioning under FAR 19.704",
    primaryMetric: "SDB",
    metricLabel: "scorecard-eligible subcontractor",
    timeframe: "Active posture",
    stack: ["SAM.gov registration", "Capability statement", "OrenGov"],
    summary:
      "Active subcontracting posture under existing federal vehicles. SDB / minority-owned eligibility supports prime contractor scorecard obligations.",
    outcomes: [
      "SAM.gov active · CAGE 12XC1 · UEI on file",
      "Past-performance narratives ready for primes",
      "Set-aside categories documented in capability statement",
    ],
  },
  {
    id: "legal-intake",
    sector: "Legal · Regional Law Firm",
    headline: "62% faster matter intake routing",
    primaryMetric: "62%",
    metricLabel: "faster intake-to-assignment",
    timeframe: "8 weeks",
    stack: ["OrenLegal intake", "OrenAgents chat", "Document routing"],
    summary:
      "Structured legal intake, conflict pre-check routing, and document classification reduced time from web form to assigned attorney across a 40-attorney firm.",
    outcomes: [
      "After-hours intake captured via AI employees",
      "Routing rules enforced without manual triage",
      "CRM notes synced for matter continuity",
    ],
  },
  {
    id: "voice-multilingual",
    sector: "Multi-Location · Consumer Services",
    headline: "40% reduction in missed inbound calls",
    primaryMetric: "40%",
    metricLabel: "fewer missed calls",
    timeframe: "90 days",
    stack: ["Buy-Lingual Voice", "OrenNexus pipeline", "SMS follow-up"],
    summary:
      "Buy-Lingual voice agents deployed across 12 locations with Spanish and English coverage — bookings and transfers logged automatically to CRM.",
    outcomes: [
      "29-language capability staged for expansion",
      "Warm transfers to on-call staff when needed",
      "Call summaries emailed to ops leads nightly",
    ],
  },
  {
    id: "marketing-consolidation",
    sector: "Agency · Marketing & Communications",
    headline: "7 tools replaced with one operating layer",
    primaryMetric: "7→1",
    metricLabel: "tool consolidation",
    timeframe: "4 months",
    stack: ["OrenSocial", "OrenNexus", "Marketing automation"],
    summary:
      "Authority content, syndication, CRM, and campaign automation consolidated — agency retained client ownership of data and workflows.",
    outcomes: [
      "Content calendar + CRM in one login",
      "Client reporting automated from live pipeline data",
      "Per-seat SaaS tax eliminated on Premium tier",
    ],
  },
  {
    id: "education-admin",
    sector: "Public Sector · Education",
    headline: "Administrative lift reduced across 3 campuses",
    primaryMetric: "3",
    metricLabel: "campuses on unified intake",
    timeframe: "1 semester pilot",
    stack: ["OrenGov education path", "Forms + routing", "OrenAgents chat"],
    summary:
      "Student services intake, FAQ deflection, and appointment routing standardized across campuses without rip-and-replace of the SIS.",
    outcomes: [
      "Integration via API sync — no SIS replacement",
      "Staff hours reallocated from repetitive intake",
      "Procurement-friendly phased rollout plan",
    ],
  },
  {
    id: "crm-migration",
    sector: "Mid-Market · Professional Services",
    headline: "HubSpot migration in 21 days",
    primaryMetric: "21",
    metricLabel: "days to live pipeline",
    timeframe: "3-week cutover",
    stack: ["OrenNexus", "Migration tooling", "Automation rebuild"],
    summary:
      "Contacts, pipelines, and automation flows migrated from HubSpot with parallel running period — team trained on owned OrenNexus stack.",
    outcomes: [
      "Zero data loss on contacts and deal history",
      "Automations rebuilt with documented playbooks",
      "Monthly SaaS spend reduced post-migration",
    ],
  },
  {
    id: "defense-sub",
    sector: "Defense · Prime Subcontractor Support",
    headline: "Air-gap architecture brief accepted",
    primaryMetric: "Air-gap",
    metricLabel: "deployment path documented",
    timeframe: "Architecture phase",
    stack: ["Self-hosted Claude", "NIST 800-171 posture", "OrenGov Defense"],
    summary:
      "Architecture brief for disconnected deployment met prime subcontractor security review — no commercial API dependency in production path.",
    outcomes: [
      "800-171 alignment documented for DFARS context",
      "Deployment topology approved for phase-one lab",
      "Honest scoping: CMMC/FedRAMP not claimed pre-audit",
    ],
  },
];

export const CASE_STUDY_SUMMARY_METRICS = [
  { value: "500%", label: "Representative YoY growth" },
  { value: "$13M+", label: "Documented operational savings" },
  { value: "30+", label: "Virtual workforce buildouts" },
  { value: "20+", label: "Enterprise deployments" },
];

export const FEATURED_CASE_STUDY_IDS = [
  "b2b-growth",
  "ops-savings",
  "voice-multilingual",
] as const;
