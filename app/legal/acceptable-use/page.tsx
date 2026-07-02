import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Acceptable Use Policy (legal/policy document).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/acceptable-use/page.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "Guidelines for responsible and lawful use of OrenGen",
  keywords:
    "acceptable-use, OrenGen, OrenGen Worldwide, AI infrastructure, acceptable use policy",
  alternates: { canonical: "/legal/acceptable-use" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/legal/acceptable-use",
    title: "Acceptable Use Policy",
    description: "Guidelines for responsible and lawful use of OrenGen",
    images: [
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
    ],
  },
};

export default function AcceptableUsePage() {
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
            aria-label="Acceptable Use Policy"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Acceptable Use Policy</div>
                <h1>Acceptable Use Policy</h1>
                <p className="lead">
                  Guidelines for responsible and lawful use of OrenGen
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
                Guidelines for responsible and lawful use of OrenGen&apos;s
                services and platforms.
              </p>
              <p>Effective Date: January 1, 2026</p>
              <p>
                <strong>Your Responsibility:</strong> By accessing or using
                OrenGen Worldwide LLC&apos;s services, you agree to use them
                responsibly, legally, and ethically. This Acceptable Use Policy
                defines prohibited activities and sets standards for appropriate
                conduct.
              </p>

              <h2>1. Introduction and Scope</h2>
              <p>
                This Acceptable Use Policy (&quot;AUP&quot;) governs your use of
                all services, platforms, software, and systems provided by
                OrenGen Worldwide LLC (&quot;OrenGen,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), including but not limited
                to:
              </p>
              <ul>
                <li>
                  AI-powered automation systems and Buy-Lingual&trade; AI-Agents
                </li>
                <li>Customer relationship management (CRM) platforms</li>
                <li>Email infrastructure and bulk email services</li>
                <li>Web hosting and development services</li>
                <li>Lead generation and marketing automation tools</li>
                <li>API access and integrations</li>
                <li>Any other OrenGen products, services, or technologies</li>
              </ul>
              <p>
                This AUP is incorporated into and is part of our{" "}
                <a href="/legal/terms">Terms and Conditions</a>. Violation of
                this AUP constitutes a material breach of our agreement with you
                and may result in immediate suspension or termination of
                services, legal action, and reporting to law enforcement
                authorities.
              </p>

              <h2>2. General Principles of Acceptable Use</h2>
              <p>When using OrenGen services, you must:</p>
              <h3>2.1 Comply with All Laws</h3>
              <ul>
                <li>
                  Comply with all applicable local, state, national, and
                  international laws and regulations
                </li>
                <li>
                  Respect intellectual property rights, privacy rights, and
                  other legal protections
                </li>
                <li>
                  Obtain all necessary licenses, permits, and authorizations for
                  your activities
                </li>
                <li>
                  Follow industry-specific regulations applicable to your
                  business (HIPAA, FINRA, etc.)
                </li>
              </ul>
              <h3>2.2 Use Services for Legitimate Purposes</h3>
              <ul>
                <li>
                  Use services only for lawful business and personal purposes
                </li>
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security and integrity of your account</li>
                <li>Respect the rights and safety of others</li>
              </ul>
              <h3>2.3 Act in Good Faith</h3>
              <ul>
                <li>
                  Use services in a manner consistent with their intended
                  purpose
                </li>
                <li>Do not abuse, exploit, or circumvent our systems</li>
                <li>
                  Cooperate with OrenGen in addressing security or compliance
                  issues
                </li>
                <li>Report suspected violations or security vulnerabilities</li>
              </ul>

              <h2>3. Prohibited Activities</h2>
              <p>
                The following activities are{" "}
                <strong>strictly prohibited</strong> when using OrenGen
                services:
              </p>
              <h3>3.1 Illegal Activities</h3>
              <ul>
                <li>
                  <strong>Criminal Conduct:</strong> Using services to
                  facilitate, promote, or engage in any illegal activity,
                  including fraud, theft, money laundering, drug trafficking,
                  human trafficking, or terrorism
                </li>
                <li>
                  <strong>Intellectual Property Infringement:</strong> Violating
                  copyrights, trademarks, patents, trade secrets, or other
                  proprietary rights
                </li>
                <li>
                  <strong>Identity Theft and Fraud:</strong> Impersonating
                  others, creating fake identities, or engaging in phishing,
                  spoofing, or other fraudulent schemes
                </li>
                <li>
                  <strong>Unauthorized Access:</strong> Hacking, cracking, or
                  gaining unauthorized access to systems, networks, accounts, or
                  data
                </li>
                <li>
                  <strong>Sale of Illegal Goods:</strong> Selling, distributing,
                  or promoting illegal drugs, weapons, counterfeit goods, stolen
                  property, or other contraband
                </li>
              </ul>
              <h3>3.2 Abusive, Harmful, or Offensive Content</h3>
              <ul>
                <li>
                  <strong>Child Exploitation:</strong> Creating, distributing,
                  or storing any content involving minors in sexually explicit
                  or abusive situations (zero tolerance - immediate termination
                  and law enforcement reporting)
                </li>
                <li>
                  <strong>Hate Speech:</strong> Content that promotes violence,
                  hatred, or discrimination based on race, ethnicity, religion,
                  gender, sexual orientation, disability, or other protected
                  characteristics
                </li>
                <li>
                  <strong>Harassment and Threats:</strong> Harassing,
                  threatening, stalking, or intimidating individuals or groups
                </li>
                <li>
                  <strong>Violence and Gore:</strong> Excessively graphic or
                  violent content intended to shock or disturb
                </li>
                <li>
                  <strong>Defamation:</strong> Making false statements that harm
                  the reputation of individuals or organizations
                </li>
              </ul>
              <h3>3.3 Spam and Unsolicited Communications</h3>
              <ul>
                <li>
                  <strong>Email Spam:</strong> Sending unsolicited bulk emails
                  (spam) in violation of the CAN-SPAM Act or similar laws
                </li>
                <li>
                  <strong>No Opt-In:</strong> Sending commercial emails to
                  recipients who have not provided express consent
                </li>
                <li>
                  <strong>No Unsubscribe:</strong> Failing to honor unsubscribe
                  requests or not providing a clear unsubscribe mechanism
                </li>
                <li>
                  <strong>Deceptive Headers:</strong> Using false, misleading,
                  or forged email headers, subject lines, or sender information
                </li>
                <li>
                  <strong>Purchased Lists:</strong> Sending to purchased,
                  rented, or scraped email lists without proper consent
                </li>
                <li>
                  <strong>SMS/Text Spam:</strong> Sending unsolicited text
                  messages in violation of TCPA or other regulations
                </li>
                <li>
                  <strong>Voice Spam:</strong> Making automated calls without
                  proper consent or in violation of telemarketing laws
                </li>
              </ul>
              <h3>3.4 Malicious Code and Security Threats</h3>
              <ul>
                <li>
                  <strong>Malware Distribution:</strong> Distributing viruses,
                  worms, trojans, ransomware, spyware, or other malicious
                  software
                </li>
                <li>
                  <strong>Denial of Service:</strong> Launching or facilitating
                  denial-of-service (DoS) or distributed denial-of-service
                  (DDoS) attacks
                </li>
                <li>
                  <strong>Exploits and Vulnerabilities:</strong> Exploiting
                  security vulnerabilities in our systems or third-party systems
                </li>
                <li>
                  <strong>Botnets:</strong> Creating, operating, or
                  participating in botnet networks
                </li>
                <li>
                  <strong>Cryptojacking:</strong> Using our infrastructure to
                  mine cryptocurrency without authorization
                </li>
              </ul>
              <h3>3.5 Network Abuse and Resource Overuse</h3>
              <ul>
                <li>
                  <strong>Excessive Usage:</strong> Consuming excessive
                  bandwidth, storage, or computational resources that degrade
                  service for others
                </li>
                <li>
                  <strong>Server Overload:</strong> Activities that cause undue
                  burden on our servers or infrastructure
                </li>
                <li>
                  <strong>Port Scanning:</strong> Scanning ports or probing
                  systems for vulnerabilities
                </li>
                <li>
                  <strong>Traffic Flooding:</strong> Generating excessive
                  traffic to overwhelm systems
                </li>
                <li>
                  <strong>Proxy/VPN Abuse:</strong> Operating open proxies, VPN
                  servers, or relay services without authorization
                </li>
              </ul>
              <h3>3.6 Data Harvesting and Privacy Violations</h3>
              <ul>
                <li>
                  <strong>Scraping and Harvesting:</strong> Automatically
                  collecting email addresses, personal data, or content from
                  websites without authorization
                </li>
                <li>
                  <strong>Privacy Violations:</strong> Collecting, storing, or
                  processing personal information without proper consent or
                  legal basis
                </li>
                <li>
                  <strong>Data Breaches:</strong> Intentionally accessing,
                  disclosing, or misusing confidential or personal data
                </li>
                <li>
                  <strong>Surveillance and Tracking:</strong> Using services to
                  conduct unauthorized surveillance or track individuals
                </li>
                <li>
                  <strong>GDPR/CCPA Violations:</strong> Processing data in
                  violation of applicable privacy laws
                </li>
              </ul>
              <h3>3.7 System Interference and Abuse</h3>
              <ul>
                <li>
                  <strong>Reverse Engineering:</strong> Reverse engineering,
                  decompiling, or disassembling our proprietary software or
                  systems
                </li>
                <li>
                  <strong>Circumvention:</strong> Bypassing security measures,
                  access controls, rate limits, or usage restrictions
                </li>
                <li>
                  <strong>Service Manipulation:</strong> Manipulating or
                  interfering with the proper functioning of our services
                </li>
                <li>
                  <strong>Unauthorized Monitoring:</strong> Monitoring or
                  intercepting communications or data without authorization
                </li>
                <li>
                  <strong>Benchmark Manipulation:</strong> Publishing benchmark
                  results without prior written approval
                </li>
              </ul>
              <h3>3.8 Unauthorized Resale and Sublicensing</h3>
              <ul>
                <li>
                  <strong>Reselling Services:</strong> Reselling, sublicensing,
                  or redistributing OrenGen services without an authorized
                  reseller agreement
                </li>
                <li>
                  <strong>White-Labeling:</strong> Rebranding or white-labeling
                  services without express written permission
                </li>
                <li>
                  <strong>Service Bureau:</strong> Operating as a service bureau
                  or providing time-sharing access without authorization
                </li>
              </ul>
              <h3>3.9 Deceptive Practices</h3>
              <ul>
                <li>
                  <strong>False Information:</strong> Providing false,
                  inaccurate, or misleading information during registration or
                  use
                </li>
                <li>
                  <strong>Fake Accounts:</strong> Creating multiple accounts to
                  evade restrictions or abuse services
                </li>
                <li>
                  <strong>Click Fraud:</strong> Generating fraudulent clicks,
                  impressions, or conversions
                </li>
                <li>
                  <strong>Review Manipulation:</strong> Creating fake reviews,
                  testimonials, or ratings
                </li>
                <li>
                  <strong>Misleading Marketing:</strong> Using deceptive
                  marketing practices or false advertising
                </li>
              </ul>
              <h3>3.10 Adult and Mature Content</h3>
              <ul>
                <li>
                  <strong>Adult Content:</strong> Hosting, distributing, or
                  promoting pornographic or sexually explicit content (contact
                  us for adult entertainment industry use cases requiring
                  special approval)
                </li>
                <li>
                  <strong>Gambling:</strong> Operating unlicensed gambling
                  services or promoting illegal gambling
                </li>
                <li>
                  <strong>Alcohol and Tobacco:</strong> Marketing alcohol or
                  tobacco products in violation of applicable laws or
                  regulations
                </li>
              </ul>

              <h2>4. Email and Communication Standards</h2>
              <p>
                When using OrenGen&apos;s email infrastructure, AI communication
                systems, or messaging services, you must comply with all
                applicable laws and best practices:
              </p>
              <h3>4.1 CAN-SPAM Act Compliance (United States)</h3>
              <ul>
                <li>
                  <strong>Accurate Headers:</strong> Use accurate
                  &quot;From,&quot; &quot;To,&quot; and routing information
                </li>
                <li>
                  <strong>Clear Subject Lines:</strong> Subject lines must
                  accurately reflect email content
                </li>
                <li>
                  <strong>Identify as Advertisement:</strong> Clearly identify
                  commercial messages as advertisements
                </li>
                <li>
                  <strong>Include Physical Address:</strong> Include your valid
                  physical postal address
                </li>
                <li>
                  <strong>Unsubscribe Mechanism:</strong> Provide a clear and
                  conspicuous unsubscribe method
                </li>
                <li>
                  <strong>Honor Opt-Outs:</strong> Process unsubscribe requests
                  within 10 business days
                </li>
                <li>
                  <strong>Monitor Third Parties:</strong> Ensure your marketing
                  partners and third-party senders comply with CAN-SPAM
                </li>
              </ul>
              <h3>4.2 GDPR Compliance (European Union)</h3>
              <ul>
                <li>
                  Obtain explicit consent before sending marketing emails to EU
                  residents
                </li>
                <li>
                  Provide clear information about data processing in privacy
                  notices
                </li>
                <li>
                  Honor data subject rights (access, deletion, portability,
                  restriction)
                </li>
                <li>
                  Implement appropriate technical and organizational security
                  measures
                </li>
                <li>Report data breaches within 72 hours when required</li>
              </ul>
              <h3>4.3 TCPA Compliance (Telephone Communications)</h3>
              <ul>
                <li>
                  Obtain express written consent before making automated calls
                  or sending automated texts
                </li>
                <li>
                  Maintain Do Not Call lists and honor opt-out requests
                </li>
                <li>
                  Identify your business clearly at the beginning of calls
                </li>
                <li>
                  Respect calling time restrictions (8 AM - 9 PM local time)
                </li>
                <li>Keep records of consent for at least 4 years</li>
              </ul>
              <h3>4.4 Email Best Practices</h3>
              <ul>
                <li>Use confirmed opt-in (double opt-in) for email lists</li>
                <li>Segment lists and send targeted, relevant content</li>
                <li>
                  Maintain clean lists by removing bounces and inactive
                  subscribers
                </li>
                <li>
                  Monitor complaint rates and maintain rates below 0.1%
                </li>
                <li>Use SPF, DKIM, and DMARC authentication</li>
                <li>Avoid spam trigger words and excessive capitalization</li>
                <li>Include a text version alongside HTML emails</li>
              </ul>

              <h2>5. AI and Automation Usage Guidelines</h2>
              <p>
                When using OrenGen&apos;s AI-powered systems, including
                Buy-Lingual&trade; AI-Agents, you must:
              </p>
              <h3>5.1 Responsible AI Use</h3>
              <ul>
                <li>
                  <strong>Transparency:</strong> Disclose when communications
                  are AI-generated or automated when required by law or industry
                  standards
                </li>
                <li>
                  <strong>Accuracy:</strong> Review AI outputs for accuracy
                  before using in critical applications
                </li>
                <li>
                  <strong>Human Oversight:</strong> Maintain appropriate human
                  oversight of AI systems, especially for customer-facing
                  communications
                </li>
                <li>
                  <strong>Bias and Fairness:</strong> Monitor AI systems for
                  bias and discriminatory outcomes
                </li>
                <li>
                  <strong>Privacy:</strong> Ensure AI systems respect user
                  privacy and data protection requirements
                </li>
              </ul>
              <h3>5.2 Prohibited AI Uses</h3>
              <ul>
                <li>
                  Using AI to generate illegal, harmful, or deceptive content
                </li>
                <li>
                  Training AI models on data you do not have rights to use
                </li>
                <li>
                  Deploying AI systems that discriminate against protected
                  classes
                </li>
                <li>
                  Using AI for surveillance, tracking, or monitoring without
                  consent
                </li>
                <li>
                  Creating deepfakes or synthetic media intended to deceive
                </li>
                <li>
                  Automating decisions with significant legal or financial
                  impact without human review
                </li>
              </ul>
              <h3>5.3 Voice AI Specific Requirements</h3>
              <ul>
                <li>
                  Comply with all voice communication regulations (TCPA, TSR)
                </li>
                <li>
                  Clearly identify AI voice agents as automated at the beginning
                  of calls
                </li>
                <li>
                  Provide option to speak with a human representative when
                  requested
                </li>
                <li>
                  Respect Do Not Call registries and opt-out requests
                </li>
                <li>Record calls only with proper consent and disclosure</li>
              </ul>

              <h2>6. Security Obligations</h2>
              <p>
                You are responsible for maintaining the security of your account
                and systems:
              </p>
              <h3>6.1 Account Security</h3>
              <ul>
                <li>
                  <strong>Strong Passwords:</strong> Use strong, unique
                  passwords (minimum 12 characters, mix of uppercase, lowercase,
                  numbers, symbols)
                </li>
                <li>
                  <strong>Multi-Factor Authentication:</strong> Enable MFA when
                  available
                </li>
                <li>
                  <strong>Credential Protection:</strong> Never share account
                  credentials with unauthorized persons
                </li>
                <li>
                  <strong>Monitoring:</strong> Monitor account activity for
                  suspicious behavior
                </li>
                <li>
                  <strong>Prompt Reporting:</strong> Report suspected security
                  breaches immediately
                </li>
              </ul>
              <h3>6.2 Data Security</h3>
              <ul>
                <li>Encrypt sensitive data in transit and at rest</li>
                <li>
                  Implement access controls and principle of least privilege
                </li>
                <li>Regularly backup critical data</li>
                <li>Securely delete data when no longer needed</li>
                <li>
                  Comply with industry security standards (PCI DSS, SOC 2, etc.)
                  when applicable
                </li>
              </ul>
              <h3>6.3 Vulnerability Disclosure</h3>
              <ul>
                <li>
                  Report security vulnerabilities responsibly to{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a>
                </li>
                <li>Do not exploit vulnerabilities for any purpose</li>
                <li>
                  Allow reasonable time for remediation before public disclosure
                </li>
                <li>Do not access data that does not belong to you</li>
              </ul>

              <h2>7. Monitoring and Enforcement</h2>
              <h3>7.1 Our Monitoring Rights</h3>
              <p>OrenGen reserves the right to:</p>
              <ul>
                <li>Monitor usage of services for compliance with this AUP</li>
                <li>Investigate suspected violations</li>
                <li>
                  Access your account and content if reasonably necessary to
                  enforce this AUP
                </li>
                <li>
                  Implement automated systems to detect prohibited activities
                </li>
                <li>
                  Cooperate with law enforcement and regulatory authorities
                </li>
              </ul>
              <p>
                <strong>Note:</strong> We do not routinely monitor user content,
                but we may do so if abuse is reported or suspected.
              </p>
              <h3>7.2 Actions We May Take</h3>
              <p>
                If you violate this AUP, we may take one or more of the following
                actions:
              </p>
              <ul>
                <li>
                  <strong>Warning:</strong> Issue a written warning requiring
                  immediate compliance
                </li>
                <li>
                  <strong>Suspension:</strong> Temporarily suspend your account
                  or services
                </li>
                <li>
                  <strong>Content Removal:</strong> Remove or disable access to
                  violating content
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Restrict sending limits, API
                  calls, or resource usage
                </li>
                <li>
                  <strong>Termination:</strong> Immediately terminate your
                  account and services without refund
                </li>
                <li>
                  <strong>Legal Action:</strong> Pursue civil or criminal legal
                  action
                </li>
                <li>
                  <strong>Reporting:</strong> Report violations to law
                  enforcement, regulatory authorities, or affected parties
                </li>
                <li>
                  <strong>Blacklisting:</strong> Add your email addresses, IP
                  addresses, or domains to blacklists
                </li>
              </ul>
              <h3>7.3 No Liability for Enforcement Actions</h3>
              <p>
                OrenGen is not liable for any damages, losses, or consequences
                resulting from enforcement actions taken in good faith to
                address AUP violations. You remain responsible for any damages
                caused by your violations.
              </p>

              <h2>8. Reporting Violations</h2>
              <p>
                If you become aware of any violation of this AUP by another
                OrenGen user, please report it immediately.
              </p>
              <h3>8.1 How to Report</h3>
              <p>
                Email{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a> with
                subject line &quot;AUP Violation Report&quot; and include:
              </p>
              <ul>
                <li>Description of the violation</li>
                <li>Evidence (screenshots, email headers, URLs, etc.)</li>
                <li>Date and time of the violation</li>
                <li>Any other relevant information</li>
              </ul>
              <h3>8.2 Abuse Contact</h3>
              <p>
                For urgent abuse reports (spam, phishing, malware, illegal
                content), contact:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a>
                </li>
                <li>
                  <strong>Subject:</strong> &quot;URGENT: Abuse Report&quot;
                </li>
              </ul>
              <p>
                We will investigate all reported violations and take appropriate
                action.
              </p>

              <h2>9. Consequences of Violations</h2>
              <h3>9.1 Immediate Consequences</h3>
              <ul>
                <li>
                  Suspension or termination of services without notice or refund
                </li>
                <li>
                  Loss of data or content (we may delete violating content)
                </li>
                <li>Inability to use OrenGen services in the future</li>
                <li>
                  Damage to sender reputation and email deliverability
                </li>
              </ul>
              <h3>9.2 Legal Consequences</h3>
              <ul>
                <li>
                  <strong>Civil Liability:</strong> Lawsuits for damages,
                  injunctions, and legal costs
                </li>
                <li>
                  <strong>Statutory Damages:</strong> Under CAN-SPAM, up to
                  $46,517 per violation; under TCPA, up to $1,500 per violation
                </li>
                <li>
                  <strong>Criminal Penalties:</strong> Fines and imprisonment
                  for serious violations (fraud, child exploitation, hacking)
                </li>
                <li>
                  <strong>Regulatory Action:</strong> FTC, FCC, or other
                  regulatory enforcement actions
                </li>
              </ul>
              <h3>9.3 Third-Party Consequences</h3>
              <ul>
                <li>
                  Blacklisting by ISPs, email providers, and anti-spam
                  organizations
                </li>
                <li>Reputation damage to your business and brand</li>
                <li>Loss of customer trust and business relationships</li>
                <li>Difficulty obtaining services from other providers</li>
              </ul>

              <h2>10. Updates to This Policy</h2>
              <p>
                OrenGen may update this Acceptable Use Policy at any time to
                reflect changes in laws, regulations, technology, or our
                services.
              </p>
              <h3>10.1 Notification of Changes</h3>
              <ul>
                <li>
                  The &quot;Effective Date&quot; at the top of this page will be
                  updated
                </li>
                <li>
                  Material changes will be communicated via email or website
                  notice
                </li>
                <li>
                  Continued use of services after changes constitutes acceptance
                </li>
              </ul>
              <h3>10.2 Your Responsibility</h3>
              <p>
                You are responsible for regularly reviewing this AUP to ensure
                ongoing compliance. Ignorance of policy changes is not a valid
                defense against enforcement actions.
              </p>

              <h3>&#9888;&#65039; Zero Tolerance Violations</h3>
              <p>
                <strong>
                  The following violations result in immediate account
                  termination and law enforcement notification:
                </strong>
              </p>
              <ul>
                <li>
                  Child sexual abuse material (CSAM) or child exploitation
                </li>
                <li>Human trafficking or modern slavery</li>
                <li>Terrorism or violent extremism</li>
                <li>Distribution of malware or ransomware</li>
                <li>Large-scale fraud or financial crimes</li>
              </ul>
              <p>
                <strong>
                  We have zero tolerance for these activities and will fully
                  cooperate with law enforcement agencies.
                </strong>
              </p>

              <h3>Questions or Abuse Reports</h3>
              <p>
                For questions about this Acceptable Use Policy or to report
                violations:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Subject Line:</strong> &quot;AUP Inquiry&quot; or
                &quot;AUP Violation Report&quot;
                <br />
                <strong>Mail:</strong> OrenGen Worldwide LLC
                <br />
                1812 Open Range Drive
                <br />
                Mansfield, Texas 76063
              </p>
              <p>
                <strong>Urgent Abuse Reports:</strong> Use subject line
                &quot;URGENT: Abuse Report&quot; for immediate attention.
              </p>
              <p>
                <strong>Your Commitment:</strong> By using OrenGen services, you
                commit to using them responsibly, legally, and ethically. We
                rely on our users to maintain a safe, secure, and trustworthy
                environment for everyone. Thank you for your cooperation.
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
                <h2>Have a question about this Acceptable Use Policy?</h2>
                <p>
                  Reach the OrenGen team directly. We respond to acceptable use
                  policy inquiries within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=acceptable-use"
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
