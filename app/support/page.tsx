import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Support — Coming Soon | OrenGen",
  description:
    "A dedicated OrenGen support center with docs, guides, and ticketing is on the way.",
  alternates: { canonical: "/support" },
  robots: { index: false, follow: true },
};

export default function SupportPage() {
  return (
    <ComingSoon
      eyebrow="Support"
      title="The OrenGen support center is"
      blurb="A dedicated support center with documentation, guides, and ticketing. While we build it, reach the team directly through Contact and we'll take care of you."
    />
  );
}
