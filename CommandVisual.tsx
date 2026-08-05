import { WORLDWIDE_GLOBE_URL } from "@/lib/brandAssets";
import type { CommandCategoryId } from "@/lib/siteNavigation";

export default function CommandVisual({ category }: { category: CommandCategoryId }) {
  if (category === "worldwide") {
    return (
      <div
        className="og-command-visual og-command-visual--worldwide"
        role="img"
        aria-label="OrenGen Worldwide metal globe command center"
      >
        <span className="og-command-visual__orbit og-command-visual__orbit--one" />
        <span className="og-command-visual__orbit og-command-visual__orbit--two" />
        <span className="og-command-visual__sweep" />
        <img src={WORLDWIDE_GLOBE_URL} alt="" decoding="async" />
        <div className="og-command-visual__readout">
          <span>WORLDWIDE</span>
          <b>ECOSYSTEM ONLINE</b>
        </div>
      </div>
    );
  }

  if (category === "products") {
    return (
      <div
        className="og-command-visual og-command-visual--products"
        role="img"
        aria-label="Connected OrenGen product intelligence network"
      >
        <span className="og-product-core">AI</span>
        {[
          ["VOICE", "one"],
          ["NEXUS", "two"],
          ["WEB", "three"],
          ["SOCIAL", "four"],
        ].map(([label, position]) => (
          <span className={`og-product-node og-product-node--${position}`} key={label}>
            {label}
          </span>
        ))}
        <span className="og-command-visual__beam og-command-visual__beam--a" />
        <span className="og-command-visual__beam og-command-visual__beam--b" />
        <span className="og-command-visual__beam og-command-visual__beam--c" />
        <span className="og-command-visual__beam og-command-visual__beam--d" />
        <div className="og-command-visual__readout">
          <span>CONNECTED PRODUCTS</span>
          <b>VOICE · WORK · MEMORY · GROWTH</b>
        </div>
      </div>
    );
  }

  if (category === "solutions") {
    return (
      <div
        className="og-command-visual og-command-visual--solutions"
        role="img"
        aria-label="Government, health, and legal mission shields"
      >
        <div className="og-solution-shield og-solution-shield--gov">
          <span>GOV</span>
          <small>MISSION</small>
        </div>
        <div className="og-solution-shield og-solution-shield--health">
          <span>HLTH</span>
          <small>CARE</small>
        </div>
        <div className="og-solution-shield og-solution-shield--legal">
          <span>LGL</span>
          <small>JUDGMENT</small>
        </div>
        <span className="og-solutions-scan" />
        <div className="og-command-visual__readout">
          <span>CONTROLLED ACCELERATION</span>
          <b>BOUNDARIES VERIFIED</b>
        </div>
      </div>
    );
  }

  if (category === "partners") {
    return (
      <div
        className="og-command-visual og-command-visual--partners"
        role="img"
        aria-label="Sales partner introduction becoming recurring earnings"
      >
        <span className="og-partner-source">YOU</span>
        <span className="og-partner-line og-partner-line--one" />
        <span className="og-partner-line og-partner-line--two" />
        <span className="og-partner-core">25%</span>
        <span className="og-partner-payout og-partner-payout--setup">SETUP</span>
        <span className="og-partner-payout og-partner-payout--life">MONTHLY · LIFE</span>
        <div className="og-command-visual__readout">
          <span>PARTNER LAUNCHPAD</span>
          <b>WEEKLY STRIPE PAYOUTS</b>
        </div>
      </div>
    );
  }

  if (category === "resources") {
    return (
      <div
        className="og-command-visual og-command-visual--resources"
        role="img"
        aria-label="OrenGen signal and intelligence radar"
      >
        <span className="og-radar-ring og-radar-ring--one" />
        <span className="og-radar-ring og-radar-ring--two" />
        <span className="og-radar-ring og-radar-ring--three" />
        <span className="og-radar-sweep" />
        <span className="og-radar-ping og-radar-ping--a" />
        <span className="og-radar-ping og-radar-ping--b" />
        <span className="og-radar-ping og-radar-ping--c" />
        <div className="og-command-visual__readout">
          <span>ORENSIGNAL</span>
          <b>PROOF · RESEARCH · ANSWERS</b>
        </div>
      </div>
    );
  }

  if (category === "company") {
    return (
      <div
        className="og-command-visual og-command-visual--company"
        role="img"
        aria-label="OrenGen company architecture and leadership timeline"
      >
        <span className="og-company-spine" />
        {[
          ["2018", "FOUNDED"],
          ["NOW", "WORLDWIDE"],
          ["NEXT", "SCALE"],
        ].map(([year, label], index) => (
          <div className={`og-company-block og-company-block--${index + 1}`} key={year}>
            <span>{year}</span>
            <b>{label}</b>
          </div>
        ))}
        <div className="og-command-visual__readout">
          <span>LEADERSHIP INTELLIGENCE</span>
          <b>ARCHITECT · BUILD · OWN</b>
        </div>
      </div>
    );
  }

  return (
    <div
      className="og-command-visual og-command-visual--trust"
      role="img"
      aria-label="OrenGen security and trust verification vault"
    >
      <span className="og-trust-ring og-trust-ring--one" />
      <span className="og-trust-ring og-trust-ring--two" />
      <div className="og-trust-vault">
        <span>OG</span>
        <b>VERIFIED</b>
      </div>
      <span className="og-trust-tick og-trust-tick--a">NIST</span>
      <span className="og-trust-tick og-trust-tick--b">PRIVACY</span>
      <span className="og-trust-tick og-trust-tick--c">CONSENT</span>
      <div className="og-command-visual__readout">
        <span>SECURITY &amp; TRUST</span>
        <b>CONTROL PATH ACTIVE</b>
      </div>
    </div>
  );
}
