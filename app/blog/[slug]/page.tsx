import { notFound } from "next/navigation";

/**
 * Blog posts are published on the OrenSignal index at /blog.
 * Individual post routes are not live yet — return 404 instead of
 * exposing template placeholder copy.
 */
export default function BlogPostPage() {
  notFound();
}
