import { NextRequest, NextResponse } from "next/server";
import { getBookingEnvConfig, meetingTypeById } from "@/lib/booking";
import { getFreeSlots } from "@/lib/ghl";

const MAX_RANGE_MS = 31 * 24 * 60 * 60 * 1000;

function isTrustedOrigin(req: NextRequest) {
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
 * GET /api/booking/slots?type=coffee-chat&from=<iso>&to=<iso>&timezone=America/Chicago
 * Proxies GHL free-slots. Secrets never leave the server.
 */
export async function GET(req: NextRequest) {
  if (!isTrustedOrigin(req)) {
    return NextResponse.json({ ok: false, error: "Untrusted origin" }, { status: 403 });
  }

  const env = getBookingEnvConfig();
  if (!env.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "Booking is not configured",
        missing: env.missing,
      },
      { status: 503 },
    );
  }

  const type = meetingTypeById(req.nextUrl.searchParams.get("type"));
  if (!type) {
    return NextResponse.json({ ok: false, error: "Unknown meeting type" }, { status: 400 });
  }

  const fromRaw = req.nextUrl.searchParams.get("from");
  const toRaw = req.nextUrl.searchParams.get("to");
  const timezone = req.nextUrl.searchParams.get("timezone") || "America/Chicago";

  const startMs = fromRaw ? Date.parse(fromRaw) : Date.now();
  const endMs = toRaw ? Date.parse(toRaw) : startMs + 14 * 24 * 60 * 60 * 1000;

  if (!Number.isFinite(startMs) || !Number.isFinite(endMs) || endMs <= startMs) {
    return NextResponse.json({ ok: false, error: "Invalid date range" }, { status: 400 });
  }
  if (endMs - startMs > MAX_RANGE_MS) {
    return NextResponse.json(
      { ok: false, error: "Date range cannot exceed 31 days" },
      { status: 400 },
    );
  }

  const calendarId = env.config.calendars[type.id];
  const result = await getFreeSlots(
    { token: env.config.token, locationId: env.config.locationId },
    calendarId,
    { startMs, endMs, timezone },
  );

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: result.status >= 400 && result.status < 600 ? result.status : 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    type: type.id,
    timezone,
    days: result.data,
  });
}
