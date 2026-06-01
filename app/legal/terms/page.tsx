import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Terms and Conditions (legal) page.
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from Footer-pages/terms/page.html —
 * only presentation/layout changed. Title constructed from og:title (head data).
 */
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing your use of OrenGen Worldwide services.",
  keywords:
    "terms, OrenGen, OrenGen Worldwide, AI infrastructure, terms & conditions",
  alternates: { canonical: "/legal/terms" },
  openGraph: {
    type: "website",
    title: "Terms & Conditions",
    description:
      "Terms and conditions governing your use of OrenGen Worldwide services.",
    url: "https://orengen.io/legal/terms",
    images: [
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
    ],
  },
};

export default function TermsPage() {
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
            aria-label="Terms &amp; Conditions"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">Terms &amp; Conditions</div>
                <h1>Terms and Conditions</h1>
                <p className="lead">
                  Terms and conditions governing your use of OrenGen Worldwide
                  services.
                </p>
                <div className="trust-row">
                  <span className="chip">Last updated: May 2026</span>
                  <span className="chip">OrenGen Worldwide LLC</span>
                  <span className="chip">Mansfield, TX</span>
                </div>
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
                Legal agreement governing the use of OrenGen&apos;s AI-powered
                systems and services.
              </p>
              <p>Last Updated: January 1, 2026</p>
              <p>
                <strong>Important Notice:</strong> By accessing or using OrenGen
                Worldwide LLC&apos;s services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions. If you do not agree, you must not use our services.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a
                legally binding agreement between you (&quot;Client,&quot;
                &quot;you,&quot; or &quot;your&quot;) and OrenGen Worldwide LLC
                (&quot;OrenGen,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) governing your access to and use of our
                AI-powered automation systems, software, applications, and
                related services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By registering for, accessing, or using any of our Services, you
                agree to comply with and be bound by these Terms, our Privacy
                Policy, and any additional terms applicable to specific
                Services.
              </p>

              <h2>2. Company Information</h2>
              <p>
                <strong>Legal Entity:</strong> OrenGen Worldwide LLC
                <br />
                <strong>Address:</strong> 1812 Open Range Drive, Mansfield,
                Texas 76063
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Business Type:</strong> Certified Minority Business
                Enterprise (MBE)
              </p>

              <h2>3. Services Description</h2>
              <p>
                OrenGen provides intelligent automation and AI-powered systems
                designed to enhance business operations, including but not
                limited to:
              </p>
              <ul>
                <li>
                  <strong>Buy-Lingual&trade; AI Agents:</strong> Multilingual
                  virtual employees and AI call agents that provide customer
                  support, sales assistance, and automated communication
                  services
                </li>
                <li>
                  <strong>CRM Systems:</strong> Customer relationship management
                  platforms, including white-labeled solutions and custom
                  integrations
                </li>
                <li>
                  <strong>Web Development:</strong> Website design, development,
                  hosting, and maintenance services
                </li>
                <li>
                  <strong>Lead Generation:</strong> Automated lead acquisition,
                  qualification, and management systems
                </li>
                <li>
                  <strong>Email Infrastructure:</strong> Large-scale email
                  systems, authentication protocols, deliverability
                  optimization, and bulk email services
                </li>
                <li>
                  <strong>Business Automation:</strong> Custom AI-powered
                  workflow automation, process optimization, and intelligent
                  system integrations
                </li>
              </ul>
              <p>
                Service specifications, features, and availability may vary
                based on your selected plan or custom agreement. We reserve the
                right to modify, update, or discontinue any Service with
                reasonable notice.
              </p>

              <h2>4. Eligibility and Account Requirements</h2>
              <h3>4.1 Age and Capacity</h3>
              <p>
                You must be at least 18 years of age and have the legal capacity
                to enter into binding contracts to use our Services. If you are
                accessing Services on behalf of a business entity, you represent
                and warrant that you have the authority to bind that entity to
                these Terms.
              </p>
              <h3>4.2 Account Registration</h3>
              <p>
                To access certain Services, you must create an account and
                provide accurate, current, and complete information. You are
                responsible for:
              </p>
              <ul>
                <li>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li>All activities that occur under your account</li>
                <li>
                  Immediately notifying us of any unauthorized access or
                  security breach
                </li>
                <li>
                  Ensuring your account information remains accurate and
                  up-to-date
                </li>
              </ul>
              <h3>4.3 Prohibited Use</h3>
              <p>You may not use our Services if:</p>
              <ul>
                <li>
                  You have previously been suspended or banned from our Services
                </li>
                <li>
                  You are located in a country subject to U.S. government
                  embargo or designated as a &quot;terrorist supporting&quot;
                  country
                </li>
                <li>
                  You are listed on any U.S. government list of prohibited or
                  restricted parties
                </li>
              </ul>

              <h2>5. Acceptable Use Policy</h2>
              <p>You agree not to use our Services to:</p>
              <ul>
                <li>
                  Violate any applicable local, state, national, or
                  international law or regulation
                </li>
                <li>
                  Infringe upon intellectual property rights of OrenGen or third
                  parties
                </li>
                <li>
                  Transmit malicious code, viruses, malware, or any harmful
                  technology
                </li>
                <li>
                  Engage in spamming, phishing, or unsolicited bulk
                  communications that violate CAN-SPAM Act, GDPR, or other
                  applicable regulations
                </li>
                <li>
                  Attempt to gain unauthorized access to our systems, networks,
                  or other users&apos; accounts
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of our
                  Services
                </li>
                <li>
                  Harvest or collect information about other users without their
                  consent
                </li>
                <li>
                  Use our AI systems to generate harmful, illegal,
                  discriminatory, or misleading content
                </li>
                <li>
                  Resell, sublicense, or redistribute our Services without
                  explicit written authorization
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to extract source code
                  from our proprietary systems
                </li>
              </ul>

              <h2>6. Payment Terms and Billing</h2>
              <h3>6.1 Fees and Charges</h3>
              <p>
                You agree to pay all fees associated with your selected Services
                as specified in your service agreement or pricing plan. All fees
                are in U.S. Dollars (USD) unless otherwise stated.
              </p>
              <h3>6.2 Billing Cycles</h3>
              <p>
                Services may be billed on a subscription basis (monthly,
                annually, or custom terms) or as one-time fees. Recurring
                charges will be processed automatically using your provided
                payment method.
              </p>
              <h3>6.3 Payment Methods</h3>
              <p>
                We accept major credit cards, ACH transfers, wire transfers, and
                other payment methods as agreed upon. You authorize us to charge
                your payment method for all fees incurred.
              </p>
              <h3>6.4 Late Payments</h3>
              <p>
                Invoices are due within 30 days of issuance unless otherwise
                specified. Late payments may incur interest charges of 1.5% per
                month (or the maximum rate permitted by law, whichever is lower)
                and may result in service suspension or termination.
              </p>
              <h3>6.5 Refund Policy</h3>
              <p>
                Refunds are handled on a case-by-case basis and are generally
                not provided for subscription services after the service period
                has commenced. Custom development work and setup fees are
                non-refundable once work has begun. Please contact{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> for
                refund requests.
              </p>
              <h3>6.6 Price Changes</h3>
              <p>
                We reserve the right to modify our pricing with 30 days&apos;
                advance notice. Continued use of Services after price changes
                constitutes acceptance of new pricing.
              </p>

              <h2>7. Intellectual Property Rights</h2>
              <h3>7.1 OrenGen Property</h3>
              <p>
                All intellectual property rights in our Services, including but
                not limited to software, algorithms, AI models, designs,
                trademarks, logos, and proprietary technology, are owned
                exclusively by OrenGen Worldwide LLC or our licensors. These
                Terms do not grant you any ownership rights to our intellectual
                property.
              </p>
              <h3>7.2 Client Content</h3>
              <p>
                You retain all intellectual property rights to content you
                provide to us (&quot;Client Content&quot;). By using our
                Services, you grant us a limited, non-exclusive, worldwide
                license to use, process, store, and transmit Client Content
                solely to provide and improve our Services.
              </p>
              <h3>7.3 AI-Generated Content</h3>
              <p>
                Content generated by our AI systems based on your instructions
                may be subject to shared ownership or limited licensing terms
                depending on your service agreement. Custom-developed solutions
                may have specific intellectual property provisions outlined in
                separate agreements.
              </p>
              <h3>7.4 Feedback and Suggestions</h3>
              <p>
                Any feedback, suggestions, or ideas you provide regarding our
                Services become the property of OrenGen and may be used without
                compensation or attribution.
              </p>

              <h2>8. Data Privacy and Security</h2>
              <h3>8.1 Privacy Policy</h3>
              <p>
                Our collection, use, and protection of your personal information
                are governed by our Privacy Policy, which is incorporated into
                these Terms by reference. We comply with applicable data
                protection laws including GDPR, CCPA, and other regional
                regulations.
              </p>
              <h3>8.2 Data Processing</h3>
              <p>
                We process data in accordance with industry-standard security
                practices. For enterprise clients requiring specific data
                handling, we offer custom Data Processing Agreements (DPAs) and
                Business Associate Agreements (BAAs) for HIPAA compliance.
              </p>
              <h3>8.3 Security Measures</h3>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your data. However, no system is
                completely secure, and we cannot guarantee absolute security of
                data transmitted or stored through our Services.
              </p>

              <h2>9. Warranties and Disclaimers</h2>
              <h3>9.1 Service Availability</h3>
              <p>
                While we strive for high availability, our Services are provided
                on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We
                do not guarantee uninterrupted, error-free, or secure access to
                our Services.
              </p>
              <h3>9.2 AI System Limitations</h3>
              <p>
                AI-powered systems may produce errors, inaccuracies, or
                unexpected results. You acknowledge that:
              </p>
              <ul>
                <li>
                  AI outputs should be reviewed and verified by qualified
                  personnel before use in critical applications
                </li>
                <li>
                  We are not responsible for decisions made based solely on
                  AI-generated recommendations
                </li>
                <li>
                  AI systems require ongoing training and may improve over time
                </li>
              </ul>
              <h3>9.3 Disclaimer of Warranties</h3>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORENGEN DISCLAIMS ALL
                WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR
                SERVICES WILL MEET YOUR REQUIREMENTS OR ACHIEVE SPECIFIC
                RESULTS.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
              <ul>
                <li>
                  ORENGEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                  LIMITED TO LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR
                  LOSS OF GOODWILL
                </li>
                <li>
                  OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO
                  THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU
                  PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $1,000,
                  WHICHEVER IS GREATER
                </li>
                <li>
                  SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY FOR
                  INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THESE LIMITATIONS MAY
                  NOT APPLY TO YOU
                </li>
              </ul>

              <h2>11. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless OrenGen
                Worldwide LLC, its officers, directors, employees, contractors,
                and agents from and against any claims, liabilities, damages,
                losses, costs, or expenses (including reasonable attorneys&apos;
                fees) arising from or related to:
              </p>
              <ul>
                <li>Your use or misuse of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable laws or regulations</li>
                <li>Your infringement of any third-party rights</li>
                <li>Client Content you provide to our Services</li>
              </ul>

              <h2>12. Termination</h2>
              <h3>12.1 Termination by Client</h3>
              <p>
                You may terminate your account and discontinue use of our
                Services at any time by contacting us at{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>.
                Termination does not relieve you of obligations to pay
                outstanding fees.
              </p>
              <h3>12.2 Termination by OrenGen</h3>
              <p>
                We may suspend or terminate your access to our Services
                immediately, without prior notice, if:
              </p>
              <ul>
                <li>You breach these Terms or any applicable policies</li>
                <li>
                  Your account shows signs of fraudulent or illegal activity
                </li>
                <li>You fail to pay fees when due</li>
                <li>We are required to do so by law or legal authority</li>
                <li>
                  We discontinue offering Services (with reasonable notice)
                </li>
              </ul>
              <h3>12.3 Effect of Termination</h3>
              <p>Upon termination:</p>
              <ul>
                <li>
                  Your right to access and use our Services immediately ceases
                </li>
                <li>
                  We may delete your account data in accordance with our data
                  retention policies
                </li>
                <li>
                  You remain liable for all fees incurred prior to termination
                </li>
                <li>
                  Provisions intended to survive termination (including
                  intellectual property, indemnification, limitation of
                  liability, and dispute resolution) shall continue in effect
                </li>
              </ul>

              <h2>13. Service Level Agreement</h2>
              <p>
                Enterprise clients with dedicated service agreements may have
                specific uptime guarantees and support response times outlined
                in their contracts. Standard service availability targets 99.5%
                uptime for hosted services, excluding scheduled maintenance. For
                SLA details specific to your service tier, please refer to your
                service agreement or contact our team.
              </p>

              <h2>13A. SMS and Mobile Communications</h2>
              <p>
                If you provide a mobile telephone number to OrenGen or opt in to
                any OrenGen SMS program, the following terms apply in addition to
                (and not in lieu of) the rest of these Terms and our{" "}
                <a href="/legal/ai-communications-opt-in">
                  AI Communications Opt-In
                </a>{" "}
                disclosures.
              </p>
              <h3>13A.1 Consent</h3>
              <p>
                By providing your mobile number and opting in (via checkbox,
                reply keyword, verbal confirmation on a recorded call, or web
                form where consent is expressly requested), you consent to
                receive{" "}
                <strong>recurring automated SMS and MMS messages</strong> from
                OrenGen Worldwide LLC, including transactional notifications
                (e.g., booking confirmations, account alerts, service updates)
                and, where expressly opted in, marketing or promotional
                messages. Consent to receive SMS is{" "}
                <strong>not a condition of purchase</strong> of any OrenGen
                product or service.
              </p>
              <h3>13A.2 Message Frequency, Rates, and Carriers</h3>
              <p>
                Message frequency varies by the program and by your activity.{" "}
                <strong>Message and data rates may apply</strong> as determined
                by your mobile carrier; OrenGen is not responsible for carrier
                charges. Carriers are not liable for delayed or undelivered
                messages. OrenGen supported carriers include but are not limited
                to AT&amp;T, Verizon, T-Mobile, Sprint, US Cellular, and their
                MVNOs; availability varies.
              </p>
              <h3>13A.3 Opt-Out and Help</h3>
              <p>
                You may cancel SMS messages at any time by replying{" "}
                <strong>STOP</strong>, <strong>UNSUBSCRIBE</strong>,{" "}
                <strong>CANCEL</strong>, <strong>END</strong>, or{" "}
                <strong>QUIT</strong> to any message. After we receive your
                opt-out, we will send one confirmation message and no further SMS
                will be sent unless you re-enroll. For help at any time, reply{" "}
                <strong>HELP</strong> or email{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>.
              </p>
              <h3>13A.4 Mobile Information Not Shared for Marketing</h3>
              <p>
                <strong>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </strong>{" "}
                Text messaging originator opt-in data and consent are not shared
                with any third parties. Mobile data is used only to deliver the
                OrenGen services and messages you have authorized. See{" "}
                <a href="/legal/privacy-policy">Privacy Policy &#167;5.6</a> for
                full details.
              </p>
              <h3>13A.5 Changes to the SMS Program</h3>
              <p>
                We may modify or discontinue any SMS program at any time, with or
                without notice. Material changes that affect your consent or
                rights will be communicated via SMS or email prior to taking
                effect where legally required.
              </p>
              <h3>13A.6 Governing Regulations</h3>
              <p>
                OrenGen SMS programs are operated in compliance with the
                Telephone Consumer Protection Act (TCPA, 47 U.S.C. &#167;227),
                CTIA Messaging Principles and Best Practices, and applicable
                carrier A2P 10DLC registration requirements.
              </p>

              <h2>14. Legal Compliance and Export Controls</h2>
              <h3>14.1 Regulatory Compliance</h3>
              <p>
                You are responsible for ensuring your use of our Services
                complies with all applicable laws, regulations, and industry
                standards, including but not limited to:
              </p>
              <ul>
                <li>CAN-SPAM Act for email communications</li>
                <li>TCPA for telephone communications</li>
                <li>GDPR for European data protection</li>
                <li>CCPA/CPRA for California privacy rights</li>
                <li>HIPAA for healthcare information (if applicable)</li>
                <li>
                  FTC regulations for advertising and marketing practices
                </li>
              </ul>
              <h3>14.2 Export Controls</h3>
              <p>
                Our Services and underlying technology may be subject to U.S.
                export controls. You may not use or export our Services in
                violation of U.S. export laws and regulations.
              </p>

              <h2>15. Dispute Resolution and Governing Law</h2>
              <h3>15.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Texas, United States, without
                regard to its conflict of law provisions.
              </p>
              <h3>15.2 Jurisdiction and Venue</h3>
              <p>
                Any legal action or proceeding arising under these Terms shall be
                brought exclusively in the federal or state courts located in
                Tarrant County, Texas. You consent to the personal jurisdiction
                and venue of such courts.
              </p>
              <h3>15.3 Informal Resolution</h3>
              <p>
                Before filing any formal legal action, you agree to first
                contact us at{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> to
                attempt to resolve the dispute informally. We will make
                reasonable efforts to resolve disputes amicably.
              </p>
              <h3>15.4 Arbitration Agreement</h3>
              <p>
                For disputes that cannot be resolved informally, you agree that
                any dispute, claim, or controversy arising out of or relating to
                these Terms or breach thereof shall be settled by binding
                arbitration administered by the American Arbitration Association
                (AAA) in accordance with its Commercial Arbitration Rules. The
                arbitration shall take place in Tarrant County, Texas, unless
                otherwise agreed.
              </p>
              <h3>15.5 Class Action Waiver</h3>
              <p>
                YOU AND ORENGEN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE PROCEEDING.
              </p>

              <h2>16. Force Majeure</h2>
              <p>
                OrenGen shall not be liable for any failure or delay in
                performance due to circumstances beyond our reasonable control,
                including but not limited to acts of God, war, terrorism, civil
                unrest, labor disputes, government actions, internet service
                provider failures, or natural disasters.
              </p>

              <h2>17. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated via:
              </p>
              <ul>
                <li>Email notification to your registered address</li>
                <li>Notice on our website</li>
                <li>In-app notifications</li>
              </ul>
              <p>
                Your continued use of our Services after the effective date of
                modified Terms constitutes your acceptance of the changes. If you
                do not agree to modified Terms, you must discontinue use of our
                Services.
              </p>

              <h2>18. Miscellaneous Provisions</h2>
              <h3>18.1 Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and any additional
                service-specific agreements, constitute the entire agreement
                between you and OrenGen regarding the Services and supersede all
                prior agreements and understandings.
              </p>
              <h3>18.2 Severability</h3>
              <p>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision shall be limited or eliminated to the
                minimum extent necessary, and the remaining provisions shall
                remain in full force and effect.
              </p>
              <h3>18.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms
                shall not constitute a waiver of such right or provision.
              </p>
              <h3>18.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your rights
                hereunder without our prior written consent. We may assign or
                transfer these Terms without restriction.
              </p>
              <h3>18.5 Third-Party Beneficiaries</h3>
              <p>
                These Terms do not create any third-party beneficiary rights
                except as expressly stated.
              </p>
              <h3>18.6 Language</h3>
              <p>
                These Terms are written in English. Any translated version is
                provided for convenience only. In the event of conflict, the
                English version shall prevail.
              </p>

              <h3>Contact Information</h3>
              <p>
                <strong>Questions or Concerns?</strong>
              </p>
              <p>
                If you have any questions about these Terms and Conditions,
                please contact us:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Address:</strong> 1812 Open Range Drive, Mansfield,
                Texas 76063
                <br />
                <strong>Website:</strong>{" "}
                <a href="https://orengen.io">https://orengen.io</a>
              </p>
              <p>
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00
                PM CST
              </p>
              <p>
                <strong>Acknowledgment:</strong> BY USING ORENGEN&apos;S
                SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND
                CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEIR
                PROVISIONS.
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
                <h2>Have a question about this Terms and Conditions?</h2>
                <p>
                  Reach the OrenGen team directly. We respond to terms and
                  conditions inquiries within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=terms"
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
