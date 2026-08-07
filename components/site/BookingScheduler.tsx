"use client";

import { useEffect, useMemo, useState } from "react";
import { MEETING_TYPES, type MeetingTypeId } from "@/lib/booking";

type DaySlots = { date: string; slots: string[] };

type Step = "type" | "schedule" | "details" | "done";

function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago";
  } catch {
    return "America/Chicago";
  }
}

function formatDayLabel(dateIso: string, timeZone: string) {
  const d = new Date(`${dateIso}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone,
  }).format(d);
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

export default function BookingScheduler() {
  const [step, setStep] = useState<Step>("type");
  const [typeId, setTypeId] = useState<MeetingTypeId | null>(null);
  const [timezone, setTimezone] = useState("America/Chicago");
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

  const meeting = useMemo(
    () => MEETING_TYPES.find((t) => t.id === typeId) || null,
    [typeId],
  );

  const selectedDaySlots = useMemo(() => {
    if (!selectedDate) return [];
    return days.find((d) => d.date === selectedDate)?.slots || [];
  }, [days, selectedDate]);

  useEffect(() => {
    setTimezone(detectTimezone());
  }, []);

  useEffect(() => {
    if (!typeId || step === "type" || step === "done") return;

    let cancelled = false;
    const load = async () => {
      setLoadingSlots(true);
      setError(null);
      setUnavailable(false);
      try {
        const from = new Date();
        const to = new Date(from.getTime() + 14 * 24 * 60 * 60 * 1000);
        const params = new URLSearchParams({
          type: typeId,
          from: from.toISOString(),
          to: to.toISOString(),
          timezone,
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
        setSelectedDate((prev) => {
          if (prev && nextDays.some((d) => d.date === prev)) return prev;
          return nextDays[0]?.date || null;
        });
        setSelectedSlot(null);
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
  }, [typeId, timezone, step]);

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
          timezone,
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
    <div className="booking-panel reveal">
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
              <p>{meeting.durationLabel} · live calendar availability</p>
            </div>
            <label className="booking-timezone">
              <span>Timezone</span>
              <input
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                aria-label="Timezone"
              />
            </label>
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
          ) : days.length === 0 ? (
            <p className="booking-loading">
              No open times in the next two weeks. Try another meeting type or
              email briefing@orengen.io.
            </p>
          ) : (
            <div className="booking-schedule-grid">
              <div className="booking-dates" role="listbox" aria-label="Available dates">
                {days.map((day) => (
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
                    {formatDayLabel(day.date, timezone)}
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
                    {formatSlotLabel(slot, timezone)}
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

      {step === "details" && meeting && selectedSlot && (
        <form className="booking-form briefing-card" onSubmit={submit}>
          <header className="booking-form-head">
            <div className="eyebrow">{meeting.title}</div>
            <h2>Your details</h2>
            <p>{formatConfirmWhen(selectedSlot, timezone)}</p>
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
            Phone <span className="booking-optional">(optional)</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
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
          <p>{formatConfirmWhen(selectedSlot, timezone)}</p>
          <p>
            A confirmation will arrive from OrenGen. If anything changes, reply
            to that email or call 833-ORENGEN.
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
