// src/services/eventsApi.js
import { MOCK_EVENTS } from "../data/mockData.js";

const USE_MOCK =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_USE_MOCK === "1") ||
  (typeof process   !== "undefined" && process.env?.REACT_APP_USE_MOCK === "1") ||
  (typeof navigator !== "undefined" && navigator.onLine === false);

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const _events = Object.fromEntries(
  (MOCK_EVENTS ?? []).map((e) => {
    const overview =
      typeof e.overview === "string"
        ? { intro: e.overview, keyHighlights: [] }
        : (e.overview || { intro: "", keyHighlights: [] });

    return [e.id, {
      id: e.id,
      title: e.title,
      subtitle: e.subtitle ?? "",
      startsAt: e.startsAt,
      endsAt: e.endsAt,
      location: e.location,
      capacity: e.capacity,
      image: e.imageUrl ?? e.image ?? null,
      overview,
      status: e.status ?? "",
      type: e.type ?? "",
      createdBy: e.createdBy ?? "",
      userPrice: e.userPrice ?? null,
      memberPrice: e.memberPrice ?? null,
    }];
  })
);

const _attendeesByEvent = {
  "evt-1": [
    { userID: 1, fullName: "Abdallah",  email: "Abdallahblabla@gmail.com" },
    { userID: 2, fullName: "Sara Odeh", email: "sara@example.com" },
    { userID: 3, fullName: "Omar N.",   email: "omar@example.com" },
  ],
};

async function mockGetEvent(id) {
  await delay(120);
  const ev = _events[id];
  if (!ev) throw new Error("Event not found");
  return ev;
}
async function mockDeleteEvent(/* id */) { await delay(120); return { ok: true }; }
async function mockGetAttendees(eventId) { await delay(100); return (_attendeesByEvent[eventId] ?? []).map(a => ({ ...a })); }
async function mockRemoveAttendee(eventId, userKey) {
  await delay(100);
  const list = _attendeesByEvent[eventId] ?? [];
  const i = list.findIndex(a => (a.userID ?? a.id ?? a.email) === userKey);
  if (i >= 0) list.splice(i, 1);
  return { ok: true };
}
async function mockSendAcceptances(eventId, userKeys) { await delay(150); return { ok: true, sent: userKeys }; }

// Live (wire later)
async function liveGetEvent(/* id */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveDeleteEvent(/* id */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveGetAttendees(/* eventId */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveRemoveAttendee(/* eventId, userKey */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveSendAcceptances(/* eventId, userKeys */) { throw new Error("LIVE_NOT_CONFIGURED"); }

async function call(liveFn, mockFn, ...args) {
  if (!USE_MOCK) {
    try { return await liveFn(...args); }
    catch { return mockFn(...args); }
  }
  return mockFn(...args);
}

export const getEvent        = (id)            => call(liveGetEvent,        mockGetEvent,        id);
export const deleteEvent     = (id)            => call(liveDeleteEvent,     mockDeleteEvent,     id);
export const getAttendees    = (eventId)       => call(liveGetAttendees,    mockGetAttendees,    eventId);
export const removeAttendee  = (eventId, key)  => call(liveRemoveAttendee,  mockRemoveAttendee,  eventId, key);
export const sendAcceptances = (eventId, keys) => call(liveSendAcceptances, mockSendAcceptances, eventId, keys);

export function getApiMode() { return USE_MOCK ? "mock" : "live"; }
