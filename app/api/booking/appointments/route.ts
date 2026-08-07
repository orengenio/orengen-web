import { NextRequest, NextResponse } from "next/server";
import {
  BOOKING_MIN_LEAD_MS,
  getBookingEnvConfig,
  meetingTypeById,
} from "@/lib/booking";
import { createAppointment, upsertContact } from "@/lib/ghl";

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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

/**
 * POST /api/booking/appointments
 * Body: { type, startTime, timezone, name, email, phone, notes?, website? }
 * `website` is a honeypot — must be empty.
 * Phone is required so GHL can send SMS along with email confirmations.
 */
export async function POST(req: NextRequest) {
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

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — bots that fill hidden fields get a soft success.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true, booked: true });
  }

  const type = meetingTypeById(typeof body.type === "string" ? body.type : "");
  if (!type) {
    return NextResponse.json({ ok: false, error: "Unknown meeting type" }, { status: 400 });
  }

  const startTime = typeof body.startTime === "string" ? body.startTime.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const notes = typeof body.notes === "string" ? body.notes.trim() : "";
  const timezone =
    typeof body.timezone === "string" && body.timezone.trim()
      ? body.timezone.trim()
      : "America/Chicago";

  if (!startTime || Number.isNaN(Date.parse(startTime))) {
    return NextResponse.json({ ok: false, error: "Invalid start time" }, { status: 400 });
  }
  const startMs = Date.parse(startTime);
  if (startMs < Date.now() + BOOKING_MIN_LEAD_MS) {
    return NextResponse.json(
      {
        ok: false,
        error: "That time is too soon. Please pick a slot at least 2 hours from now.",
      },
      { status: 400 },
    );
  }
  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Name is required" }, { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Valid email is required" }, { status: 400 });
  }
  if (!phone || !isPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "A valid phone number is required for SMS confirmation." },
      { status: 400 },
    );
  }

  const ghl = { token: env.config.token, locationId: env.config.locationId };
  const calendarId = env.config.calendars[type.id];

  const contact = await upsertContact(ghl, {
    name,
    email,
    phone,
    source: "orengen.io/book",
    tags: ["orengen-web-book", type.id, "sms-opt-in-booking"],
  });

  if (!contact.ok) {
    return NextResponse.json(
      { ok: false, error: contact.error },
      { status: contact.status >= 400 && contact.status < 600 ? contact.status : 502 },
    );
  }

  const title = notes
    ? `${type.title} — ${name}`
    : `${type.title} with ${name}`;

  const appointment = await createAppointment(ghl, {
    calendarId,
    contactId: contact.data.contactId,
    startTime,
    title,
    appointmentStatus: "confirmed",
    toNotify: true,
  });

  if (!appointment.ok) {
    const taken =
      appointment.status === 400 ||
      /slot|available|conflict/i.test(appointment.error);
    return NextResponse.json(
      {
        ok: false,
        error: taken
          ? "That time was just taken. Please pick another slot."
          : appointment.error,
      },
      {
        status: taken
          ? 409
          : appointment.status >= 400 && appointment.status < 600
            ? appointment.status
            : 502,
      },
    );
  }

  return NextResponse.json({
    ok: true,
    booked: true,
    type: type.id,
    startTime,
    timezone,
    notified: true,
    meeting: {
      title: type.title,
      durationLabel: type.durationLabel,
    },
  });
}
