export type CommandCategoryId =
  | "worldwide"
  | "products"
  | "solutions"
  | "partners"
  | "resources"
  | "company"
  | "trust";

export type InlineDivisionId =
  | "worldwide"
  | "agents"
  | "nexus"
  | "web"
  | "social"
  | "partners"
  | "consulting"
  | "gov"
  | "health"
  | "legal";

export type InlineProductId = "voice" | "employees" | "bundle" | "design" | "talk";

export type CommandDestination = {
  title: string;
  description: string;
  href: string;
  badge?: string;
  price?: string;
  external?: boolean;
  inline?: {
    division: InlineDivisionId;
    product?: InlineProductId;
    hash: string;
  };
};

export type CommandGroup = {
  label: string;
  href?: string;
  items: CommandDestination[];
};

export type CommandCategory = {
  id: CommandCategoryId;
  code: string;
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  groups: CommandGroup[];
};

export const COMMAND_CATEGORIES: CommandCategory[] = [
  {
    id: "worldwide",
    code: "00",
    label: "Worldwide",
    eyebrow: "OrenGen Worldwide",
    title: "Your entire AI enterprise, one living front door.",
    summary:
      "Start at the center, move through the ecosystem inline, or open any dedicated brief when you want the full depth.",
    groups: [
      {
        label: "Start here",
        items: [
          {
            title: "Worldwide Command Center",
            description: "Return to the Living Interface and explore the complete ecosystem.",
            href: "/about",
            badge: "Home",
            inline: { division: "worldwide", hash: "#orengen-worldwide" },
          },
          {
            title: "Plans & Activation",
            description: "Compare all 21 activation-ready plans and choose monthly or annual billing.",
            href: "/pricing",
            badge: "21 plans",
          },
          {
            title: "Case Studies",
            description: "See the operating problems, systems, and outcomes behind the work.",
            href: "/case-studies",
          },
          {
            title: "Architect a Briefing",
            description: "Bring the mission, constraint, or growth target to the OrenGen team.",
            href: "/contact-us",
            badge: "Book",
          },
        ],
      },
    ],
  },
  {
    id: "products",
    code: "AI",
    label: "Products",
    eyebrow: "AI Operating Systems",
    title: "Choose the intelligence layer your operation needs next.",
    summary:
      "Voice, digital employees, CRM, web, and managed authority systems designed to work as one connected ecosystem.",
    groups: [
      {
        label: "OrenAgents · Autonomous workforce",
        href: "/orenagents",
        items: [
          {
            title: "Buy-Lingual™ AI Voice",
            description: "Trademark voice agents that answer, qualify, book, and transfer in 100+ languages.",
            href: "/orenagents/voice",
            badge: "Featured",
            price: "From $197/mo",
            inline: { division: "agents", product: "voice", hash: "#orengen-agents-voice" },
          },
          {
            title: "AI Employees",
            description: "Digital employees for qualification, scheduling, follow-up, CRM updates, and support.",
            href: "/orenagents/employees",
            price: "From $197/mo",
            inline: { division: "agents", product: "employees", hash: "#orengen-agents-employees" },
          },
          {
            title: "Better Together",
            description: "Voice hears it, AI employees move it, and the operating layer remembers it.",
            href: "/orenagents/better-together-package",
            badge: "Recommended",
            price: "From $297/mo",
            inline: { division: "agents", product: "bundle", hash: "#orengen-agents-bundle" },
          },
        ],
      },
      {
        label: "Connected platforms",
        items: [
          {
            title: "OrenNexus",
            description: "Unified CRM, pipeline, inbox, forms, funnels, email, SMS, and automation.",
            href: "/orennexus",
            price: "From $97/mo · $0 setup",
            inline: { division: "nexus", hash: "#orengen-nexus" },
          },
          {
            title: "OrenWeb Design",
            description: "High-conversion digital flagships engineered for speed, search, and action.",
            href: "/orenweb/design",
            price: "From $247/mo",
            inline: { division: "web", product: "design", hash: "#orengen-web-design" },
          },
          {
            title: "OrenWeb Talk",
            description: "Conversational voice and chat embedded directly into the website experience.",
            href: "/orenweb/talk",
            price: "From $147/mo",
            inline: { division: "web", product: "talk", hash: "#orengen-web-talk" },
          },
          {
            title: "Instant Site Audit",
            description: "A fast SEO, GEO, and AEO visibility check for your current website.",
            href: "/orenweb/instant-site-audit",
            badge: "Free",
          },
          {
            title: "OrenSocial",
            description: "Managed strategy, content, publishing, engagement, listening, and reporting.",
            href: "/orensocial",
            price: "From $97/mo",
            inline: { division: "social", hash: "#orengen-social" },
          },
          {
            title: "OrenConsulting",
            description: "Executive AI strategy, architecture, governance, and hands-on implementation.",
            href: "/contact-us",
            badge: "Custom",
            inline: { division: "consulting", hash: "#orengen-consulting" },
          },
        ],
      },
    ],
  },
  {
    id: "solutions",
    code: "SX",
    label: "Solutions",
    eyebrow: "Regulated & High-Stakes Operations",
    title: "Move faster without losing governance, judgment, or control.",
    summary:
      "Mission-specific operating paths for public sector, healthcare, research, legal, and compliance teams.",
    groups: [
      {
        label: "Government & public sector",
        items: [
          {
            title: "OrenGov",
            description: "Governed AI and workflow infrastructure for public-sector delivery.",
            href: "/orengov",
            badge: "SAM active",
            inline: { division: "gov", hash: "#orengen-gov" },
          },
          {
            title: "State & Local",
            description: "Modernization pathways for state, municipal, and community operations.",
            href: "/orengov/public-sector/state-local",
          },
          {
            title: "Education",
            description: "Responsible AI and workflow modernization for education systems.",
            href: "/orengov/public-sector/education",
          },
          {
            title: "Defense",
            description: "Mission-ready operating systems with clear control and ownership boundaries.",
            href: "/orengov/defense",
          },
        ],
      },
      {
        label: "Healthcare & legal",
        items: [
          {
            title: "OrenHealth",
            description: "Patient access and care-operation workflows with responsible escalation.",
            href: "/orenhealth",
            badge: "HIPAA-enabled",
            inline: { division: "health", hash: "#orengen-health" },
          },
          {
            title: "Specialty Clinics",
            description: "Patient intake, routing, follow-up, and administrative workflow systems.",
            href: "/orenhealth/specialty-clinics",
          },
          {
            title: "Research",
            description: "Structured operations for clinical research and life-sciences teams.",
            href: "/orenhealth/research",
          },
          {
            title: "OrenLegal",
            description: "Legal intake, matter routing, knowledge operations, and compliance workflows.",
            href: "/orenlegal",
            badge: "Human-in-loop",
            inline: { division: "legal", hash: "#orengen-legal" },
          },
          {
            title: "Law Firms",
            description: "Intake and operating infrastructure designed around attorney judgment.",
            href: "/orenlegal/law-firms",
          },
          {
            title: "Compliance Operations",
            description: "Visible, traceable workflow support for compliance execution.",
            href: "/orenlegal/compliance-ops",
          },
        ],
      },
    ],
  },
  {
    id: "partners",
    code: "25",
    label: "Partners",
    eyebrow: "The Partner Launchpad",
    title: "Earn at the center of the OrenGen ecosystem.",
    summary:
      "Introduce the right businesses, earn on activation, and keep earning while the relationship remains active.",
    groups: [
      {
        label: "Partner pathways",
        items: [
          {
            title: "Sales Partner Program",
            description: "Join free and earn 25% of setup plus 25% monthly for the life of the active account.",
            href: "/sales-partner-program",
            badge: "Center bridge",
            price: "Weekly Stripe payouts",
            inline: { division: "partners", hash: "#orengen-partners" },
          },
          {
            title: "Referral Partner Program",
            description: "A streamlined pathway for trusted introductions and referral growth.",
            href: "/referral-partner-program",
          },
          {
            title: "Affiliates Portal",
            description: "Access your affiliate account, tracked links, and relationship activity.",
            href: "https://affiliates.orengen.io",
            badge: "Sign in",
            external: true,
          },
          {
            title: "Sales Partners Portal",
            description: "Access your sales partner account, tracked links, and relationship activity.",
            href: "https://salespartners.orengen.io",
            badge: "Sign in",
            external: true,
          },
        ],
      },
    ],
  },
  {
    id: "resources",
    code: "RS",
    label: "Resources",
    eyebrow: "Signals, Proof & Answers",
    title: "Go deeper without losing the thread.",
    summary:
      "Research, buyer answers, case studies, and practical intelligence for making the next decision clearly.",
    groups: [
      {
        label: "Explore & learn",
        items: [
          {
            title: "OrenSignal",
            description: "AI, infrastructure, governance, implementation, and market intelligence.",
            href: "/blog",
          },
          {
            title: "Case Studies",
            description: "Real operating problems and the systems designed to solve them.",
            href: "/case-studies",
          },
          {
            title: "FAQs",
            description: "Buyer, technical, security, procurement, and implementation answers.",
            href: "/faqs",
          },
          {
            title: "Integrations",
            description: "CRM, calendar, communications, workflow, and data connection paths.",
            href: "/integrations",
            badge: "Coming soon",
          },
          {
            title: "Support",
            description: "Operational help and client-support pathways.",
            href: "/support",
            badge: "Coming soon",
          },
        ],
      },
    ],
  },
  {
    id: "company",
    code: "CO",
    label: "Company",
    eyebrow: "Leadership, Mission & Contact",
    title: "Meet the people and operating philosophy behind OrenGen.",
    summary:
      "Explore the company, leadership, careers, and the right doorway for starting a conversation.",
    groups: [
      {
        label: "OrenGen Worldwide",
        items: [
          {
            title: "About",
            description: "The mission, operating model, company story, and ecosystem overview.",
            href: "/about",
          },
          {
            title: "Leadership",
            description: "Meet the executive leadership responsible for strategy and delivery.",
            href: "/leadership",
          },
          {
            title: "Careers",
            description: "Explore open roles and what it means to build at OrenGen.",
            href: "/careers",
          },
          {
            title: "Contact",
            description: "Route your question, project, or partnership request to the right team.",
            href: "/contact-us",
            badge: "Start here",
          },
        ],
      },
    ],
  },
  {
    id: "trust",
    code: "ST",
    label: "Security & Trust",
    eyebrow: "Controls, Capability & Consent",
    title: "Clear boundaries for high-trust work.",
    summary:
      "Review OrenGen's security posture, capability documentation, legal policies, and communication governance.",
    groups: [
      {
        label: "Trust center",
        items: [
          {
            title: "Security Overview",
            description: "Security, privacy, governance, risk, and control posture.",
            href: "/legal/security-overview",
            badge: "Trust center",
          },
          {
            title: "Capability Statement",
            description: "A consolidated overview of company capabilities and delivery readiness.",
            href: "/capability-statement",
          },
          {
            title: "Legal Hub",
            description: "The central index for OrenGen policies, terms, notices, and disclosures.",
            href: "/legal",
          },
          {
            title: "Privacy Policy",
            description: "How personal information and data are handled.",
            href: "/legal/privacy-policy",
          },
          {
            title: "AI Communications Opt-In",
            description: "Consent and governance for AI-assisted communications.",
            href: "/legal/ai-communications-opt-in",
          },
        ],
      },
    ],
  },
];

export function commandCategoryForPath(pathname: string): CommandCategoryId {
  if (
    pathname.startsWith("/orenagents") ||
    pathname.startsWith("/orennexus") ||
    pathname.startsWith("/orenweb") ||
    pathname.startsWith("/orensocial")
  )
    return "products";
  if (
    pathname.startsWith("/orengov") ||
    pathname.startsWith("/orenhealth") ||
    pathname.startsWith("/orenlegal")
  )
    return "solutions";
  if (
    pathname.startsWith("/sales-partner-program") ||
    pathname.startsWith("/referral-partner-program")
  )
    return "partners";
  if (
    pathname.startsWith("/blog") ||
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/faqs")
  )
    return "resources";
  if (
    pathname.startsWith("/about") ||
    pathname.startsWith("/leadership") ||
    pathname.startsWith("/careers") ||
    pathname.startsWith("/contact-us")
  )
    return "company";
  if (pathname.startsWith("/legal") || pathname.startsWith("/capability-statement"))
    return "trust";
  return "worldwide";
}
