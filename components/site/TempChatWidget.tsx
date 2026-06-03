"use client";

import { useEffect } from "react";

/* ============================================================================
 * ⏳ TEMPORARY — Aminos "AI Mode" chat widget (bot 59174)
 * ----------------------------------------------------------------------------
 * Stop-gap live chat while GoHighLevel SMS / AI-voice provisioning is pending
 * approval. REMOVE this whole component (delete this file + its <TempChatWidget />
 * line in app/layout.tsx) once the GHL channels are live.
 *
 * Why manual injection instead of next/script:
 * The vendor loader (app.aminos.ai/js/chat_plugin.js) reads BOTH its bot id and
 * its API origin off `document.currentScript` at execution time:
 *     document.currentScript.getAttribute("data-bot-id")
 *     new URL(document.currentScript.getAttribute("src")).origin
 * and throws "Bot ID attribute is not set" if currentScript is null. Creating the
 * <script> element by hand guarantees both attributes live on the real tag the
 * browser is executing — the same defensive pattern the codebase already uses for
 * the Google Translate loader (see SiteRuntime.tsx). Mounted once in the root
 * layout, so it loads a single time and persists across client-side navigation.
 * ========================================================================== */

const AMINOS_SRC = "https://app.aminos.ai/js/chat_plugin.js";
const AMINOS_BOT_ID = "59174"; // public client-side id, not a secret
const SCRIPT_ID = "aminos-chat-plugin";
const STYLE_ID = "aminos-chat-style";

export default function TempChatWidget() {
  useEffect(() => {
    // (1) Inject the loader once — id-guarded against StrictMode double-invoke / re-mount.
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = AMINOS_SRC;
      script.setAttribute("data-bot-id", AMINOS_BOT_ID);
      script.async = true;
      document.body.appendChild(script);
    }

    // (2) Contrast fix. This site forces a dark theme (body color #F0F4FA, near-white),
    // and Aminos renders in the page DOM (not an iframe), so its closed-state teaser
    // bubble (.talktext, white background) INHERITS #F0F4FA → near-white-on-white, the
    // "Hi there! Have a question?" greeting is nearly invisible. Scoping a readable dark
    // color to the widget root #chat_app fixes the teaser; every other part keeps its own
    // color (navy header → white text; received msgs → #263238; sent msgs → inline
    // sentColorsStyle). Verified via sentinel test + vendor CSS. No !important needed:
    // #chat_app is a nearer ancestor than body, so the teaser inherits this instead.
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = "#chat_app{color:#222}";
      document.head.appendChild(style);
    }
  }, []);

  return null;
}
