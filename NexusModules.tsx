/**
 * OrenNexus module showcase — realistic, on-brand CSS mockups of the tools a
 * client's team actually logs into every day (calendar/booking, funnel
 * builder, reputation, payments). Replaces the abstract "command center" glow
 * image so prospects see concrete functionality, not a stock render. Pure CSS,
 * no external images, no gibberish text. Rendered on a dark section
 * (section-brand-blue); scroll-reveal via the global `.reveal` observer.
 */

const ACCENT = { color: "var(--og-orange)" } as const;

export default function NexusModules() {
  return (
    <section
      className="section section-brand-blue"
      id="modules"
      aria-label="What your team logs into"
    >
      <div className="container">
        <header className="section-head center reveal">
          <div className="eyebrow">See It, Don&apos;t Imagine It</div>
          <h2>
            The tools your team opens <span style={ACCENT}>every day.</span>
          </h2>
          <p className="lead">
            Calendars, funnels, reviews, and payments — built in, branded to
            you, and working off the same contact record. A few of the screens
            inside OrenNexus:
          </p>
        </header>

        <div className="nmod-grid reveal">
          {/* Calendar & Booking */}
          <figure className="nmod">
            <div className="nmod-screen">
              <div className="nmod-bar" aria-hidden="true">
                <span className="nmod-d" />
                <span className="nmod-d" />
                <span className="nmod-d" />
                <em>Calendar</em>
              </div>
              <div className="nmod-agenda">
                <div className="nmod-slot">
                  <span className="nmod-time">9:00</span>
                  <span className="nmod-appt is-a">Discovery call · Priya</span>
                </div>
                <div className="nmod-slot">
                  <span className="nmod-time">10:30</span>
                  <span className="nmod-appt is-b">Demo · Acme Robotics</span>
                </div>
                <div className="nmod-slot">
                  <span className="nmod-time">1:00</span>
                  <span className="nmod-free">Available</span>
                </div>
                <div className="nmod-slot">
                  <span className="nmod-time">2:30</span>
                  <span className="nmod-appt is-c">Onboarding · Summit</span>
                </div>
              </div>
            </div>
            <figcaption className="nmod-cap">
              <b>Calendars &amp; Booking</b>
              <span>Round-robin scheduling with automatic reminders.</span>
            </figcaption>
          </figure>

          {/* Funnel builder */}
          <figure className="nmod">
            <div className="nmod-screen">
              <div className="nmod-bar" aria-hidden="true">
                <span className="nmod-d" />
                <span className="nmod-d" />
                <span className="nmod-d" />
                <em>Funnel</em>
              </div>
              <div className="nmod-funnel">
                <div className="nmod-fstep" style={{ width: "100%" }}>
                  <span>Landing page</span>
                  <b>4,200</b>
                </div>
                <div className="nmod-fstep" style={{ width: "80%" }}>
                  <span>Opt-in</span>
                  <b>2,940</b>
                </div>
                <div className="nmod-fstep" style={{ width: "58%" }}>
                  <span>Sales page</span>
                  <b>1,510</b>
                </div>
                <div className="nmod-fstep" style={{ width: "38%" }}>
                  <span>Checkout</span>
                  <b>612</b>
                </div>
              </div>
            </div>
            <figcaption className="nmod-cap">
              <b>Funnels &amp; Websites</b>
              <span>Drag-and-drop pages with live conversion tracking.</span>
            </figcaption>
          </figure>

          {/* Reputation */}
          <figure className="nmod">
            <div className="nmod-screen">
              <div className="nmod-bar" aria-hidden="true">
                <span className="nmod-d" />
                <span className="nmod-d" />
                <span className="nmod-d" />
                <em>Reviews</em>
              </div>
              <div className="nmod-rep">
                <div className="nmod-rep-top">
                  <b>4.9</b>
                  <span className="nmod-stars">★★★★★</span>
                  <span className="nmod-rep-sub">812 reviews</span>
                </div>
                <div className="nmod-review">
                  <span className="nmod-ava">S</span>
                  <div>
                    <div className="nmod-rev-h">
                      Sarah M. <span className="nmod-stars sm">★★★★★</span>
                    </div>
                    <p>&ldquo;Booked us solid in two weeks.&rdquo;</p>
                  </div>
                </div>
                <div className="nmod-review">
                  <span className="nmod-ava">J</span>
                  <div>
                    <div className="nmod-rev-h">
                      James T. <span className="nmod-stars sm">★★★★★</span>
                    </div>
                    <p>&ldquo;Every review answered automatically.&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="nmod-cap">
              <b>Reputation Management</b>
              <span>Auto-request and reply to reviews from one place.</span>
            </figcaption>
          </figure>

          {/* Payments */}
          <figure className="nmod">
            <div className="nmod-screen">
              <div className="nmod-bar" aria-hidden="true">
                <span className="nmod-d" />
                <span className="nmod-d" />
                <span className="nmod-d" />
                <em>Payments</em>
              </div>
              <div className="nmod-pay">
                <div className="nmod-pay-h">
                  <span>Invoice #1042</span>
                  <span className="nmod-paid">Paid</span>
                </div>
                <div className="nmod-line">
                  <span>Website build</span>
                  <b>$2,500</b>
                </div>
                <div className="nmod-line">
                  <span>Care plan</span>
                  <b>$297</b>
                </div>
                <div className="nmod-total">
                  <span>Total</span>
                  <b>$2,797</b>
                </div>
                <div className="nmod-paybtn">Pay by text →</div>
              </div>
            </div>
            <figcaption className="nmod-cap">
              <b>Payments &amp; Invoicing</b>
              <span>Text-to-pay, subscriptions, and invoices built in.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
