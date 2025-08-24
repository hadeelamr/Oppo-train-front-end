
const USE_MOCK =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_USE_MOCK === "1") ||
  (typeof process   !== "undefined" && process.env?.REACT_APP_USE_MOCK === "1") ||
  (typeof navigator !== "undefined" && navigator.onLine === false); // offline fallback

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const _events = {
  "evt-1": {
    id: "evt-1",
    title: "AI beginners workshop",
    subtitle: "Introductory, hands-on workshop…",
    startsAt: "2025-10-30T10:00:00+03:00",
    endsAt:   "2025-11-30T14:00:00+03:00",
    location: "Tech Lab",
    capacity: 28,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    overview: {
      intro:
        "This event bridges AI concepts with practical, non-technical use so attendees can confidently adopt AI tools.",
      keyHighlights: [
        "Audience: managers & decision-makers",
        "Hands-on demos (70%) + exercises (30%)",
        "Capacity: 25 participants",
      ],
    },
  },
};

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
async function mockDeleteEvent(id) {
  await delay(120);
  return { ok: true };
}

async function mockGetAttendees(eventId) {
  await delay(100);
  return (_attendeesByEvent[eventId] ?? []).map((a) => ({ ...a }));
}
async function mockRemoveAttendee(eventId, userKey) {
  await delay(100);
  const list = _attendeesByEvent[eventId] ?? [];
  const i = list.findIndex((a) => (a.userID ?? a.id ?? a.email) === userKey);
  if (i >= 0) list.splice(i, 1);
  return { ok: true };
}
async function mockSendAcceptances(eventId, userKeys) {
  await delay(150);
  return { ok: true, sent: userKeys };
}


async function liveGetEvent(/* id */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveDeleteEvent(/* id */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveGetAttendees(/* eventId */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveRemoveAttendee(/* eventId, userKey */) { throw new Error("LIVE_NOT_CONFIGURED"); }
async function liveSendAcceptances(/* eventId, userKeys */) { throw new Error("LIVE_NOT_CONFIGURED"); }


async function call(liveFn, mockFn, ...args) {
  if (!USE_MOCK) {
    try {
      return await liveFn(...args);
    } catch (_) {
      return mockFn(...args);
    }
  }
  return mockFn(...args);
}


export const getEvent        = (id)            => call(liveGetEvent,        mockGetEvent,        id);
export const deleteEvent     = (id)            => call(liveDeleteEvent,     mockDeleteEvent,     id);
export const getAttendees    = (eventId)       => call(liveGetAttendees,    mockGetAttendees,    eventId);
export const removeAttendee  = (eventId, key)  => call(liveRemoveAttendee,  mockRemoveAttendee,  eventId, key);
export const sendAcceptances = (eventId, keys) => call(liveSendAcceptances, mockSendAcceptances, eventId, keys);

export function getApiMode() {
  return USE_MOCK ? "mock" : "live";
}
