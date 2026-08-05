import { NextRequest, NextResponse } from "next/server";

const INTAKE_CSRF_TOKEN = "orengen-intake-v1";

function isTrustedFormOrigin(req: NextRequest) {
  if (req.headers.get("sec-fetch-site") === "cross-site") return false;

  const origin = req.headers.get("origin");
  if (!origin) return true;

  const forwardedHost = req.headers.get("x-forwarded-host");
  const host = forwardedHost || req.headers.get("host");
  const forwardedProto = req.headers.get("x-forwarded-proto");
  const protocol = forwardedProto || req.nextUrl.protocol.replace(":", "");
  const deployedOrigin = host ? `${protocol}://${host}` : req.nextUrl.origin;

  return new Set([
    req.nextUrl.origin,
    deployedOrigin,
    "https://orengen.io",
    "https://www.orengen.io",
  ]).has(origin);
}

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
  if (!isTrustedFormOrigin(req)) {
    return NextResponse.json({ ok: false, error: "Untrusted form origin" }, { status: 403 });
  }

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
    return NextResponse.json({ ok: false, error: "Invalid form payload" }, { status: 400 });
  }

  if (data.csrf_token !== INTAKE_CSRF_TOKEN) {
    return NextResponse.json({ ok: false, error: "Invalid form token" }, { status: 403 });
  }
  delete data.csrf_token;

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
