import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";
import BookingScheduler from "@/components/site/BookingScheduler";
import { getBookingEnvConfig } from "@/lib/booking";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Book a Call | OrenGen Worldwide",
    description:
      "Book a Coffee Chat or Strategy Session with OrenGen. Branded scheduling powered by live HighLevel availability.",
    path: "/book",
    keywords: "book orengen, coffee chat, strategy session, architecture brief",
  }),
};

export default function BookPage() {
  const env = getBookingEnvConfig();

  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <SiteHeader />
        <main id="main">
          <section
            className="section section-brand-blue booking-hero"
            aria-label="Book a call with OrenGen"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Book Direct</div>
                <h1>
                  Schedule with{" "}
                  <span className="gradient-word shimmer">OrenGen.</span>
                </h1>
                <p className="lead">
                  Choose a Coffee Chat or Strategy Session. Times sync live from
                  HighLevel — no generic widget, no dead ends.
                </p>
              </header>
              <BookingScheduler
                configured={env.ok}
                missingEnv={env.ok ? [] : env.missing}
              />
            </div>
          </section>
        </main>
        <SiteFooter />
        <SiteRuntime />
      </div>
    </>
  );
}
