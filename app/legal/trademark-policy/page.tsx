import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Trademark Policy (legal) page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/trademark-policy/page.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "Trademark Policy",
  description:
    "OrenGen trademark usage guidelines and intellectual property protection.",
  keywords:
    "trademark-policy, OrenGen, OrenGen Worldwide, AI infrastructure, trademark policy",
  alternates: { canonical: "/legal/trademark-policy" },
  openGraph: {
    type: "website",
    title: "Trademark Policy",
    description:
      "OrenGen trademark usage guidelines and intellectual property protection.",
    url: "https://orengen.io/legal/trademark-policy",
  },
};

export default function TrademarkPolicyPage() {
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
            aria-label="Trademark Policy"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">Trademark Policy</div>
                <h1>Trademark Policy</h1>
                <p className="lead">
                  OrenGen trademark usage guidelines and intellectual property
                  protection.
                </p>
                <p className="lead">
                  <span>Last updated: May 2026</span>{" "}
                  <span>OrenGen Worldwide LLC</span> <span>Mansfield, TX</span>
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
                Guidelines for using OrenGen&apos;s trademarks, service marks,
                and brand assets.
              </p>
              <p>Last Updated: January 1, 2026</p>
              <p>
                <strong>Protecting Our Brand:</strong> OrenGen Worldwide LLC
                owns valuable trademarks and service marks that distinguish our
                products and services. This Trademark Policy explains how you
                may (and may not) use our trademarks, logos, and other brand
                assets.
              </p>

              <h2>1. Introduction and Ownership</h2>
              <p>
                OrenGen Worldwide LLC (&quot;OrenGen,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is the owner of various
                trademarks, service marks, trade names, logos, slogans, and
                other brand identifiers (collectively, &quot;OrenGen
                Trademarks&quot; or &quot;Marks&quot;) used in connection with
                our AI-powered automation systems, software, and services.
              </p>
              <p>
                These trademarks are valuable intellectual property assets that
                represent the quality, reputation, and goodwill associated with
                OrenGen and our products. Unauthorized use of our trademarks can
                dilute their value, create consumer confusion, and infringe upon
                our legal rights.
              </p>
              <p>
                This Trademark Policy governs the use of OrenGen Trademarks by
                third parties, including customers, partners, referral
                partners, resellers, and the general public. By using any OrenGen
                Trademark, you agree to comply with this policy and all
                applicable trademark laws.
              </p>

              <h2>2. OrenGen Trademarks and Brand Assets</h2>
              <p>
                The following are trademarks, service marks, and brand
                identifiers owned by OrenGen Worldwide LLC:
              </p>
              <h3>Primary Trademarks</h3>
              <ul>
                <li>
                  <strong>OrenGen&trade;</strong> - Company name and primary
                  brand identifier
                </li>
                <li>
                  <strong>OrenGen Worldwide&trade;</strong> - Full company name
                  and service mark
                </li>
                <li>
                  <strong>Buy-Lingual&trade; AI-Agents</strong> - Multilingual
                  AI virtual employee technology and service mark
                </li>
                <li>
                  <strong>
                    &quot;Built to Disrupt. Designed to Deliver.&quot;&trade;
                  </strong>{" "}
                  - Company tagline and slogan
                </li>
              </ul>
              <h3>2.1 Additional Brand Assets</h3>
              <p>
                In addition to word marks, OrenGen owns the following brand
                assets:
              </p>
              <ul>
                <li>
                  <strong>OrenGen Logos:</strong> All graphic logos, symbols,
                  and design marks featuring the OrenGen name or brand elements
                </li>
                <li>
                  <strong>Product Names:</strong> Names of our AI agents,
                  software products, services, and technology platforms
                </li>
                <li>
                  <strong>Visual Identity:</strong> Color schemes, typography,
                  design elements, and trade dress associated with OrenGen
                </li>
                <li>
                  <strong>Domain Names:</strong> OrenGen.io and related domain
                  names
                </li>
                <li>
                  <strong>Social Media Handles:</strong> @OrenGen and related
                  social media identifiers
                </li>
              </ul>
              <h3>2.2 Trademark Status</h3>
              <p>OrenGen Trademarks may be:</p>
              <ul>
                <li>
                  <strong>Registered Trademarks (&reg;):</strong> Marks
                  registered with the United States Patent and Trademark Office
                  (USPTO) or foreign trademark offices
                </li>
                <li>
                  <strong>Common Law Trademarks (&trade;):</strong> Unregistered
                  marks protected by common law trademark rights through use in
                  commerce
                </li>
                <li>
                  <strong>Service Marks (&#8480;):</strong> Marks used to
                  identify services rather than physical products
                </li>
              </ul>
              <p>
                All OrenGen Trademarks are protected by applicable trademark
                laws regardless of registration status.
              </p>

              <h2>3. General Trademark Usage Rules</h2>
              <p>
                When using OrenGen Trademarks with permission, you must follow
                these mandatory guidelines:
              </p>
              <h3>3.1 Proper Trademark Form</h3>
              <ul>
                <li>
                  <strong>Use Exact Form:</strong> Always use OrenGen Trademarks
                  in their exact form as shown in this policy. Do not
                  abbreviate, hyphenate, or modify the spelling
                </li>
                <li>
                  <strong>Capitalize Properly:</strong> &quot;OrenGen&quot; must
                  always be written with capital &quot;O&quot; and
                  &quot;G&quot;. &quot;Buy-Lingual&quot; must maintain its hyphen
                  and capitalization
                </li>
                <li>
                  <strong>Include Trademark Symbol:</strong> Use the appropriate
                  trademark symbol (&trade;, &reg;, or &#8480;) on the first or
                  most prominent use of the mark
                </li>
                <li>
                  <strong>Never Pluralize:</strong> Trademarks are adjectives
                  modifying a noun. Use &quot;OrenGen systems&quot; not
                  &quot;OrenGens&quot;
                </li>
                <li>
                  <strong>Never Make Possessive:</strong> Use &quot;the features
                  of OrenGen&quot; not &quot;OrenGen&apos;s features&quot;
                </li>
                <li>
                  <strong>Never Use as a Verb:</strong> Don&apos;t say &quot;We
                  OrenGenned our business&quot; or similar verb forms
                </li>
                <li>
                  <strong>Never Use as a Noun:</strong> Say &quot;OrenGen
                  platform&quot; or &quot;OrenGen services,&quot; not just
                  &quot;OrenGen&quot; standing alone
                </li>
              </ul>
              <h3>3.2 Trademark Notice</h3>
              <p>
                Include a trademark attribution notice whenever you use OrenGen
                Trademarks prominently:
              </p>
              <p>
                <em>
                  Example: &quot;OrenGen&trade; and Buy-Lingual&trade; are
                  trademarks of OrenGen Worldwide LLC. All rights
                  reserved.&quot;
                </em>
              </p>
              <h3>3.3 Visual Presentation</h3>
              <ul>
                <li>
                  <strong>Distinguish from Text:</strong> Set trademarks apart
                  from surrounding text using capitalization, bold, italics, or
                  different font
                </li>
                <li>
                  <strong>Don&apos;t Alter Logos:</strong> Never change colors,
                  proportions, orientation, or elements of OrenGen logos
                </li>
                <li>
                  <strong>Maintain Clear Space:</strong> Leave adequate white
                  space around logos to ensure visibility and impact
                </li>
                <li>
                  <strong>Minimum Size:</strong> Never reproduce logos below the
                  minimum size that maintains legibility
                </li>
              </ul>
              <h3>3.4 Accurate Representation</h3>
              <ul>
                <li>
                  Use trademarks only to accurately describe OrenGen products or
                  services
                </li>
                <li>Never create false association or endorsement by OrenGen</li>
                <li>
                  Do not imply partnership, sponsorship, or affiliation without
                  written agreement
                </li>
                <li>
                  Do not use trademarks in a way that disparages OrenGen or
                  damages our reputation
                </li>
              </ul>

              <h2>4. Permitted Uses of OrenGen Trademarks</h2>
              <p>
                You may use OrenGen Trademarks{" "}
                <strong>without prior written permission</strong> in the
                following limited circumstances:
              </p>
              <h3>4.1 Nominative Fair Use (Referential Use)</h3>
              <p>
                You may refer to OrenGen and our products using our trademarks
                when:
              </p>
              <ul>
                <li>
                  <strong>Truthful Statements:</strong> Making factual, truthful
                  statements about OrenGen products or services you use or
                  resell
                </li>
                <li>
                  <strong>Compatibility:</strong> Indicating that your product
                  or service is compatible with or works with OrenGen products
                </li>
                <li>
                  <strong>Comparisons:</strong> Making legitimate comparative
                  statements or reviews
                </li>
                <li>
                  <strong>News and Commentary:</strong> Reporting news, writing
                  articles, or providing commentary about OrenGen
                </li>
              </ul>
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul>
                <li>
                  Use only the minimum necessary to identify OrenGen or our
                  products
                </li>
                <li>Do not use our logos or other graphic marks</li>
                <li>
                  Include a disclaimer that you are not affiliated with,
                  sponsored by, or endorsed by OrenGen
                </li>
                <li>
                  Do not create confusion about the source of your products or
                  services
                </li>
              </ul>
              <h3>4.2 Authorized Resellers and Partners</h3>
              <p>
                If you have a written reseller, partner, or referral partner
                agreement with OrenGen, you may use our trademarks as
                specifically permitted in your agreement, subject to:
              </p>
              <ul>
                <li>Compliance with usage guidelines provided to you</li>
                <li>
                  Approval of all marketing materials featuring OrenGen
                  Trademarks
                </li>
                <li>Accurate representation of your relationship with OrenGen</li>
                <li>Cessation of use upon termination of the agreement</li>
              </ul>
              <h3>4.3 Customers and Service Users</h3>
              <p>As an OrenGen customer, you may:</p>
              <ul>
                <li>
                  Truthfully state that you use OrenGen products or services
                </li>
                <li>
                  Display OrenGen badges or &quot;Powered by&quot; marks if
                  provided by us
                </li>
                <li>
                  Include our name in your client list or case studies (if
                  publicly disclosed)
                </li>
              </ul>
              <p>You may NOT:</p>
              <ul>
                <li>
                  Imply endorsement, sponsorship, or partnership beyond your
                  customer relationship
                </li>
                <li>Use OrenGen logos without express written permission</li>
                <li>
                  Create the impression that your content is produced or
                  approved by OrenGen
                </li>
              </ul>

              <h2>5. Prohibited Uses of OrenGen Trademarks</h2>
              <p>
                The following uses of OrenGen Trademarks are{" "}
                <strong>strictly prohibited</strong> without express written
                permission from OrenGen:
              </p>
              <h3>5.1 Company Names and Business Identifiers</h3>
              <ul>
                <li>
                  <strong>Business Names:</strong> Using OrenGen Trademarks as
                  or in your company name, trade name, or doing-business-as
                  (DBA) name
                </li>
                <li>
                  <strong>Product/Service Names:</strong> Using our marks as
                  names for your own products or services
                </li>
                <li>
                  <strong>Domain Names:</strong> Registering domain names that
                  include OrenGen Trademarks or confusingly similar variations
                </li>
                <li>
                  <strong>Social Media:</strong> Using our marks in social media
                  handles, usernames, or page names without authorization
                </li>
                <li>
                  <strong>App Names:</strong> Naming applications, software, or
                  mobile apps using OrenGen Trademarks
                </li>
              </ul>
              <h3>5.2 Misleading or Confusing Uses</h3>
              <ul>
                <li>
                  Creating confusion about affiliation, endorsement,
                  sponsorship, or approval by OrenGen
                </li>
                <li>
                  Implying that you are OrenGen or that your business is part of
                  OrenGen
                </li>
                <li>
                  Suggesting that OrenGen has created, approved, or endorsed
                  your content
                </li>
                <li>
                  Using marks in a way that suggests OrenGen is the source of
                  your products or services
                </li>
              </ul>
              <h3>5.3 Modification and Alteration</h3>
              <ul>
                <li>
                  Altering, modifying, or creating variations of OrenGen
                  Trademarks
                </li>
                <li>
                  Combining our marks with other words or elements to create new
                  marks
                </li>
                <li>Changing colors, fonts, or design elements of our logos</li>
                <li>
                  Creating composite marks that incorporate OrenGen Trademarks
                </li>
                <li>Abbreviating or creating acronyms from our marks</li>
              </ul>
              <h3>5.4 Merchandise and Products</h3>
              <ul>
                <li>
                  Manufacturing, selling, or distributing merchandise bearing
                  OrenGen Trademarks (t-shirts, mugs, stickers, etc.) without a
                  licensing agreement
                </li>
                <li>Using our marks on promotional items or giveaways</li>
                <li>
                  Incorporating our marks into your product packaging or
                  labeling
                </li>
              </ul>
              <h3>5.5 Disparaging or Harmful Uses</h3>
              <ul>
                <li>
                  Using OrenGen Trademarks in connection with unlawful, obscene,
                  defamatory, or offensive content
                </li>
                <li>
                  Associating our marks with adult content, gambling, tobacco,
                  firearms, or illegal activities
                </li>
                <li>
                  Using marks in a manner that damages OrenGen&apos;s reputation
                  or goodwill
                </li>
                <li>
                  Making false or misleading statements about OrenGen products
                  or services
                </li>
              </ul>
              <h3>5.6 Advertising and SEO Practices</h3>
              <ul>
                <li>
                  <strong>Paid Search:</strong> Bidding on OrenGen Trademarks as
                  keywords in paid search campaigns without permission
                </li>
                <li>
                  <strong>Meta Tags:</strong> Using our marks in meta tags,
                  hidden text, or other SEO tactics to mislead search engines
                </li>
                <li>
                  <strong>Ad Copy:</strong> Using trademarks in advertising copy
                  to create false association
                </li>
              </ul>

              <h2>6. Buy-Lingual&trade; AI-Agents: Special Guidelines</h2>
              <p>
                Buy-Lingual&trade; is a proprietary trademark of OrenGen
                Worldwide LLC designating our multilingual AI virtual employee
                technology and services. Additional guidelines apply:
              </p>
              <h3>6.1 Proper Usage</h3>
              <ul>
                <li>
                  <strong>Correct Form:</strong> Always write as
                  &quot;Buy-Lingual&trade; AI-Agents&quot; with hyphen and
                  capitalization
                </li>
                <li>
                  <strong>Trademark Symbol:</strong> Include &trade; symbol on
                  first or prominent use
                </li>
                <li>
                  <strong>Descriptive Use:</strong> Use as an adjective:
                  &quot;Buy-Lingual AI-Agent technology&quot; or
                  &quot;Buy-Lingual services&quot;
                </li>
                <li>
                  <strong>Never Generic:</strong> Do not use
                  &quot;buy-lingual&quot; (lowercase) as a generic term for
                  multilingual AI
                </li>
              </ul>
              <h3>6.2 Prohibited Variations</h3>
              <p>Do NOT use any of the following:</p>
              <ul>
                <li>
                  &quot;Bi-Lingual AI&quot; or &quot;Bilingual AI&quot; (without
                  &quot;Buy&quot;)
                </li>
                <li>&quot;BuyLingual&quot; (no hyphen)</li>
                <li>&quot;Buy Lingual&quot; (space instead of hyphen)</li>
                <li>&quot;buy-lingual&quot; (lowercase)</li>
                <li>&quot;BL&quot; or other abbreviations</li>
              </ul>
              <h3>6.3 Competitive Use</h3>
              <p>Competitors and third parties may NOT:</p>
              <ul>
                <li>
                  Use &quot;Buy-Lingual&quot; to describe their own multilingual
                  AI products
                </li>
                <li>
                  Advertise on the keyword &quot;Buy-Lingual&quot; in search
                  campaigns
                </li>
                <li>Create derivative marks based on &quot;Buy-Lingual&quot;</li>
                <li>
                  Suggest their products are &quot;Buy-Lingual-compatible&quot;
                  without authorization
                </li>
              </ul>

              <h2>7. Requesting Permission to Use OrenGen Trademarks</h2>
              <p>
                If you wish to use OrenGen Trademarks in a manner not expressly
                permitted by this policy, you must obtain prior written
                permission from OrenGen.
              </p>
              <h3>7.1 How to Request Permission</h3>
              <p>
                Submit a written request to{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> with
                subject line &quot;Trademark Use Request&quot; including:
              </p>
              <ul>
                <li>Your full legal name or company name</li>
                <li>Contact information (email, phone, address)</li>
                <li>Detailed description of intended use</li>
                <li>Specific marks you wish to use</li>
                <li>Mock-ups or examples of proposed usage</li>
                <li>Duration of intended use</li>
                <li>Geographic scope of use</li>
                <li>Media or channels where marks will appear</li>
              </ul>
              <h3>7.2 Review Process</h3>
              <ul>
                <li>
                  OrenGen will review requests within 15-30 business days
                </li>
                <li>We may request additional information or modifications</li>
                <li>Approval is at OrenGen&apos;s sole discretion</li>
                <li>
                  We may impose conditions, restrictions, or quality control
                  requirements
                </li>
                <li>Permission may be revoked at any time</li>
              </ul>
              <h3>7.3 Licensing Agreements</h3>
              <p>
                For ongoing or commercial use of OrenGen Trademarks, we may
                require a formal trademark license agreement that includes:
              </p>
              <ul>
                <li>Scope and duration of license</li>
                <li>Quality control standards</li>
                <li>Approval rights for materials</li>
                <li>Royalties or fees (if applicable)</li>
                <li>Termination provisions</li>
                <li>Indemnification and liability terms</li>
              </ul>

              <h2>8. Enforcement and Violations</h2>
              <p>
                OrenGen actively monitors and enforces our trademark rights to
                protect our brand and prevent consumer confusion.
              </p>
              <h3>8.1 Our Enforcement Rights</h3>
              <p>
                If you violate this Trademark Policy or infringe our trademark
                rights, OrenGen may:
              </p>
              <ul>
                <li>
                  Send a cease-and-desist letter demanding immediate cessation
                  of infringing use
                </li>
                <li>Revoke any permission or license previously granted</li>
                <li>
                  Demand destruction or modification of infringing materials
                </li>
                <li>
                  Pursue legal action including injunctive relief and monetary
                  damages
                </li>
                <li>
                  Report violations to domain registrars, hosting providers, or
                  platform operators
                </li>
                <li>
                  File complaints with trademark offices or governmental
                  authorities
                </li>
                <li>Seek recovery of attorneys&apos; fees and costs</li>
              </ul>
              <h3>8.2 Legal Consequences</h3>
              <p>Trademark infringement can result in:</p>
              <ul>
                <li>
                  <strong>Civil Liability:</strong> Damages, profits, and
                  statutory damages up to $2,000,000 per mark under the Lanham
                  Act
                </li>
                <li>
                  <strong>Injunctions:</strong> Court orders prohibiting future
                  use of infringing marks
                </li>
                <li>
                  <strong>Destruction of Materials:</strong> Court-ordered
                  destruction of infringing products, packaging, and materials
                </li>
                <li>
                  <strong>Criminal Penalties:</strong> In cases of
                  counterfeiting, criminal fines and imprisonment may apply
                </li>
              </ul>
              <h3>8.3 Good Faith and Cooperation</h3>
              <p>
                We prefer to resolve trademark issues cooperatively. If you
                receive a notice from OrenGen regarding trademark use:
              </p>
              <ul>
                <li>Respond promptly and professionally</li>
                <li>Cease the objectionable use immediately</li>
                <li>Work with us to find an acceptable alternative</li>
                <li>Provide proof of compliance when requested</li>
              </ul>
              <p>
                Most issues can be resolved amicably without litigation if
                addressed quickly and in good faith.
              </p>

              <h2>9. Reporting Trademark Violations</h2>
              <p>
                If you become aware of unauthorized use of OrenGen Trademarks or
                potential trademark infringement, please report it to us.
              </p>
              <h3>9.1 How to Report</h3>
              <p>
                Email{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> with
                subject line &quot;Trademark Violation Report&quot; and include:
              </p>
              <ul>
                <li>Description of the infringing use</li>
                <li>URL or location where infringement appears</li>
                <li>Screenshots or documentation of the violation</li>
                <li>
                  Contact information of the infringing party (if known)
                </li>
                <li>Any other relevant information</li>
              </ul>
              <h3>9.2 Our Response</h3>
              <ul>
                <li>We will investigate reported violations</li>
                <li>We may request additional information from you</li>
                <li>
                  We will take appropriate action based on our assessment
                </li>
                <li>We may not disclose specific enforcement actions taken</li>
              </ul>

              <h2>10. Changes to This Trademark Policy</h2>
              <p>
                OrenGen reserves the right to modify this Trademark Policy at
                any time. Changes will be effective immediately upon posting to
                our website.
              </p>
              <h3>10.1 Notification</h3>
              <ul>
                <li>
                  The &quot;Last Updated&quot; date at the top of this page will
                  reflect changes
                </li>
                <li>
                  Material changes may be communicated via email or website
                  notice
                </li>
                <li>
                  Continued use of OrenGen Trademarks after changes constitutes
                  acceptance
                </li>
              </ul>
              <h3>10.2 Ongoing Compliance</h3>
              <p>
                You are responsible for regularly reviewing this policy to
                ensure compliance with current guidelines. Previous permission
                or licenses remain subject to the current version of this policy
                unless otherwise specified in writing.
              </p>

              <div
                aria-hidden="true"
                style={{ fontSize: "1.6rem", lineHeight: 1, marginBottom: "10px" }}
              >
                &#9888;&#65039;
              </div>
              <h3>Important Legal Notice</h3>
              <p>
                <strong>
                  Unauthorized use of OrenGen Trademarks is prohibited and may
                  result in legal action.
                </strong>{" "}
                This policy does not grant any license or permission to use
                OrenGen Trademarks except as explicitly stated. All rights not
                expressly granted are reserved by OrenGen Worldwide LLC.
              </p>
              <p>
                Failure to comply with this Trademark Policy may result in
                immediate termination of any permission or license, cessation of
                your use of OrenGen services, and legal action including claims
                for trademark infringement, unfair competition, and dilution.
              </p>

              <h3>Trademark Inquiries and Permissions</h3>
              <p>
                For questions about this Trademark Policy or to request
                permission to use OrenGen Trademarks:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Subject Line:</strong> &quot;Trademark Inquiry&quot; or
                &quot;Trademark Use Request&quot;
                <br />
                <strong>Mail:</strong> OrenGen Worldwide LLC
                <br />
                Attn: Trademark Counsel
                <br />
                1812 Open Range Drive
                <br />
                Mansfield, Texas 76063
              </p>
              <p>
                <strong>Response Time:</strong> Trademark inquiries are
                typically reviewed within 15-30 business days.
              </p>
              <p>
                <strong>Trademark Attribution:</strong> OrenGen&trade;,
                Buy-Lingual&trade; AI-Agents, and &quot;Built to Disrupt.
                Designed to Deliver.&quot;&trade; are trademarks of OrenGen
                Worldwide LLC. All other trademarks, service marks, and trade
                names referenced on this website are the property of their
                respective owners.
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
                <h2>Have a question about this Trademark Policy?</h2>
                <p>
                  Reach the OrenGen team directly. We respond to trademark
                  policy inquiries within one business day.
                </p>
                <div className="cta-row" style={{ justifyContent: "center" }}>
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=trademark-policy"
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
