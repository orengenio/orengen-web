import type { ReactNode } from "react";

/**
 * OrenNexus "Everything Included" capability grid.
 *
 * Replaces the old sparse emoji cards (which inherited the 500px product-card
 * min-height and looked long/empty). Compact, uniform cards with crisp inline
 * SVG icons and sub-feature tags that convey the breadth of the all-in-one
 * platform. Static + brand-tokened; scroll-reveal via the global `.reveal`
 * observer. Rendered on a light section (section-brand-white).
 */

type Cap = { title: string; desc: string; tags: string[]; icon: ReactNode };

const svg = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CAPS: Cap[] = [
  {
    title: "CRM & Pipelines",
    desc: "Move deals through visual stages with full contact history and tasks.",
    tags: ["Custom stages", "Tasks", "Notes"],
    icon: svg(
      <>
        <rect x="3" y="4" width="5" height="16" rx="1" />
        <rect x="10" y="4" width="5" height="11" rx="1" />
        <rect x="17" y="4" width="4" height="7" rx="1" />
      </>,
    ),
  },
  {
    title: "Unified Conversations",
    desc: "SMS, email, webchat, and social DMs answered from one inbox.",
    tags: ["SMS", "Email", "Social"],
    icon: svg(
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9 9 0 0 1-4-1L3 20l1-4a8.4 8.4 0 0 1-1-4.5A8.5 8.5 0 0 1 21 11.5Z" />
      </>,
    ),
  },
  {
    title: "Calendars & Booking",
    desc: "Round-robin scheduling with reminders that kill no-shows.",
    tags: ["Round-robin", "Reminders", "Groups"],
    icon: svg(
      <>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v3M16 3v3" />
        <path d="M8 13h3v3H8z" />
      </>,
    ),
  },
  {
    title: "Funnels & Websites",
    desc: "Drag-and-drop pages, funnels, and blogs — hosted and fast.",
    tags: ["Funnels", "Blogs", "Hosting"],
    icon: svg(
      <>
        <path d="M3 5h18l-6 7v6l-6 3v-9L3 5Z" />
      </>,
    ),
  },
  {
    title: "Email & SMS Marketing",
    desc: "Bulk campaigns and drip sequences that land in the inbox.",
    tags: ["Campaigns", "Drips", "Templates"],
    icon: svg(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>,
    ),
  },
  {
    title: "Automation Workflows",
    desc: "Multi-step journeys with if/else logic and built-in AI actions.",
    tags: ["Triggers", "If / else", "AI steps"],
    icon: svg(
      <>
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="6" cy="18" r="2.4" />
        <circle cx="18" cy="12" r="2.4" />
        <path d="M8.4 6H13a2.6 2.6 0 0 1 2.6 2.6V10M8.4 18H13a2.6 2.6 0 0 0 2.6-2.6V14" />
      </>,
    ),
  },
  {
    title: "Reputation Management",
    desc: "Auto-request reviews and reply to every platform from one place.",
    tags: ["Requests", "Monitoring", "Auto-reply"],
    icon: svg(
      <>
        <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
      </>,
    ),
  },
  {
    title: "Forms & Surveys",
    desc: "Capture and route leads with conditional logic, no code.",
    tags: ["Builder", "Logic", "Routing"],
    icon: svg(
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>,
    ),
  },
  {
    title: "Payments & Invoicing",
    desc: "Text-to-pay, subscriptions, estimates, and invoices built in.",
    tags: ["Text-to-pay", "Subscriptions", "Invoices"],
    icon: svg(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </>,
    ),
  },
  {
    title: "Memberships & Courses",
    desc: "Host courses, communities, and offers fully under your brand.",
    tags: ["Courses", "Communities", "Offers"],
    icon: svg(
      <>
        <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
        <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" />
      </>,
    ),
  },
  {
    title: "Reporting & Attribution",
    desc: "Source-to-sale attribution and live dashboards for every metric.",
    tags: ["Dashboards", "Attribution", "ROI"],
    icon: svg(
      <>
        <path d="M4 20V4M4 20h16" />
        <path d="M8 17v-4M12 17V8M16 17v-6" />
      </>,
    ),
  },
  {
    title: "White-Label Mobile App",
    desc: "Your brand in the app store — clients log in to you, not us.",
    tags: ["iOS + Android", "Your brand", "Push"],
    icon: svg(
      <>
        <rect x="7" y="3" width="10" height="18" rx="2.4" />
        <path d="M11 18h2" />
      </>,
    ),
  },
];

export default function NexusCapabilities() {
  return (
    <section
      className="section alt section-brand-white"
      id="capabilities"
      aria-label="Everything included with OrenNexus"
    >
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">Everything Included</div>
          <h2>
            One login replaces your{" "}
            <span style={{ color: "var(--og-orange)" }}>entire stack.</span>
          </h2>
          <p className="lead">
            OrenNexus is one platform for the whole business — CRM, marketing,
            websites, payments, and your own branded mobile app. Here&apos;s
            what comes standard, no add-ons and no per-seat tax.
          </p>
        </header>

        <div className="ncap-grid reveal">
          {CAPS.map((c) => (
            <article className="ncap-card" key={c.title}>
              <span className="ncap-ic">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="ncap-tags">
                {c.tags.map((t) => (
                  <span className="ncap-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
