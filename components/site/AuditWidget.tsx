"use client";

import { useEffect, useRef } from "react";

/**
 * Embeds the LeadConnector (GoHighLevel) prospecting "website audit" widget.
 *
 * The vendor script (widget-embed.js) mounts its audit form *inline, right
 * before its own <script> tag* — it locates that tag via
 * document.currentScript, falling back to the last <script> in the document.
 * For a dynamically-injected script neither is reliable in a Next.js/SPA page
 * (currentScript is null for async-injected scripts, and the "last script" is
 * usually a framework/analytics tag), so the form can land in the wrong place.
 *
 * To place it *exactly* here regardless: we inject the script into this host,
 * then watch for the widget's container ([data-widget-container]) and relocate
 * it into the host if the vendor dropped it elsewhere. Moving the DOM node is
 * safe — the widget mounts its app by element id, which survives the move.
 *
 * Guards against duplicate injection and tears everything down on unmount so it
 * re-initializes cleanly across client-side navigations instead of stacking.
 */

const WIDGET_SRC =
  "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

export default function AuditWidget({ widgetId }: { widgetId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (host.querySelector("script[data-audit-embed]")) return; // already injected

    let relocated = false;
    const relocate = () => {
      if (relocated) return;
      const container = document.querySelector<HTMLElement>("[data-widget-container]");
      if (!container) return;
      if (!host.contains(container)) host.appendChild(container);
      relocated = true;
    };

    const observer = new MutationObserver(relocate);
    observer.observe(document.body, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.setAttribute("data-widget-id", widgetId);
    script.setAttribute("data-audit-embed", "true");
    host.appendChild(script);
    relocate(); // in case the container already exists

    const stopTimer = window.setTimeout(() => observer.disconnect(), 15000);

    return () => {
      observer.disconnect();
      window.clearTimeout(stopTimer);
      host
        .querySelectorAll("[data-widget-container], script[data-audit-embed]")
        .forEach((el) => el.remove());
      // Remove any container the vendor left elsewhere in the document.
      document
        .querySelectorAll("[data-widget-container]")
        .forEach((el) => {
          if (!host.contains(el)) el.remove();
        });
    };
  }, [widgetId]);

  return <div className="audit-widget" ref={hostRef} aria-label="Website audit tool" />;
}
