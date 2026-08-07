/**
 * Branded booking config for /book.
 * Calendar IDs come from env so GHL remains the availability/appointment source.
 */

export const BOOKING_URL = "/book";

export type MeetingTypeId = "coffee-chat" | "strategy-session";

export type MeetingType = {
  id: MeetingTypeId;
  title: string;
  durationMinutes: number;
  durationLabel: string;
  description: string;
  envCalendarKey: "GHL_CALENDAR_COFFEECHAT_ID" | "GHL_CALENDAR_STRATEGY_ID";
};

export const MEETING_TYPES: MeetingType[] = [
  {
    id: "coffee-chat",
    title: "Coffee Chat",
    durationMinutes: 30,
    durationLabel: "30 minutes",
    description:
      "A focused intro call to understand your mission, constraints, and whether OrenGen is the right operating partner.",
    envCalendarKey: "GHL_CALENDAR_COFFEECHAT_ID",
  },
  {
    id: "strategy-session",
    title: "Strategy Session",
    durationMinutes: 60,
    durationLabel: "1 hour",
    description:
      "A deeper architecture briefing for operators ready to map systems, timelines, and activation paths.",
    envCalendarKey: "GHL_CALENDAR_STRATEGY_ID",
  },
];

export function meetingTypeById(id: string | null | undefined): MeetingType | undefined {
  return MEETING_TYPES.find((type) => type.id === id);
}

export type BookingEnvConfig = {
  token: string;
  locationId: string;
  calendars: Record<MeetingTypeId, string>;
};

export function getBookingEnvConfig():
  | { ok: true; config: BookingEnvConfig }
  | { ok: false; missing: string[] } {
  const read = (key: string) =>
    (process.env[key] || "").trim().replace(/^['"]|['"]$/g, "");

  const token = read("GHL_PRIVATE_TOKEN");
  const locationId = read("GHL_LOCATION_ID");
  const coffee = read("GHL_CALENDAR_COFFEECHAT_ID");
  const strategy = read("GHL_CALENDAR_STRATEGY_ID");

  const missing: string[] = [];
  if (!token) missing.push("GHL_PRIVATE_TOKEN");
  if (!locationId) missing.push("GHL_LOCATION_ID");
  if (!coffee) missing.push("GHL_CALENDAR_COFFEECHAT_ID");
  if (!strategy) missing.push("GHL_CALENDAR_STRATEGY_ID");

  if (missing.length) return { ok: false, missing };

  return {
    ok: true,
    config: {
      token,
      locationId,
      calendars: {
        "coffee-chat": coffee,
        "strategy-session": strategy,
      },
    },
  };
}

export function isBookingConfigured() {
  return getBookingEnvConfig().ok;
}
