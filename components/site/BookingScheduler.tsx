"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BOOKING_CALENDAR_TIMEZONE,
  BOOKING_SLOT_LOOKAHEAD_DAYS,
  MEETING_TYPES,
  type MeetingTypeId,
} from "@/lib/booking";

type DaySlots = { date: string; slots: string[] };

type Step = "type" | "schedule" | "details" | "done";

function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || BOOKING_CALENDAR_TIMEZONE;
  } catch {
    return BOOKING_CALENDAR_TIMEZONE;
  }
}

function timezoneShortName(timeZone: string, at = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      timeZoneName: "short",
    }).formatToParts(at);
    return parts.find((p) => p.type === "timeZoneName")?.value || timeZone;
  } catch {
    return timeZone;
  }
}

/** Local civil YYYY-MM-DD for an instant in the given IANA zone. */
function localDateKey(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(iso));
}

/** Regroup Central-keyed days into the visitor's local calendar dates. */
function groupSlotsByLocalDay(days: DaySlots[], timeZone: string): DaySlots[] {
  const map = new Map<string, string[]>();
  for (const day of days) {
    for (const slot of day.slots) {
      const key = localDateKey(slot, timeZone);
      const list = map.get(key) || [];
      list.push(slot);
      map.set(key, list);
    }
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, slots]) => ({
      date,
      slots: slots.sort((a, b) => a.localeCompare(b)),
    }));
}

function formatDayLabel(dateIso: string) {
  // dateIso is already a civil YYYY-MM-DD in the visitor's local calendar.
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateIso);
  if (!match) return dateIso;
  const utc = new Date(
    Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]), 12, 0, 0),
  );
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(utc);
}

function formatSlotLabel(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone,
  }).format(new Date(iso));
}

function formatConfirmWhen(iso: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone,
  }).format(new Date(iso));
}

export default function BookingScheduler({
  variant = "page",
}: {
  /** `embed` = compact inline block for Contact and other pages. */
  variant?: "page" | "embed";
}) {
  const [step, setStep] = useState<Step>("type");
  const [typeId, setTypeId] = useState<MeetingTypeId | null>(null);
  /** Visitor timezone for display only — calendar stays locked to Central. */
  const [displayTimezone, setDisplayTimezone] = useState(BOOKING_CALENDAR_TIMEZONE);
  const [days, setDays] = useState<DaySlots[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const isEmbed = variant === "embed";

  const meeting = useMemo(
    () => MEETING_TYPES.find((t) => t.id === typeId) || null,
    [typeId],
  );

  const localDays = useMemo(
    () => groupSlotsByLocalDay(days, displayTimezone),
    [days, displayTimezone],
  );

  const selectedDaySlots = useMemo(() => {
    if (!selectedDate) return [];
    return localDays.find((d) => d.date === selectedDate)?.slots || [];
  }, [localDays, selectedDate]);

  const localTzShort = useMemo(
    () => timezoneShortName(displayTimezone),
    [displayTimezone],
  );
  const centralTzShort = useMemo(
    () => timezoneShortName(BOOKING_CALENDAR_TIMEZONE),
    [],
  );

  useEffect(() => {
    setDisplayTimezone(detectTimezone());
  }, []);

  // Keep selected date valid when local regrouping changes.
  useEffect(() => {
    if (!localDays.length) {
      setSelectedDate(null);
      return;
    }
    setSelectedDate((prev) => {
      if (prev && localDays.some((d) => d.date === prev)) return prev;
      if (selectedSlot) {
        const fromSlot = localDateKey(selectedSlot, displayTimezone);
        if (localDays.some((d) => d.date === fromSlot)) return fromSlot;
      }
      return localDays[0]?.date || null;
    });
  }, [localDays, selectedSlot, displayTimezone]);

  // Fetch only on the schedule step. Re-running on "details" was clearing
  // selectedSlot and blanking the details form.
  useEffect(() => {
    if (!typeId || step !== "schedule") return;

    let cancelled = false;
    const load = async () => {
      setLoadingSlots(true);
      setError(null);
      setUnavailable(false);
      try {
        const from = new Date();
        const to = new Date(
          from.getTime() + BOOKING_SLOT_LOOKAHEAD_DAYS * 24 * 60 * 60 * 1000,
        );
        const params = new URLSearchParams({
          type: typeId,
          from: from.toISOString(),
          to: to.toISOString(),
        });
        const res = await fetch(`/api/booking/slots?${params}`);
        const data = await res.json();
        if (cancelled) return;
        if (res.status === 503) {
          setDays([]);
          setUnavailable(true);
          setError(null);
          return;
        }
        if (!res.ok || !data.ok) {
          setDays([]);
          setError(data.error || "Could not load availability.");
          return;
        }
        const nextDays: DaySlots[] = Array.isArray(data.days) ? data.days : [];
        setDays(nextDays);
        setSelectedSlot((prev) => {
          if (!prev) return null;
          const stillOpen = nextDays.some((d) => d.slots.includes(prev));
          return stillOpen ? prev : null;
        });
      } catch {
        if (!cancelled) setError("Could not load availability.");
      } finally {
        if (!cancelled) setLoadingSlots(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [typeId, step]);

  const pickType = (id: MeetingTypeId) => {
    setTypeId(id);
    setStep("schedule");
    setError(null);
    setUnavailable(false);
  };

  const goDetails = () => {
    if (!selectedSlot) {
      setError("Pick a time to continue.");
      return;
    }
    setError(null);
    setStep("details");
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!typeId || !selectedSlot) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/booking/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: typeId,
          startTime: selectedSlot,
          timezone: displayTimezone,
          name,
          email,
          phone,
          notes,
          website: honeypot,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Could not book that time.");
        if (res.status === 409) setStep("schedule");
        if (res.status === 503) {
          setUnavailable(true);
          setStep("schedule");
        }
        return;
      }
      setStep("done");
    } catch {
      setError("Could not book that time. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={
        isEmbed ? "booking-panel booking-panel--embed reveal" : "booking-panel reveal"
      }
    >
      <nav className="booking-steps" aria-label="Booking progress">
        {(
          [
            ["type", "Meeting"],
            ["schedule", "Time"],
            ["details", "Details"],
            ["done", "Confirmed"],
          ] as const
        ).map(([id, label], index) => {
          const order: Step[] = ["type", "schedule", "details", "done"];
          const activeIndex = order.indexOf(step);
          const current = order.indexOf(id);
          const state =
            current < activeIndex ? "done" : current === activeIndex ? "active" : "";
          return (
            <span key={id} className={`booking-step ${state}`.trim()}>
              <em>{index + 1}</em>
              {label}
            </span>
          );
        })}
      </nav>

      {error && (
        <div className="booking-error" role="alert">
          {error}
        </div>
      )}

      {step === "type" && (
        <div className="booking-type-grid">
          {MEETING_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              className="booking-type-card"
              onClick={() => pickType(type.id)}
            >
              <div className="booking-type-meta">
                <span className="chip">{type.durationLabel}</span>
              </div>
              <h2>{type.title}</h2>
              <p>{type.description}</p>
              <span className="booking-type-cta">Select →</span>
            </button>
          ))}
        </div>
      )}

      {step === "schedule" && meeting && (
        <div className="booking-schedule">
          <header className="booking-schedule-head">
            <div>
              <div className="eyebrow">{meeting.title}</div>
              <h2>Pick a time that works.</h2>
              <p>
                {meeting.durationLabel} · next 5 weekdays ({centralTzShort}) ·
                book at least 2 hours ahead · times in {localTzShort}
              </p>
            </div>
            <p className="booking-timezone-note" aria-live="polite">
              Auto-set to your local time
              <strong>{displayTimezone}</strong>
              <span>Calendar locked to {centralTzShort}</span>
            </p>
          </header>

          {unavailable ? (
            <div className="booking-status" role="status">
              <h2>Scheduling is briefly unavailable</h2>
              <p>
                Our live calendar could not be reached right now. Email{" "}
                <a href="mailto:briefing@orengen.io">briefing@orengen.io</a> or
                call <a href="tel:+18336736436">833-ORENGEN</a> and we will get
                you on the books.
              </p>
              <div className="booking-actions">
                <a className="btn btn-primary" href="/contact-us">
                  Contact form
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setStep("type");
                    setTypeId(null);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          ) : loadingSlots ? (
            <p className="booking-loading">Loading open times…</p>
          ) : localDays.length === 0 ? (
            <p className="booking-loading">
              No open weekday times in the next few weeks. Try another meeting
              type or email briefing@orengen.io.
            </p>
          ) : (
            <div className="booking-schedule-grid">
              <div className="booking-dates" role="listbox" aria-label="Available dates">
                {localDays.map((day) => (
                  <button
                    key={day.date}
                    type="button"
                    role="option"
                    aria-selected={selectedDate === day.date}
                    className={
                      selectedDate === day.date
                        ? "booking-date is-selected"
                        : "booking-date"
                    }
                    onClick={() => {
                      setSelectedDate(day.date);
                      setSelectedSlot(null);
                    }}
                  >
                    {formatDayLabel(day.date)}
                    <small>{day.slots.length} open</small>
                  </button>
                ))}
              </div>
              <div className="booking-slots" role="listbox" aria-label="Available times">
                {selectedDaySlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    role="option"
                    aria-selected={selectedSlot === slot}
                    className={
                      selectedSlot === slot
                        ? "booking-slot is-selected"
                        : "booking-slot"
                    }
                    onClick={() => setSelectedSlot(slot)}
                  >
                    {formatSlotLabel(slot, displayTimezone)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {!unavailable && (
            <div className="booking-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setStep("type");
                  setTypeId(null);
                  setSelectedSlot(null);
                }}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!selectedSlot}
                onClick={goDetails}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      )}

      {step === "details" && meeting && !selectedSlot && (
        <div className="booking-status" role="status">
          <h2>Pick a time again</h2>
          <p>Your selected time was cleared. Choose an open slot to continue.</p>
          <div className="booking-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setStep("schedule")}
            >
              Back to times
            </button>
          </div>
        </div>
      )}

      {step === "details" && meeting && selectedSlot && (
        <form className="booking-form briefing-card" onSubmit={submit}>
          <header className="booking-form-head">
            <div className="eyebrow">{meeting.title}</div>
            <h2>Your details</h2>
            <p>{formatConfirmWhen(selectedSlot, displayTimezone)}</p>
          </header>

          <label>
            Full name
            <input
              name="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Work email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Phone
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="For SMS confirmation"
            />
          </label>
          <p className="booking-sms-note">
            By booking, you agree to receive a confirmation email and SMS about
            this appointment. Message &amp; data rates may apply. Reply STOP to
            opt out.
          </p>
          <label>
            What should we know? <span className="booking-optional">(optional)</span>
            <textarea
              name="notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Mission, timeline, or the system you want to stand up."
            />
          </label>
          <input
            className="booking-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />

          <div className="booking-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep("schedule")}
              disabled={submitting}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Booking…" : "Confirm booking"}
            </button>
          </div>
        </form>
      )}

      {step === "done" && meeting && selectedSlot && (
        <div className="booking-confirm">
          <div className="eyebrow">Confirmed</div>
          <h2>You&apos;re on the calendar.</h2>
          <p>
            <strong>{meeting.title}</strong> · {meeting.durationLabel}
          </p>
          <p>{formatConfirmWhen(selectedSlot, displayTimezone)}</p>
          <p>
            A confirmation email and SMS are on the way from OrenGen. If anything
            changes, reply to that message or call 833-ORENGEN.
          </p>
          <div className="booking-actions">
            <a className="btn btn-primary" href="/pricing">
              See plans
            </a>
            <a className="btn btn-secondary" href="/">
              Back home
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
