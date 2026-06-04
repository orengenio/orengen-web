import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Integrations — Coming Soon | OrenGen",
  description:
    "Native connections between OrenGen and the tools you already run are on the way.",
  alternates: { canonical: "/integrations" },
  robots: { index: false, follow: true },
};

export default function IntegrationsPage() {
  return (
    <ComingSoon
      eyebrow="Integrations"
      title="The OrenGen integrations directory is"
      blurb="Native connections between OrenGen and the tools you already run — CRMs, calendars, data sources, and more. The directory is in build. Tell us your stack and we'll map it."
    />
  );
}
