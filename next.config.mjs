/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this app (a stray lockfile in the user home dir
  // otherwise confuses Next's root detection — matters for the Coolify build).
  outputFileTracingRoot: import.meta.dirname,
  // Hide the Next.js dev badge — only OrenGen's own mark should ever appear.
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.content360.io" },
    ],
  },
  async redirects() {
    return [
      // Legacy /contact links now land on the dedicated /contact-us page.
      { source: "/contact", destination: "/contact-us", permanent: false },
      // Renamed for SMS/10DLC compliance scanning (program terms unchanged).
      { source: "/affiliate-program", destination: "/referral-partner-program", permanent: false },
    ];
  },
};

export default nextConfig;
