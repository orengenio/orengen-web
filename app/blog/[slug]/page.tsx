import { notFound } from "next/navigation";
import type { Metadata } from "next";

/**
 * Blog post route reserved for future OrenSignal articles.
 * Until real posts ship, every slug 404s so placeholder template copy cannot
 * be indexed or shared.
 */
export const metadata: Metadata = {
  title: "Article Not Found — OrenGen Worldwide",
  robots: { index: false, follow: false },
};

export default function BlogPostPage() {
  notFound();
}
