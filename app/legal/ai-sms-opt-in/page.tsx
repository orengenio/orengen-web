import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * AI SMS Opt-In (legal/policy document).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/ai-sms-opt-in/page.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "SMS & AI Call Opt-In",
  description:
    "Sign up to receive marketing text messages and AI-powered phone calls from OrenGen Worldwide. Express written consent required. Reply STOP to opt out.",
  keywords:
    "ai-sms-opt-in, OrenGen, OrenGen Worldwide, AI infrastructure, ai sms opt-in",
  alternates: { canonical: "/legal/ai-sms-opt-in" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/legal/ai-sms-opt-in",
    title: "SMS & AI Call Opt-In",
    description:
      "Sign up to receive marketing text messages and AI-powered phone calls from OrenGen Worldwide. Express written consent required. Reply STOP to opt out.",
    images:
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
  },
};

export default function AiSmsOptInPage() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          {/* HERO */}
          <section
            className="section section-brand-blue"
            aria-label="AI SMS Opt-In"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">AI SMS Opt-In</div>
                <h1>SMS &amp; AI Call Opt-In</h1>
                <p className="lead">
                  Sign up to receive marketing text messages and AI-powered
                  phone calls from OrenGen Worldwide. Express written consent
                  required. Reply STOP to opt out.
                </p>
                <p className="lead">
                  Last updated: May 2026 OrenGen Worldwide LLC Mansfield, TX
                </p>
              </header>
            </div>
          </section>

          {/* DOCUMENT BODY */}
          <section
            className="section section-brand-white"
            aria-label="Document content"
          >
            <div className="container">
              <p>
                Express written consent to receive marketing text messages and
                AI-powered phone calls from OrenGen Worldwide.
              </p>
              <h2>What You&apos;re Signing Up For</h2>
              <ul>
                <li>
                  Marketing text messages about OrenGen products and services
                </li>
                <li>AI-powered phone calls from our autonomous agents</li>
                <li>Appointment confirmations, reminders, and follow-ups</li>
                <li>Occasional promotional offers and updates</li>
              </ul>
              <p>
                <strong>Your privacy matters.</strong> OrenGen Worldwide will
                not share, sell, or rent your phone number, email address, or
                opt-in information to any third party for marketing purposes.
                Phone numbers and SMS opt-in data are used solely by OrenGen
                Worldwide to communicate with you as described above.
              </p>
              <p>
                <strong>Questions?</strong> Contact{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> or
                reply HELP to any message you receive.
              </p>
              <p>
                <strong>Opting out:</strong> You may opt out at any time by
                replying STOP to any text message. You may also email{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> with
                the subject &quot;STOP&quot; and your phone number.
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section
            className="section alt section-brand-blue"
            aria-label="Contact OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <h2>Have a question about this AI SMS Opt-In?</h2>
                <p>
                  Reach the OrenGen team directly. We respond to ai sms opt-in
                  inquiries within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=ai-sms-opt-in"
                  >
                    Contact OrenGen
                  </a>
                </div>
              </header>
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
