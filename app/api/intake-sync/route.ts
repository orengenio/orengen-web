import { NextRequest, NextResponse } from "next/server";

/**
 * Free, self-owned intake endpoint — no third-party form service.
 *
 * Accepts the contact + newsletter form submissions and forwards them to your
 * n8n / GoHighLevel webhook when one of these env vars is set:
 *   OREN_INTAKE_WEBHOOK | N8N_INTAKE_WEBHOOK | GHL_INTAKE_WEBHOOK
 * Until a webhook is configured it logs the payload and still returns success,
 * so the forms never 404.
 *
 * - A client `fetch()` (Accept: application/json) gets `{ ok: true }`.
 * - A native <form> POST is redirected back to the page with `?intake=received`.
 */
export async function POST(req: NextRequest) {
  let data: Record<string, unknown> = {};
  const contentType = req.headers.get("content-type") || "";

  try {
    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const form = await req.formData();
      data = Object.fromEntries(form.entries());
      const paths = form.getAll("paths[]");
      if (paths.length) data.paths = paths.map(String);
    }
  } catch {
    // Ignore parse errors — we still return success below.
  }

  const webhook =
    process.env.OREN_INTAKE_WEBHOOK ||
    process.env.N8N_INTAKE_WEBHOOK ||
    process.env.GHL_INTAKE_WEBHOOK;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: data.source || "orengen-web",
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      // Never block the user on a downstream failure.
      console.error("[intake-sync] webhook forward failed:", err);
    }
  } else {
    console.log("[intake-sync] no webhook configured — payload:", data);
  }

  const accept = req.headers.get("accept") || "";
  if (accept.includes("application/json")) {
    return NextResponse.json({ ok: true });
  }

  const referer = req.headers.get("referer");
  const back = referer ? new URL(referer) : new URL("/", req.url);
  back.searchParams.set("intake", "received");
  back.hash = "contact";
  return NextResponse.redirect(back, 303);
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "intake-sync", method: "POST" });
}
