import type { Metadata } from "next";
import ComingSoon from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Cart — Coming Soon | OrenGen",
  description:
    "A unified OrenGen checkout for modules, packages, and subscriptions is on the way.",
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: true },
};

export default function CartPage() {
  return (
    <ComingSoon
      eyebrow="Cart"
      title="Secure OrenGen checkout is"
      blurb="A unified checkout for OrenGen modules, packages, and subscriptions. In the meantime, configure and price your build in OrenKanBuilder — or talk to us directly and we'll quote it."
    />
  );
}
