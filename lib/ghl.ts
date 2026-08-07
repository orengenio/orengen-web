/**
 * Server-only GoHighLevel (LeadConnector) Calendar + Contacts client.
 * Never import from client components — token stays on the server.
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-04-15";

type GhlConfig = {
  token: string;
  locationId: string;
};

async function ghlFetch<T>(
  config: GhlConfig,
  path: string,
  init?: RequestInit,
): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.token}`,
      Version: GHL_VERSION,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: "no-store",
  });

  const text = await res.text();
  let parsed: unknown = null;
  if (text) {
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
  }

  if (!res.ok) {
    const message =
      typeof parsed === "object" &&
      parsed &&
      "message" in parsed &&
      typeof (parsed as { message: unknown }).message === "string"
        ? (parsed as { message: string }).message
        : typeof parsed === "string"
          ? parsed
          : `GHL request failed (${res.status})`;
    return { ok: false, status: res.status, error: message };
  }

  return { ok: true, data: parsed as T };
}

/** Free-slots response is a map of YYYY-MM-DD → { slots: string[] } plus optional metadata. */
export type FreeSlotsResponse = Record<
  string,
  { slots?: string[] } | string | number | boolean | undefined
>;

export type NormalizedDaySlots = {
  date: string;
  slots: string[];
};

export function normalizeFreeSlots(payload: FreeSlotsResponse): NormalizedDaySlots[] {
  const days: NormalizedDaySlots[] = [];
  for (const [key, value] of Object.entries(payload)) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;
    if (!value || typeof value !== "object" || Array.isArray(value)) continue;
    const slots = Array.isArray(value.slots)
      ? value.slots.filter((s): s is string => typeof s === "string")
      : [];
    if (slots.length) days.push({ date: key, slots });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  return days;
}

export async function getFreeSlots(
  config: GhlConfig,
  calendarId: string,
  opts: { startMs: number; endMs: number; timezone?: string },
) {
  const params = new URLSearchParams({
    startDate: String(opts.startMs),
    endDate: String(opts.endMs),
  });
  if (opts.timezone) params.set("timezone", opts.timezone);

  const result = await ghlFetch<FreeSlotsResponse>(
    config,
    `/calendars/${encodeURIComponent(calendarId)}/free-slots?${params}`,
  );
  if (!result.ok) return result;
  return { ok: true as const, data: normalizeFreeSlots(result.data) };
}

export type UpsertContactInput = {
  name: string;
  email: string;
  phone?: string;
  source?: string;
  tags?: string[];
};

export async function upsertContact(config: GhlConfig, input: UpsertContactInput) {
  // Prefer upsert by email so repeat bookers attach to the same contact.
  const body: Record<string, unknown> = {
    locationId: config.locationId,
    name: input.name,
    email: input.email,
    source: input.source || "orengen.io/book",
  };
  if (input.phone) body.phone = input.phone;
  if (input.tags?.length) body.tags = input.tags;

  const result = await ghlFetch<{ contact?: { id?: string }; id?: string }>(
    config,
    "/contacts/upsert",
    { method: "POST", body: JSON.stringify(body) },
  );

  if (!result.ok) return result;

  const contactId = result.data.contact?.id || result.data.id;
  if (!contactId) {
    return { ok: false as const, status: 502, error: "GHL did not return a contact id" };
  }
  return { ok: true as const, data: { contactId } };
}

export type CreateAppointmentInput = {
  calendarId: string;
  contactId: string;
  startTime: string;
  title?: string;
  appointmentStatus?: string;
  /** When true, GHL runs contact email/SMS calendar notifications. */
  toNotify?: boolean;
};

export async function createAppointment(
  config: GhlConfig,
  input: CreateAppointmentInput,
) {
  const body = {
    calendarId: input.calendarId,
    locationId: config.locationId,
    contactId: input.contactId,
    startTime: input.startTime,
    title: input.title,
    appointmentStatus: input.appointmentStatus || "confirmed",
    toNotify: input.toNotify !== false,
  };

  return ghlFetch<Record<string, unknown>>(
    config,
    "/calendars/events/appointments",
    { method: "POST", body: JSON.stringify(body) },
  );
}
