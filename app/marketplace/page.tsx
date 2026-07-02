import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Marketplace — Coming Soon | OrenGen",
  description:
    "A curated marketplace of OrenGen-built AI modules, automations, and integrations you can own.",
  alternates: { canonical: "/marketplace" },
  robots: { index: false, follow: true },
};

export default function MarketplacePage() {
  return (
    <ComingSoon
      eyebrow="Marketplace"
      title="The OrenGen marketplace is on the way."
      blurb="A curated marketplace of OrenGen-built AI modules, automations, and integrations you can own — not rent. We're assembling it now. Tell us what you need today and we'll build it."
    />
  );
}
