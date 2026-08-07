import BookingScheduler from "@/components/site/BookingScheduler";

/**
 * Minimal embed surface for same-origin iframes:
 *   <iframe src="https://orengen.io/book/embed" title="Book with OrenGen" />
 * Uses the branded HighLevel-synced scheduler — not the GHL group widget.
 */
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Book a Call | OrenGen Worldwide",
  robots: { index: false, follow: false },
};

export default function BookEmbedPage() {
  return (
    <div className="booking-embed-shell" data-theme="dark">
      <BookingScheduler variant="embed" />
    </div>
  );
}
