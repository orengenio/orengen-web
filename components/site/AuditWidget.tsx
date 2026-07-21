"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Embeds the LeadConnector (GoHighLevel) prospecting "website audit" widget.
 *
 * The vendor embed injects GLOBAL assets into <head> — flowbite.min.css
 * (Tailwind, incl. a preflight reset), flowbite JS, and Google Fonts — which
 * override the host site's styling site-wide (it was flattening the OrenWeb
 * hero). To contain it completely, we run the widget inside a same-origin
 * iframe (via srcDoc): its global CSS/JS only affect the iframe document, not
 * orengen.io. Inside the frame the <script> is parser-inserted, so the widget's
 * document.currentScript placement works and it mounts normally.
 *
 * The iframe auto-sizes to the widget's content height (same-origin, so we can
 * measure it) and has no inner scrollbar.
 */

const WIDGET_SRC =
  "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

export default function AuditWidget({ widgetId }: { widgetId: string }) {
  const [height, setHeight] = useState(560);
  const cleanupRef = useRef<(() => void) | null>(null);

  const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><base target="_blank"><style>*{box-sizing:border-box}html,body{margin:0;padding:0;background:transparent;overflow:hidden}body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}</style></head><body><script src="${WIDGET_SRC}" data-widget-id="${widgetId}"></script></body></html>`;

  const onLoad = useCallback(
    (e: React.SyntheticEvent<HTMLIFrameElement>) => {
      const iframe = e.currentTarget;
      const doc = iframe.contentDocument;
      const win = iframe.contentWindow as (Window & typeof globalThis) | null;
      if (!doc || !win) return;

      const measure = () => {
        const body = doc.body;
        const root = doc.documentElement;
        if (!body) return;
        const h = Math.max(body.scrollHeight, root ? root.scrollHeight : 0);
        if (h > 0) setHeight((prev) => (Math.abs(prev - h) > 4 ? h : prev));
      };

      measure();

      let ro: ResizeObserver | null = null;
      try {
        const RO = win.ResizeObserver;
        if (RO && doc.body) {
          ro = new RO(measure);
          ro.observe(doc.body);
        }
      } catch {
        /* ignore */
      }

      // The widget mounts asynchronously; poll for a while as a safety net.
      let ticks = 0;
      const iv = win.setInterval(() => {
        measure();
        if (++ticks > 60) win.clearInterval(iv);
      }, 300);

      cleanupRef.current = () => {
        ro?.disconnect();
        try {
          win.clearInterval(iv);
        } catch {
          /* ignore */
        }
      };
    },
    [],
  );

  return (
    <iframe
      className="audit-widget"
      title="Free website audit"
      srcDoc={srcDoc}
      onLoad={onLoad}
      loading="lazy"
      scrolling="no"
      style={{ width: "100%", height, border: 0, display: "block" }}
    />
  );
}
