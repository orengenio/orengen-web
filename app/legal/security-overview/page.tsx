import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SiteRuntime from "@/components/site/SiteRuntime";
import ScrollProgress from "@/components/site/ScrollProgress";

/**
 * Security Overview (legal/policy document).
 * Re-skinned into the homepage brand system (shared shell + globals.css brand
 * classes). Wording is preserved verbatim from
 * Footer-pages/security-overview/page.html — only presentation/layout changed.
 */
export const metadata: Metadata = {
  title: "Security Overview",
  description:
    "How OrenGen protects your data with enterprise-grade security standards.",
  keywords:
    "security-overview, OrenGen, OrenGen Worldwide, AI infrastructure, security overview",
  alternates: { canonical: "/legal/security-overview" },
  openGraph: {
    type: "website",
    url: "https://orengen.io/legal/security-overview",
    title: "Security Overview",
    description:
      "How OrenGen protects your data with enterprise-grade security standards.",
    images:
      "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png",
  },
  twitter: { card: "summary_large_image" },
};

export default function SecurityOverviewPage() {
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
            aria-label="Security Overview"
          >
            <div className="container">
              <header className="section-head center reveal">
                <div className="eyebrow">Security Overview</div>
                <h1>Security Overview</h1>
                <p className="lead">
                  How OrenGen protects your data with enterprise-grade security
                  standards.
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
                Enterprise-grade security protecting your data, AI systems, and
                business operations.
              </p>
              <p>Last Updated: January 1, 2026</p>
              <p>
                <strong>Security First:</strong> At OrenGen Worldwide LLC,
                security is not an afterthought&mdash;it&apos;s foundational to
                everything we build. Our comprehensive security framework
                protects your data, AI systems, and business operations with
                enterprise-grade controls, continuous monitoring, and
                industry-leading best practices.
              </p>

              <h2>1. Our Security Commitment</h2>
              <p>
                OrenGen is committed to maintaining the highest standards of
                security, privacy, and compliance. We protect your sensitive
                information through multiple layers of defense, rigorous
                testing, and continuous monitoring.
              </p>
              <h3>1.1 Security Principles</h3>
              <ul>
                <li>
                  <strong>Defense in Depth:</strong> Multiple overlapping
                  security controls to protect against threats
                </li>
                <li>
                  <strong>Zero Trust Architecture:</strong> Never trust, always
                  verify&mdash;every request is authenticated and authorized
                </li>
                <li>
                  <strong>Least Privilege Access:</strong> Users and systems
                  only have access to what they absolutely need
                </li>
                <li>
                  <strong>Continuous Monitoring:</strong> 24/7/365 security
                  monitoring and threat detection
                </li>
                <li>
                  <strong>Security by Design:</strong> Security built into every
                  product from the ground up, not bolted on later
                </li>
                <li>
                  <strong>Transparency:</strong> Clear communication about
                  security practices and incidents
                </li>
              </ul>
              <h3>1.2 Security Certifications &amp; Compliance</h3>
              <p>
                <em>
                  Additional certifications (SOC 2, ISO 27001, HIPAA BAA)
                  available for enterprise clients upon request.
                </em>
              </p>

              <h2>2. Infrastructure Security</h2>
              <h3>2.1 Cloud Infrastructure</h3>
              <p>
                OrenGen leverages world-class cloud infrastructure providers
                with industry-leading security:
              </p>
              <ul>
                <li>
                  <strong>Cloud Providers:</strong> Amazon Web Services (AWS),
                  Google Cloud Platform, Cloudflare
                </li>
                <li>
                  <strong>Data Centers:</strong> SOC 2, ISO 27001, and PCI DSS
                  certified facilities with physical security controls
                </li>
                <li>
                  <strong>Geographic Redundancy:</strong> Multi-region
                  architecture for high availability and disaster recovery
                </li>
                <li>
                  <strong>Network Isolation:</strong> Virtual Private Clouds
                  (VPCs) with strict network segmentation
                </li>
              </ul>
              <h3>2.2 Encryption</h3>
              <ul>
                <li>
                  <strong>Data in Transit:</strong> TLS 1.3 encryption for all
                  data transmitted over networks
                </li>
                <li>
                  <strong>Data at Rest:</strong> AES-256 encryption for all
                  stored data, including databases, backups, and file storage
                </li>
                <li>
                  <strong>End-to-End Encryption:</strong> Available for sensitive
                  communications and data transfers
                </li>
                <li>
                  <strong>Key Management:</strong> Hardware Security Modules
                  (HSMs) and AWS KMS for secure key storage and rotation
                </li>
              </ul>
              <h3>2.3 Network Security</h3>
              <ul>
                <li>
                  <strong>Firewalls:</strong> Next-generation firewalls with
                  intrusion prevention systems (IPS)
                </li>
                <li>
                  <strong>DDoS Protection:</strong> Cloudflare and AWS Shield
                  Advanced for distributed denial-of-service mitigation
                </li>
                <li>
                  <strong>Web Application Firewall (WAF):</strong> Protection
                  against SQL injection, XSS, and OWASP Top 10 vulnerabilities
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Automated throttling to prevent
                  abuse and resource exhaustion
                </li>
                <li>
                  <strong>IP Whitelisting:</strong> Restrict access to sensitive
                  systems by IP address or geographic region
                </li>
              </ul>
              <h3>2.4 Backup &amp; Disaster Recovery</h3>
              <ul>
                <li>
                  <strong>Automated Backups:</strong> Daily encrypted backups
                  with point-in-time recovery
                </li>
                <li>
                  <strong>Geographic Replication:</strong> Backups stored across
                  multiple geographic regions
                </li>
                <li>
                  <strong>Recovery Time Objective (RTO):</strong> 4 hours for
                  critical systems
                </li>
                <li>
                  <strong>Recovery Point Objective (RPO):</strong> 1 hour maximum
                  data loss for critical systems
                </li>
                <li>
                  <strong>Disaster Recovery Testing:</strong> Quarterly disaster
                  recovery drills and validation
                </li>
              </ul>

              <h2>3. AI &amp; Machine Learning Security</h2>
              <p>
                OrenGen&apos;s AI-powered systems, including Buy-Lingual&trade;
                AI-Agents, employ specialized security measures to protect
                against AI-specific threats:
              </p>
              <h3>3.1 Prompt Injection Prevention</h3>
              <ul>
                <li>
                  <strong>Input Sanitization:</strong> All user inputs are
                  sanitized and validated before processing by AI models
                </li>
                <li>
                  <strong>Prompt Filtering:</strong> Automated detection and
                  blocking of malicious prompt patterns and injection attempts
                </li>
                <li>
                  <strong>Context Isolation:</strong> Strict boundaries between
                  user contexts to prevent cross-contamination
                </li>
                <li>
                  <strong>Instruction Hardening:</strong> System prompts protected
                  against manipulation and override attempts
                </li>
                <li>
                  <strong>Output Validation:</strong> AI responses screened for
                  potential data leakage or harmful content
                </li>
              </ul>
              <h3>3.2 AI Model Security</h3>
              <ul>
                <li>
                  <strong>Model Access Control:</strong> Strict authentication
                  and authorization for model access
                </li>
                <li>
                  <strong>Model Versioning:</strong> Version control and rollback
                  capabilities for AI models
                </li>
                <li>
                  <strong>Adversarial Testing:</strong> Regular testing against
                  adversarial attacks and model exploitation
                </li>
                <li>
                  <strong>Model Monitoring:</strong> Real-time monitoring for
                  anomalous behavior and performance degradation
                </li>
                <li>
                  <strong>Secure Model Storage:</strong> Encrypted storage of
                  model weights and parameters
                </li>
              </ul>
              <h3>3.3 Training Data Protection</h3>
              <ul>
                <li>
                  <strong>Data Isolation:</strong> Client data strictly isolated
                  during training and inference
                </li>
                <li>
                  <strong>No Data Sharing:</strong> Your data is never used to
                  train models for other customers
                </li>
                <li>
                  <strong>Data Anonymization:</strong> Personally identifiable
                  information (PII) removed from training datasets
                </li>
                <li>
                  <strong>Consent-Based Training:</strong> Explicit consent
                  required before using customer data for model improvement
                </li>
                <li>
                  <strong>Data Retention Limits:</strong> Training data retained
                  only as long as necessary, then securely deleted
                </li>
              </ul>
              <h3>3.4 AI Output Security</h3>
              <ul>
                <li>
                  <strong>Content Filtering:</strong> AI outputs filtered for
                  harmful, offensive, or inappropriate content
                </li>
                <li>
                  <strong>PII Detection:</strong> Automated scanning for
                  accidental exposure of personal information
                </li>
                <li>
                  <strong>Hallucination Detection:</strong> Monitoring for
                  AI-generated false or misleading information
                </li>
                <li>
                  <strong>Bias Monitoring:</strong> Continuous evaluation for
                  discriminatory or biased outputs
                </li>
                <li>
                  <strong>Human Review:</strong> Critical outputs reviewed by
                  human operators when appropriate
                </li>
              </ul>
              <h3>3.5 Voice AI Security</h3>
              <ul>
                <li>
                  <strong>Call Recording Protection:</strong> Encrypted storage
                  of voice recordings with strict access controls
                </li>
                <li>
                  <strong>Voice Biometrics:</strong> Optional voice
                  authentication for enhanced security
                </li>
                <li>
                  <strong>Conversation Monitoring:</strong> Real-time monitoring
                  for security threats and compliance violations
                </li>
                <li>
                  <strong>Audio Redaction:</strong> Automatic removal of
                  sensitive information from call recordings
                </li>
                <li>
                  <strong>Consent Management:</strong> Compliance with call
                  recording and consent regulations (TCPA, GDPR)
                </li>
              </ul>

              <h2>4. Application Security</h2>
              <h3>4.1 Secure Development Lifecycle</h3>
              <ul>
                <li>
                  <strong>Security by Design:</strong> Security requirements
                  defined during initial design phase
                </li>
                <li>
                  <strong>Code Reviews:</strong> Peer review of all code changes
                  with security focus
                </li>
                <li>
                  <strong>Static Analysis:</strong> Automated scanning for
                  vulnerabilities in source code
                </li>
                <li>
                  <strong>Dependency Scanning:</strong> Continuous monitoring of
                  third-party libraries for known vulnerabilities
                </li>
                <li>
                  <strong>Security Testing:</strong> Penetration testing and
                  vulnerability assessments before production deployment
                </li>
              </ul>
              <h3>4.2 Vulnerability Management</h3>
              <ul>
                <li>
                  <strong>Vulnerability Scanning:</strong> Weekly automated scans
                  of all systems and applications
                </li>
                <li>
                  <strong>Patch Management:</strong> Critical security patches
                  applied within 24 hours of release
                </li>
                <li>
                  <strong>Bug Bounty Program:</strong> Responsible disclosure
                  program rewarding security researchers
                </li>
                <li>
                  <strong>Security Advisories:</strong> Transparent communication
                  of security issues to affected customers
                </li>
              </ul>
              <h3>4.3 API Security</h3>
              <ul>
                <li>
                  <strong>API Authentication:</strong> OAuth 2.0, JWT tokens, and
                  API keys with expiration
                </li>
                <li>
                  <strong>Rate Limiting:</strong> Per-endpoint rate limits to
                  prevent abuse
                </li>
                <li>
                  <strong>Input Validation:</strong> Strict validation of all API
                  inputs to prevent injection attacks
                </li>
                <li>
                  <strong>API Versioning:</strong> Secure deprecation process for
                  older API versions
                </li>
                <li>
                  <strong>API Monitoring:</strong> Real-time monitoring for
                  anomalous API usage patterns
                </li>
              </ul>

              <h2>5. Data Protection &amp; Privacy</h2>
              <h3>5.1 Data Classification</h3>
              <p>
                We classify data based on sensitivity and apply appropriate
                security controls:
              </p>
              <ul>
                <li>
                  <strong>Public Data:</strong> Information intended for public
                  disclosure
                </li>
                <li>
                  <strong>Internal Data:</strong> Non-sensitive business
                  information
                </li>
                <li>
                  <strong>Confidential Data:</strong> Customer data, business
                  secrets, proprietary information
                </li>
                <li>
                  <strong>Restricted Data:</strong> PII, PHI, payment card data,
                  credentials
                </li>
              </ul>
              <h3>5.2 Data Handling</h3>
              <ul>
                <li>
                  <strong>Data Minimization:</strong> Collect only data necessary
                  for service delivery
                </li>
                <li>
                  <strong>Purpose Limitation:</strong> Use data only for stated
                  purposes with explicit consent
                </li>
                <li>
                  <strong>Data Retention:</strong> Automatic deletion after
                  retention period expires
                </li>
                <li>
                  <strong>Secure Deletion:</strong> Cryptographic erasure and
                  multi-pass overwriting for data destruction
                </li>
                <li>
                  <strong>Data Portability:</strong> Export your data in standard
                  formats at any time
                </li>
              </ul>
              <h3>5.3 Privacy Controls</h3>
              <ul>
                <li>
                  <strong>Privacy by Design:</strong> Privacy controls integrated
                  into all systems and processes
                </li>
                <li>
                  <strong>Data Subject Rights:</strong> Easy access, correction,
                  deletion, and export of personal data
                </li>
                <li>
                  <strong>Consent Management:</strong> Granular consent controls
                  for data collection and processing
                </li>
                <li>
                  <strong>Cookie Controls:</strong> User-configurable cookie
                  preferences
                </li>
                <li>
                  <strong>Marketing Opt-Out:</strong> One-click unsubscribe from
                  marketing communications
                </li>
              </ul>
              <h3>5.4 Third-Party Data Processing</h3>
              <ul>
                <li>
                  <strong>Vendor Assessment:</strong> Security review of all
                  third-party service providers
                </li>
                <li>
                  <strong>Data Processing Agreements:</strong> Contracts requiring
                  vendors to protect customer data
                </li>
                <li>
                  <strong>Subprocessor Disclosure:</strong> Transparent list of
                  all data subprocessors
                </li>
                <li>
                  <strong>Vendor Monitoring:</strong> Ongoing assessment of vendor
                  security practices
                </li>
              </ul>

              <h2>6. Identity &amp; Access Management</h2>
              <h3>6.1 User Authentication</h3>
              <ul>
                <li>
                  <strong>Multi-Factor Authentication (MFA):</strong> Required for
                  all accounts, supporting TOTP, SMS, and hardware tokens
                </li>
                <li>
                  <strong>Single Sign-On (SSO):</strong> Integration with SAML 2.0
                  providers (Okta, Azure AD, Google Workspace)
                </li>
                <li>
                  <strong>Password Requirements:</strong> Minimum 12 characters,
                  complexity requirements, no common passwords
                </li>
                <li>
                  <strong>Password Storage:</strong> Bcrypt hashing with
                  salting&mdash;we never store plaintext passwords
                </li>
                <li>
                  <strong>Session Management:</strong> Secure session tokens,
                  automatic timeout, and re-authentication for sensitive actions
                </li>
              </ul>
              <h3>6.2 Authorization &amp; Permissions</h3>
              <ul>
                <li>
                  <strong>Role-Based Access Control (RBAC):</strong> Predefined
                  roles with specific permissions
                </li>
                <li>
                  <strong>Principle of Least Privilege:</strong> Users granted
                  minimum permissions necessary
                </li>
                <li>
                  <strong>Attribute-Based Access Control (ABAC):</strong> Dynamic
                  permissions based on user attributes and context
                </li>
                <li>
                  <strong>Just-in-Time Access:</strong> Temporary elevated
                  permissions for specific tasks
                </li>
                <li>
                  <strong>Access Reviews:</strong> Quarterly review and
                  recertification of user permissions
                </li>
              </ul>
              <h3>6.3 Employee Access Controls</h3>
              <ul>
                <li>
                  <strong>Background Checks:</strong> Criminal background checks
                  for all employees
                </li>
                <li>
                  <strong>Security Training:</strong> Mandatory security awareness
                  training for all staff
                </li>
                <li>
                  <strong>Confidentiality Agreements:</strong> NDAs and
                  confidentiality clauses in employment contracts
                </li>
                <li>
                  <strong>Access Logging:</strong> All employee access to customer
                  data logged and audited
                </li>
                <li>
                  <strong>Offboarding:</strong> Immediate revocation of access
                  upon employee departure
                </li>
              </ul>

              <h2>7. Security Monitoring &amp; Incident Response</h2>
              <h3>7.1 Security Monitoring</h3>
              <ul>
                <li>
                  <strong>24/7 Monitoring:</strong> Security Operations Center
                  (SOC) monitoring systems around the clock
                </li>
                <li>
                  <strong>
                    Security Information and Event Management (SIEM):
                  </strong>{" "}
                  Centralized logging and correlation of security events
                </li>
                <li>
                  <strong>Intrusion Detection:</strong> Real-time detection of
                  unauthorized access attempts
                </li>
                <li>
                  <strong>Anomaly Detection:</strong> Machine learning-based
                  detection of unusual behavior patterns
                </li>
                <li>
                  <strong>Threat Intelligence:</strong> Integration with threat
                  intelligence feeds for proactive defense
                </li>
              </ul>
              <h3>7.2 Incident Response</h3>
              <ul>
                <li>
                  <strong>Incident Response Plan:</strong> Documented procedures
                  for security incident handling
                </li>
                <li>
                  <strong>Response Team:</strong> Dedicated security incident
                  response team available 24/7
                </li>
                <li>
                  <strong>Incident Classification:</strong> Severity-based
                  classification and escalation procedures
                </li>
                <li>
                  <strong>Containment &amp; Recovery:</strong> Rapid containment,
                  eradication, and recovery processes
                </li>
                <li>
                  <strong>Post-Incident Review:</strong> Thorough analysis and
                  lessons learned after each incident
                </li>
              </ul>
              <h3>7.3 Breach Notification</h3>
              <ul>
                <li>
                  <strong>Regulatory Compliance:</strong> Notification within
                  required timeframes (72 hours for GDPR)
                </li>
                <li>
                  <strong>Customer Notification:</strong> Prompt notification of
                  affected customers with details and remediation steps
                </li>
                <li>
                  <strong>Transparency:</strong> Public disclosure when
                  appropriate and legally required
                </li>
                <li>
                  <strong>Remediation Assistance:</strong> Support and resources
                  for affected parties
                </li>
              </ul>

              <h2>8. Regulatory Compliance</h2>
              <h3>8.1 Data Protection Regulations</h3>
              <ul>
                <li>
                  <strong>GDPR (General Data Protection Regulation):</strong> Full
                  compliance for EU/EEA data subjects
                </li>
                <li>
                  <strong>CCPA/CPRA (California Consumer Privacy Act):</strong>{" "}
                  Compliance for California residents
                </li>
                <li>
                  <strong>LGPD (Brazil):</strong> Compliance with Brazilian data
                  protection laws
                </li>
                <li>
                  <strong>PIPEDA (Canada):</strong> Compliance with Canadian
                  privacy requirements
                </li>
              </ul>
              <h3>8.2 Industry-Specific Compliance</h3>
              <ul>
                <li>
                  <strong>HIPAA (Healthcare):</strong> Business Associate
                  Agreements (BAA) available for healthcare clients
                </li>
                <li>
                  <strong>PCI DSS (Payment Card Industry):</strong> Compliance for
                  payment card data handling
                </li>
                <li>
                  <strong>FERPA (Education):</strong> Protection of student
                  education records
                </li>
                <li>
                  <strong>FINRA (Financial Services):</strong> Compliance for
                  financial services communications
                </li>
              </ul>
              <h3>8.3 Communication Regulations</h3>
              <ul>
                <li>
                  <strong>CAN-SPAM Act:</strong> Email marketing compliance and
                  opt-out mechanisms
                </li>
                <li>
                  <strong>TCPA (Telephone Consumer Protection Act):</strong>{" "}
                  Consent-based telephone communications
                </li>
                <li>
                  <strong>CASL (Canada&apos;s Anti-Spam Legislation):</strong>{" "}
                  Canadian email and SMS compliance
                </li>
                <li>
                  <strong>ePrivacy Directive:</strong> EU cookie consent and
                  electronic communications
                </li>
              </ul>
              <h3>8.4 Audit &amp; Attestation</h3>
              <ul>
                <li>
                  <strong>SOC 2 Type II:</strong> Available for enterprise clients
                  requiring third-party attestation
                </li>
                <li>
                  <strong>ISO 27001:</strong> Information security management
                  system certification (available upon request)
                </li>
                <li>
                  <strong>Penetration Testing:</strong> Annual third-party
                  penetration testing with reports available
                </li>
                <li>
                  <strong>Compliance Documentation:</strong> Security
                  questionnaires and compliance documentation provided to
                  enterprise clients
                </li>
              </ul>

              <h2>9. Physical Security</h2>
              <h3>9.1 Data Center Security</h3>
              <ul>
                <li>
                  <strong>Access Control:</strong> Biometric and badge-based
                  access control systems
                </li>
                <li>
                  <strong>24/7 Security:</strong> On-site security personnel at
                  all data center locations
                </li>
                <li>
                  <strong>Video Surveillance:</strong> Comprehensive CCTV coverage
                  with recording and retention
                </li>
                <li>
                  <strong>Environmental Controls:</strong> Fire suppression, HVAC,
                  and power redundancy
                </li>
                <li>
                  <strong>Visitor Management:</strong> Strict visitor logging and
                  escort requirements
                </li>
              </ul>
              <h3>9.2 Office Security</h3>
              <ul>
                <li>
                  <strong>Secure Facilities:</strong> Controlled access to OrenGen
                  offices and work areas
                </li>
                <li>
                  <strong>Clean Desk Policy:</strong> No sensitive information left
                  on desks or visible to visitors
                </li>
                <li>
                  <strong>Secure Disposal:</strong> Shredding and secure
                  destruction of physical documents
                </li>
                <li>
                  <strong>Device Security:</strong> Full-disk encryption on all
                  company devices
                </li>
              </ul>

              <h2>10. Third-Party &amp; Vendor Security</h2>
              <h3>10.1 Vendor Risk Management</h3>
              <ul>
                <li>
                  <strong>Security Assessments:</strong> Comprehensive security
                  reviews before vendor onboarding
                </li>
                <li>
                  <strong>Contractual Requirements:</strong> Security and privacy
                  obligations in all vendor contracts
                </li>
                <li>
                  <strong>Ongoing Monitoring:</strong> Continuous monitoring of
                  vendor security posture
                </li>
                <li>
                  <strong>Annual Reviews:</strong> Yearly reassessment of critical
                  vendors
                </li>
              </ul>
              <h3>10.2 Subprocessor Management</h3>
              <ul>
                <li>
                  <strong>Subprocessor List:</strong> Transparent disclosure of
                  all data subprocessors
                </li>
                <li>
                  <strong>Data Processing Agreements:</strong> DPAs with all
                  subprocessors handling customer data
                </li>
                <li>
                  <strong>Notification:</strong> Advance notice of new
                  subprocessors (30 days for enterprise clients)
                </li>
              </ul>

              <h2>11. Your Security Responsibilities</h2>
              <p>
                Security is a shared responsibility. Here&apos;s how you can help
                protect your account and data:
              </p>
              <h3>Strong Passwords</h3>
              <ul>
                <li>Use unique passwords (12+ characters)</li>
                <li>Enable multi-factor authentication</li>
                <li>Never share credentials</li>
                <li>Use a password manager</li>
              </ul>
              <h3>Account Security</h3>
              <ul>
                <li>Review account activity regularly</li>
                <li>Log out from shared devices</li>
                <li>Report suspicious activity immediately</li>
                <li>Keep contact info up-to-date</li>
              </ul>
              <h3>Data Protection</h3>
              <ul>
                <li>Only upload authorized data</li>
                <li>Don&apos;t share sensitive info publicly</li>
                <li>Use encryption for sensitive files</li>
                <li>Delete data when no longer needed</li>
              </ul>
              <h3>Phishing Awareness</h3>
              <ul>
                <li>Verify sender email addresses</li>
                <li>Don&apos;t click suspicious links</li>
                <li>Never provide credentials via email</li>
                <li>Report phishing attempts</li>
              </ul>

              <h2>12. Responsible Disclosure</h2>
              <p>
                We welcome and appreciate security researchers who help us
                maintain the security of our systems.
              </p>
              <h3>12.1 Reporting Security Vulnerabilities</h3>
              <p>
                If you discover a security vulnerability in OrenGen&apos;s
                systems, please report it responsibly:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@orengen.io">support@orengen.io</a> with
                  subject &quot;Security Vulnerability Report&quot;
                </li>
                <li>
                  <strong>Include:</strong> Detailed description, steps to
                  reproduce, potential impact, and proof-of-concept if applicable
                </li>
                <li>
                  <strong>Do Not:</strong> Publicly disclose the vulnerability
                  before we&apos;ve had time to fix it
                </li>
                <li>
                  <strong>Response Time:</strong> We acknowledge reports within 48
                  hours and provide updates every 5 business days
                </li>
              </ul>
              <h3>12.2 Our Commitment</h3>
              <ul>
                <li>
                  We will not pursue legal action against researchers who report
                  vulnerabilities in good faith
                </li>
                <li>
                  We will work with you to understand and resolve the issue
                  promptly
                </li>
                <li>
                  We will credit you (with your permission) when the vulnerability
                  is disclosed
                </li>
                <li>
                  We may offer rewards for qualifying vulnerabilities through our
                  bug bounty program
                </li>
              </ul>
              <h3>Security Questions or Concerns</h3>
              <p>
                For security-related inquiries, vulnerability reports, or
                compliance documentation:
              </p>
              <p>
                <strong>Security Team:</strong>{" "}
                <a href="mailto:support@orengen.io">support@orengen.io</a>
                <br />
                <strong>Subject Line:</strong> &quot;Security Inquiry&quot; or
                &quot;Vulnerability Report&quot;
                <br />
                <strong>Enterprise Compliance:</strong> Request SOC 2, penetration
                test reports, or security questionnaires
                <br />
                <strong>Mail:</strong> OrenGen Worldwide LLC, Attn: Security Team
                <br />
                1812 Open Range Drive, Mansfield, Texas 76063
              </p>
              <p>
                <strong>Status Page:</strong>{" "}
                <a
                  href="https://orengen-status-page.instatus.com/"
                  target="_blank"
                >
                  https://orengen-status-page.instatus.com/
                </a>
              </p>
              <p>
                <strong>Security is a Journey:</strong> We continuously invest in
                security improvements, emerging threat detection, and industry
                best practices. Our security program evolves to address new
                threats and protect your business as technology advances.
              </p>
              <p>
                <strong>Thank you</strong> for trusting OrenGen with your
                business-critical systems and data. We take that responsibility
                seriously.
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
                <h2>Have a question about this Security Overview?</h2>
                <p>
                  Reach the OrenGen team directly. We respond to security overview
                  inquiries within one business day.
                </p>
                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="mailto:legal@orengen.io?subject=security-overview"
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
