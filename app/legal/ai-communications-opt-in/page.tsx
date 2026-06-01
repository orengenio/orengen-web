import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * AI-Communications Opt-In (legal/policy document).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/ai-communications-opt-in/page.html — only presentation/layout
 * changed.
 */
export const metadata: Metadata = {
  title: "AI-Communications Opt-In",
  description:
    "Your express consent for automated and AI-powered communications across all channels.",
  keywords:
    "ai-communications-opt-in, OrenGen, OrenGen Worldwide, AI infrastructure, ai communications opt-in",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: { canonical: "/legal/ai-communications-opt-in" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/legal/ai-communications-opt-in",
    title: "AI-Communications Opt-In",
    description:
      "Your express consent for automated and AI-powered communications across all channels.",
    images:
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
  },
};

export default function AiCommunicationsOptInPage() {
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
            aria-label="AI Communications Opt-In"
          >
            <div className="container">
              <header className="section-head reveal">
                <div className="eyebrow">AI Communications Opt-In</div>
                <h1>AI-Communications Opt-In</h1>
                <p className="lead">
                  Your express consent for automated and AI-powered
                  communications across all channels.
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
                Your express consent for automated and AI-powered communications
                across all channels.
              </p>
              <p>Effective Date: January 1, 2026</p>
              <h3>
                &#9888;&#65039; IMPORTANT: Express Written Consent
              </h3>
              <p>
                <strong>
                  By providing your contact information to OrenGen Worldwide LLC
                  and/or engaging with our services, you expressly consent to
                  receive automated communications powered by artificial
                  intelligence (AI) across ALL communication channels, including
                  but not limited to voice calls, text messages (SMS/MMS),
                  emails, and in-platform messaging.
                </strong>
              </p>
              <p>
                This consent is comprehensive and covers all forms of AI-driven
                outreach, including marketing, transactional, informational, and
                customer service communications.
              </p>

              <h2>1. Scope of Your Consent</h2>
              <p>
                By opting in to AI-communications with OrenGen Worldwide LLC, you
                provide your <strong>express written consent</strong> to be
                contacted via the following methods using{" "}
                <strong>
                  automated technology, artificial intelligence systems,
                  pre-recorded messages, and/or automatic telephone dialing
                  systems (ATDS)
                </strong>
                :
              </p>
              <h3>1.1 Communication Channels Covered</h3>
              <ul>
                <li>
                  <strong>Voice Calls:</strong> Automated phone calls using
                  AI-powered voice agents, pre-recorded messages, or live agents
                  assisted by AI technology to your provided telephone number(s),
                  including mobile phones and landlines
                </li>
                <li>
                  <strong>Text Messages (SMS/MMS):</strong> Automated text
                  messages, multimedia messages, and conversational AI chatbot
                  responses sent to your mobile phone number
                </li>
                <li>
                  <strong>Email Communications:</strong> Automated emails
                  generated, personalized, or optimized by AI systems sent to
                  your provided email address(es)
                </li>
                <li>
                  <strong>In-Platform Messaging:</strong> Automated messages,
                  notifications, and AI chatbot interactions within OrenGen&apos;s
                  platforms, applications, and services
                </li>
                <li>
                  <strong>Social Media and Third-Party Platforms:</strong>{" "}
                  AI-powered messages through social media platforms, messaging
                  apps, or integrated communication tools where you have
                  connected your account
                </li>
                <li>
                  <strong>Push Notifications:</strong> Automated push
                  notifications to your mobile devices or web browsers
                </li>
                <li>
                  <strong>Video Messages:</strong> AI-generated or AI-enhanced
                  video messages sent via email, SMS, or other channels
                </li>
              </ul>
              <h3>1.2 Types of Communications</h3>
              <p>
                Your consent covers AI-powered communications for{" "}
                <strong>all purposes</strong>, including but not limited to:
              </p>
              <ul>
                <li>
                  <strong>Marketing and Promotional Messages:</strong> Product
                  announcements, service offerings, promotional campaigns,
                  special offers, newsletters, and advertising content
                </li>
                <li>
                  <strong>Transactional Messages:</strong> Order confirmations,
                  payment receipts, billing statements, subscription renewals,
                  and account-related updates
                </li>
                <li>
                  <strong>Informational Messages:</strong> Service updates,
                  platform changes, feature announcements, educational content,
                  and industry news
                </li>
                <li>
                  <strong>Customer Service and Support:</strong> Technical
                  support, troubleshooting assistance, onboarding guidance,
                  training, and account management communications
                </li>
                <li>
                  <strong>Appointment and Event Reminders:</strong> Scheduled
                  meetings, webinar notifications, event invitations, and
                  calendar reminders
                </li>
                <li>
                  <strong>Surveys and Feedback Requests:</strong> Customer
                  satisfaction surveys, product feedback requests, and market
                  research inquiries
                </li>
                <li>
                  <strong>Re-engagement and Follow-up:</strong> Abandoned cart
                  reminders, trial expiration notices, inactive account
                  notifications, and win-back campaigns
                </li>
                <li>
                  <strong>Lead Nurturing:</strong> Educational drip campaigns,
                  product demonstrations, case studies, and sales outreach
                </li>
              </ul>
              <h3>1.3 Frequency and Timing</h3>
              <p>You acknowledge and consent to receiving communications:</p>
              <ul>
                <li>
                  At any frequency determined by OrenGen based on service needs,
                  campaign schedules, or automated workflows
                </li>
                <li>
                  At any time of day, including evenings and weekends (we make
                  reasonable efforts to respect standard business hours but
                  automated systems may operate 24/7)
                </li>
                <li>
                  Through AI systems that may initiate contact automatically
                  based on triggers, behaviors, or scheduled sequences
                </li>
              </ul>

              <h2>2. AI Technology Disclosure</h2>
              <p>
                OrenGen utilizes advanced artificial intelligence and automation
                technology to deliver efficient, personalized, and scalable
                communication services. You understand and consent that:
              </p>
              <h3>2.1 Nature of AI Communications</h3>
              <ul>
                <li>
                  <strong>Automated Systems:</strong> Communications may be
                  generated, sent, and managed entirely by automated systems
                  without human intervention
                </li>
                <li>
                  <strong>AI Voice Agents:</strong> Phone calls may be conducted
                  by AI-powered voice assistants that can hold natural
                  conversations, answer questions, and complete transactions
                </li>
                <li>
                  <strong>Natural Language Processing:</strong> AI systems may
                  analyze your responses and adapt communications accordingly
                </li>
                <li>
                  <strong>Predictive Personalization:</strong> AI may use data
                  analytics to personalize message content, timing, and delivery
                  method
                </li>
                <li>
                  <strong>Machine Learning:</strong> AI systems continuously
                  learn from interactions to improve communication effectiveness
                </li>
              </ul>
              <h3>2.2 Human vs. AI Interactions</h3>
              <p>You acknowledge that:</p>
              <ul>
                <li>
                  Some communications may appear to come from a person but are
                  generated or assisted by AI
                </li>
                <li>
                  AI voice agents may sound human-like but are automated systems
                </li>
                <li>
                  You may request to speak with a human representative during AI
                  voice interactions when available
                </li>
                <li>
                  Certain communications may be reviewed or supplemented by human
                  team members
                </li>
              </ul>
              <h3>2.3 Recording and Monitoring</h3>
              <p>
                <strong>
                  You expressly consent to the recording, monitoring, and
                  analysis of all AI-powered communications for purposes
                  including but not limited to:
                </strong>
              </p>
              <ul>
                <li>Quality assurance and service improvement</li>
                <li>AI training and model optimization</li>
                <li>Compliance verification and legal protection</li>
                <li>Customer service enhancement</li>
                <li>Analytics and performance measurement</li>
              </ul>

              <h2>3. Automatic Opt-In Triggers</h2>
              <p>
                <strong>
                  Your consent is automatically granted and becomes effective
                  when you engage in ANY of the following actions:
                </strong>
              </p>
              <h3>3.1 Account and Service Actions</h3>
              <ul>
                <li>Creating an account on any OrenGen platform or service</li>
                <li>
                  Purchasing or subscribing to any OrenGen product or service
                </li>
                <li>Submitting a contact form, inquiry, or demo request</li>
                <li>
                  Downloading content, resources, or materials from OrenGen
                </li>
                <li>Registering for webinars, events, or training sessions</li>
                <li>
                  Starting a free trial or requesting a product demonstration
                </li>
                <li>Activating or using any OrenGen service or feature</li>
              </ul>
              <h3>3.2 Communication Initiation</h3>
              <ul>
                <li>
                  Providing your phone number, email address, or other contact
                  information to OrenGen through any channel
                </li>
                <li>
                  Calling, texting, or emailing OrenGen or any of our
                  representatives
                </li>
                <li>
                  Interacting with OrenGen&apos;s AI chatbots, voice agents, or
                  automated systems
                </li>
                <li>
                  Responding to any communication from OrenGen (reply = consent
                  to continue)
                </li>
                <li>
                  Clicking links or engaging with content in OrenGen emails or
                  messages
                </li>
              </ul>
              <h3>3.3 Business Relationship Actions</h3>
              <ul>
                <li>
                  Entering into a contract, agreement, or business relationship
                  with OrenGen
                </li>
                <li>
                  Being referred by an existing OrenGen client, partner, or
                  affiliate
                </li>
                <li>
                  Providing business card or contact information at events,
                  tradeshows, or meetings
                </li>
                <li>
                  Having prior business relationship with OrenGen or authorized
                  representatives
                </li>
              </ul>
              <h3>3.4 Consent Duration</h3>
              <p>
                <strong>Your consent remains in effect:</strong>
              </p>
              <ul>
                <li>
                  For the duration of your business relationship with OrenGen
                </li>
                <li>
                  For 18 months following your last interaction with OrenGen
                  services (for marketing purposes)
                </li>
                <li>
                  Indefinitely for transactional and service-related
                  communications unless you close your account
                </li>
                <li>
                  Until you explicitly revoke consent using the opt-out methods
                  described in Section 6
                </li>
              </ul>

              <h2>4. Legal Compliance and Your Rights</h2>
              <h3>4.1 TCPA Compliance (Telephone Consumer Protection Act)</h3>
              <p>
                This consent satisfies requirements under the Telephone Consumer
                Protection Act (TCPA) and related federal and state regulations.
                You acknowledge that:
              </p>
              <ul>
                <li>
                  Consent is not a condition of purchasing goods or services
                  (except where service specifically requires communication
                  access)
                </li>
                <li>
                  You may revoke consent at any time using the opt-out methods
                  provided
                </li>
                <li>
                  Standard message and data rates may apply to SMS/MMS
                  communications
                </li>
                <li>
                  Communications may be sent using an automatic telephone dialing
                  system (ATDS) or pre-recorded/artificial voice
                </li>
              </ul>
              <h3>4.2 CAN-SPAM Act Compliance</h3>
              <p>
                All email communications comply with the CAN-SPAM Act and
                include:
              </p>
              <ul>
                <li>
                  Clear identification of the sender (OrenGen Worldwide LLC)
                </li>
                <li>Accurate subject lines that reflect message content</li>
                <li>
                  Our physical postal address: 1812 Open Range Drive, Mansfield,
                  Texas 76063
                </li>
                <li>
                  Clear and conspicuous unsubscribe mechanism in every email
                </li>
                <li>Processing of opt-out requests within 10 business days</li>
              </ul>
              <h3>4.3 State-Specific Regulations</h3>
              <p>
                We comply with state-specific telemarketing and communication
                laws, including but not limited to:
              </p>
              <ul>
                <li>California Consumer Privacy Act (CCPA/CPRA)</li>
                <li>Florida Telephone Solicitation Act (FTSA)</li>
                <li>Texas telemarketing regulations</li>
                <li>Other applicable state consumer protection laws</li>
              </ul>
              <h3>4.4 International Compliance</h3>
              <p>For users outside the United States, we comply with:</p>
              <ul>
                <li>
                  GDPR (General Data Protection Regulation) for EEA residents
                </li>
                <li>
                  CASL (Canada&apos;s Anti-Spam Legislation) for Canadian
                  recipients
                </li>
                <li>
                  Other applicable international communication and privacy laws
                </li>
              </ul>

              <h2>5. Data Usage and Privacy Protection</h2>
              <h3>5.1 Information Collected</h3>
              <p>Through AI-communications, we may collect and process:</p>
              <ul>
                <li>Contact information (phone numbers, email addresses, names)</li>
                <li>Communication preferences and interaction history</li>
                <li>Voice recordings and transcripts from AI voice interactions</li>
                <li>Text message conversations and response data</li>
                <li>Email engagement metrics (opens, clicks, responses)</li>
                <li>
                  Behavioral data (timing, frequency, channel preferences)
                </li>
                <li>
                  Sentiment analysis and intent recognition from AI interactions
                </li>
              </ul>
              <h3>5.2 How We Use This Data</h3>
              <ul>
                <li>Deliver requested services and communications</li>
                <li>Train and improve AI models for better performance</li>
                <li>Personalize content and optimize delivery timing</li>
                <li>Analyze communication effectiveness and ROI</li>
                <li>Ensure compliance and maintain quality standards</li>
                <li>Provide customer support and address issues</li>
              </ul>
              <h3>5.3 Data Protection</h3>
              <p>
                Your communication data is protected in accordance with our{" "}
                <a href="/legal/privacy-policy">Privacy Policy</a> and
                industry-standard security measures including encryption, access
                controls, and secure storage.
              </p>
              <h3>5.4 Third-Party Service Providers</h3>
              <p>
                We may use third-party platforms and service providers to deliver
                AI-communications, including:
              </p>
              <ul>
                <li>AI voice platform providers</li>
                <li>SMS/MMS gateway services</li>
                <li>Email delivery services</li>
                <li>CRM and marketing automation platforms</li>
                <li>Analytics and tracking services</li>
              </ul>
              <p>
                All service providers are contractually obligated to protect your
                data and use it only for authorized purposes.
              </p>

              <h2>6. How to Opt-Out and Revoke Consent</h2>
              <p>
                You have the right to opt-out of AI-communications at any time.
                Your opt-out rights vary by communication channel:
              </p>
              <h3>6.1 Text Message (SMS/MMS) Opt-Out</h3>
              <ul>
                <li>
                  <strong>Reply &quot;STOP&quot;:</strong> Text the word
                  &quot;STOP,&quot; &quot;UNSUBSCRIBE,&quot; &quot;END,&quot; or
                  &quot;QUIT&quot; to any OrenGen text message
                </li>
                <li>
                  You will receive a confirmation message that you have been
                  unsubscribed
                </li>
                <li>
                  You may continue to receive transactional messages related to
                  active services
                </li>
                <li>To opt back in, text &quot;START&quot; or &quot;UNSTOP&quot;</li>
              </ul>
              <h3>6.2 Email Opt-Out</h3>
              <ul>
                <li>
                  <strong>Unsubscribe Link:</strong> Click the
                  &quot;Unsubscribe&quot; link at the bottom of any marketing
                  email
                </li>
                <li>
                  <strong>Email Request:</strong> Send an email to{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a> with
                  &quot;Unsubscribe&quot; in the subject line
                </li>
                <li>Marketing emails will cease within 10 business days</li>
                <li>
                  Transactional and account-related emails will continue as
                  necessary for service delivery
                </li>
              </ul>
              <h3>6.3 Voice Call Opt-Out</h3>
              <ul>
                <li>
                  <strong>During Call:</strong> Request to be removed from the
                  calling list when speaking with an AI agent
                </li>
                <li>
                  <strong>Written Request:</strong> Email{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a> with
                  &quot;Do Not Call&quot; in the subject line, including your
                  phone number
                </li>
                <li>
                  Provide your phone number exactly as it appears on caller ID
                </li>
                <li>Opt-out processing takes up to 30 days</li>
              </ul>
              <h3>6.4 Complete Opt-Out</h3>
              <p>
                To opt-out of <strong>ALL</strong> AI-communications across all
                channels:
              </p>
              <ul>
                <li>
                  Email{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a> with
                  subject: &quot;Complete AI-Communications Opt-Out&quot;
                </li>
                <li>
                  Include your name, email address, phone number, and account
                  information
                </li>
                <li>
                  Specify &quot;Opt-out of all AI-powered marketing and
                  promotional communications&quot;
                </li>
                <li>You will receive confirmation within 5 business days</li>
              </ul>
              <h3>6.5 Limitations on Opt-Out</h3>
              <p>
                <strong>Please note:</strong> Even after opting out, you may still
                receive:
              </p>
              <ul>
                <li>
                  <strong>Transactional Communications:</strong> Order
                  confirmations, payment receipts, account alerts, security
                  notifications
                </li>
                <li>
                  <strong>Service-Critical Messages:</strong> System updates,
                  downtime notifications, urgent account issues
                </li>
                <li>
                  <strong>Legal or Compliance Communications:</strong> Policy
                  updates, terms changes, regulatory notices
                </li>
                <li>
                  <strong>Previously Scheduled Communications:</strong> Messages
                  already queued may still be delivered during the opt-out
                  processing period
                </li>
              </ul>
              <p>
                To completely cease all communications, you must close your
                account and terminate services.
              </p>

              <h2>7. Carrier Liability and Message/Data Costs</h2>
              <h3>7.1 Your Responsibility for Costs</h3>
              <ul>
                <li>
                  <strong>Message and Data Rates Apply:</strong> You are
                  responsible for all charges imposed by your mobile carrier or
                  telecommunications provider
                </li>
                <li>
                  Standard voice call, text message (SMS/MMS), and data usage
                  charges may apply based on your carrier&apos;s plan
                </li>
                <li>
                  Contact your carrier for rate information and to verify your
                  plan supports automated communications
                </li>
              </ul>
              <h3>7.2 Carrier Limitations</h3>
              <ul>
                <li>
                  Some carriers may block, filter, or delay automated messages
                </li>
                <li>
                  Delivery is not guaranteed and may vary by carrier, location,
                  and network conditions
                </li>
                <li>
                  OrenGen is not responsible for messages undelivered due to
                  carrier limitations or technical issues
                </li>
              </ul>
              <h3>7.3 Supported Carriers</h3>
              <p>
                Our AI-communications are compatible with major U.S. and
                international carriers. If you experience delivery issues, contact{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>.
              </p>

              <h2>8. Modifications to This Consent Agreement</h2>
              <p>
                OrenGen may update this AI-Communications Opt-In agreement from
                time to time to reflect changes in technology, legal
                requirements, or business practices.
              </p>
              <h3>8.1 Notification of Changes</h3>
              <ul>
                <li>
                  Material changes will be communicated via email or prominent
                  website notice
                </li>
                <li>
                  The &quot;Effective Date&quot; at the top of this page indicates
                  the last revision
                </li>
                <li>
                  Continued engagement with OrenGen services after changes
                  constitutes acceptance
                </li>
              </ul>
              <h3>8.2 Reaffirmation of Consent</h3>
              <p>
                For significant changes expanding the scope of communications, we
                may request you reaffirm your consent.
              </p>

              <h2>9. Dispute Resolution and Governing Law</h2>
              <p>
                Any disputes arising from this AI-Communications Opt-In are
                governed by the laws of the State of Texas and subject to the
                dispute resolution provisions in our{" "}
                <a href="/legal/terms">Terms and Conditions</a>.
              </p>
              <p>
                By consenting to AI-communications, you waive any right to
                participate in class action lawsuits related to communications
                sent in accordance with this consent.
              </p>
              <h3>Questions or Opt-Out Requests</h3>
              <p>
                For questions about AI-communications, to modify your
                preferences, or to opt-out:
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Phone:</strong> Automated opt-out available during AI
                voice calls
                <br />
                <strong>Text:</strong> Reply &quot;STOP&quot; to any text message
                <br />
                <strong>Mail:</strong> OrenGen Worldwide LLC
                <br />
                1812 Open Range Drive
                <br />
                Mansfield, Texas 76063
              </p>
              <p>
                <strong>Subject Line for Emails:</strong>{" "}
                &quot;AI-Communications Opt-Out&quot; or &quot;Communication
                Preferences&quot;
              </p>
              <p>
                <strong>Thank You for Your Consent:</strong> Your consent enables
                us to provide efficient, personalized, and intelligent
                communication services powered by cutting-edge AI technology. You
                maintain full control over your communication preferences and can
                opt-out at any time using the methods described above.
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
                <h2>
                  Have a question about this AI Communications Opt-In?
                </h2>
                <p>
                  Reach the OrenGen team directly. We respond to ai
                  communications opt-in inquiries within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=ai-communications-opt-in"
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
