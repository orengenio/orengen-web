/**
 * Branded booking config for /book.
 * Calendar IDs come from env so GHL remains the availability/appointment source.
 */

export const BOOKING_URL = "/book";

/**
 * Business calendar is locked to Central Time (CDT/CST).
 * Visitors still see slot times converted to their local timezone in the UI.
 */
export const BOOKING_CALENDAR_TIMEZONE = "America/Chicago";

/** How many weekday open days to surface in the date rail. */
export const BOOKING_WEEKDAY_DAYS = 5;

/** Lookahead window so we can fill 5 weekdays even when near weekends / sparse calendars. */
export const BOOKING_SLOT_LOOKAHEAD_DAYS = 28;

export type MeetingTypeId = "coffee-chat" | "strategy-session";

/** Civil YYYY-MM-DD weekday check (Sat/Sun excluded). */
export function isWeekdayDate(dateIso: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateIso);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const weekday = new Date(Date.UTC(year, month - 1, day, 12, 0, 0)).getUTCDay();
  return weekday !== 0 && weekday !== 6;
}

/** Keep Mon–Fri open days only, capped to the next `limit` days with slots. */
export function selectOpenWeekdays<T extends { date: string }>(
  days: T[],
  limit = BOOKING_WEEKDAY_DAYS,
): T[] {
  return days.filter((d) => isWeekdayDate(d.date)).slice(0, limit);
}

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
