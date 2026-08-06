const isDevelopment = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://buy.stripe.com https://api.orengen.io",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://*.leadconnectorhq.com https://translate.google.com https://translate.googleapis.com`,
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "media-src 'self' data: blob: https:",
  "connect-src 'self' https: wss:",
  "frame-src 'self' https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://translate.google.com https://www.google.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  // Keep local HTTP previews interactive; production still upgrades every
  // insecure request before the site is switched live.
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(self), payment=(self), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this app (a stray lockfile in the user home dir
  // otherwise confuses Next's root detection — matters for the Coolify build).
  outputFileTracingRoot: import.meta.dirname,
  // Avoid disclosing the framework in public responses.
  poweredByHeader: false,
  // Hide the Next.js dev badge — only OrenGen's own mark should ever appear.
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.content360.io" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Legacy /contact links now land on the dedicated /contact-us page.
      { source: "/contact", destination: "/contact-us", permanent: false },
      // Renamed for SMS/10DLC compliance scanning (program terms unchanged).
      { source: "/affiliate-program", destination: "/referral-partner-program", permanent: false },
      // /gdpr-compliance never existed as a page; the footer linked it dead.
      // GDPR content lives in the privacy policy's own section.
      { source: "/gdpr-compliance", destination: "/legal/privacy-policy#gdpr-rights", permanent: false },
      // OrenKanBuilder retired from the public site — send bookmarks/indexes to pricing.
      { source: "/orenkanbuilder", destination: "/pricing", permanent: true },
      { source: "/orenkanbuilder/:path*", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;
