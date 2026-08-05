"use client";

import { useEffect } from "react";

/* ============================================================================
 * GoHighLevel (LeadConnector) live chat widget.
 * Replaces the temporary Aminos stopgap now that the GHL channel is live.
 *
 * Manually injected rather than via next/script: the vendor loader may read
 * its own attributes off `document.currentScript` at execution time (the
 * same defensive pattern already used for the Aminos loader it replaces and
 * the Google Translate loader in SiteRuntime.tsx). Mounted once in the root
 * layout, so it loads a single time and persists across client-side
 * navigation.
 * ========================================================================== */

const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a44d92b686a90131ba0d8d9"; // public client-side id, not a secret
const SCRIPT_ID = "leadconnector-chat-widget";

export default function ChatWidget() {
  useEffect(() => {
    const mountWidget = () => {
      if (document.getElementById(SCRIPT_ID)) return;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = LOADER_SRC;
      script.setAttribute("data-resources-url", RESOURCES_URL);
      script.setAttribute("data-widget-id", WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
    };

    // Preserve an unobstructed first impression. The chat remains available
    // after a visitor begins exploring or after a short idle window.
    const revealAfterExploration = () => {
      if (window.scrollY > 420) {
        mountWidget();
        window.removeEventListener("scroll", revealAfterExploration);
      }
    };
    window.addEventListener("scroll", revealAfterExploration, { passive: true });

    return () => {
      window.removeEventListener("scroll", revealAfterExploration);
    };
  }, []);

  return null;
}
