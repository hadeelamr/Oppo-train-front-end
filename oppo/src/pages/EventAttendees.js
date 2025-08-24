// src/pages/EventAttendees.js
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import {
  getEvent,
  getAttendees,
  removeAttendee,
  sendAcceptances,
  deleteEvent,
} from "../services/eventsApi";
import EventHeaderCard from "../components/EventHeaderCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function getDisplayName(a = {}) {
  const candidate =
    (typeof a.fullName === "string" && a.fullName) ||
    (typeof a.name === "string" && a.name) ||
    (
      (typeof a.firstName === "string" || typeof a.lastName === "string") &&
      [a.firstName, a.lastName].filter(Boolean).join(" ")
    ) ||
    (typeof a.email === "string" && a.email.split("@")[0]) ||
    "";
  return String(candidate).trim();
}
function toInitialsFromObj(a) {
  const name = getDisplayName(a);
  const parts = name.split(/\s+/).filter(Boolean).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase() ?? "").join("") || "U";
}

export default function EventAttendees() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true); setErr(null);
        const [ev, list] = await Promise.all([getEvent(id), getAttendees(id)]);
        if (!alive) return;
        setEvent(ev);
        setAttendees(list);
      } catch (e) {
        if (!alive) return;
        setErr(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [id]);

  const ui = useMemo(() => {
    if (!event) return {};
    const ovObj = typeof event.overview === "object" ? event.overview : null;
    return {
      title: event.title ?? "Untitled event",
      overviewText:
        (typeof event.overview === "string" && event.overview) ||
        event.discerption ||
        event.description ||
        ovObj?.intro ||
        "",
      location: event.location || "",
      capacity: event.capacity ?? "",
      image: event.image || null,
    };
  }, [event]);

  function handleEdit() {
    navigate(`/events/${id}/edit`);
  }
  async function handleDelete() {
    if (!window.confirm(`Delete "${ui.title}"?`)) return;
    setDeleting(true);
    try {
      await deleteEvent(id);
      navigate("/events");
    } catch (e) {
      console.error(e);
      alert("Failed to delete.");
    } finally {
      setDeleting(false);
    }
  }

  async function onRemove(userKey) {
    if (!window.confirm("Remove this attendee?")) return;
    setBusy(true);
    try {
      await removeAttendee(id, userKey);
      setAttendees(prev => prev.filter(a => (a.userID ?? a.id ?? a.email) !== userKey));
    } finally {
      setBusy(false);
    }
  }

  async function onSendAcceptance() {
    setBusy(true);
    try {
      const ids = attendees.map(a => a.userID ?? a.id ?? a.email);
      await sendAcceptances(id, ids);
      alert("Acceptance sent (mock).");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <div className="container py-4">Loading…</div>;
  if (err) return <div className="container py-4 text-danger">Error: {err.message}</div>;

  return (
    <div className="container py-4" style={{ maxWidth: 1120 }}>
      <div className="mb-3">
        <div className="d-flex align-items-center gap-2">
          <Link to="/events" className="btn btn-sm" aria-label="Back">
            <i className="bi bi-arrow-left fs-4" aria-hidden="true" />
          </Link>
          <h2
            className="mb-0 fw-bold text-truncate"
            style={{ maxWidth: "calc(100% - 56px)" }}
            title={ui.title}
          >
            {ui.title}
          </h2>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button className="btn btn-danger rounded-pill" onClick={handleDelete} disabled={deleting}>
            {deleting ? "Deleting..." : "Delete"}
          </button>
          <button className="btn btn-primary rounded-pill" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>

      <EventHeaderCard
        title={ui.title}
        overviewText={ui.overviewText}
        startsAt={event?.startsAt}
        endsAt={event?.endsAt}
        location={ui.location}
        capacity={ui.capacity}
        image={ui.image}
      />

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white border-0 pt-3 px-3 pb-0">
          <div className="d-flex align-items-center justify-content-between">
            <ul className="nav nav-pills card-header-pills gap-2 mb-2 mb-sm-0" role="tablist">
              <li className="nav-item">
                <NavLink
                  to={`/events/${id}/overview`}
                  end
                  className={({ isActive }) =>
                    `nav-link rounded-pill px-4 py-2 fw-semibold ${isActive ? "active" : ""}`
                  }
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/events/${id}/attendees`}
                  className={({ isActive }) =>
                    `nav-link rounded-pill px-4 py-2 fw-semibold ${isActive ? "active" : ""}`
                  }
                >
                   Attendees
                </NavLink>
              </li>
            </ul>

            <button
              className="btn btn-primary rounded-pill text-nowrap"
              onClick={onSendAcceptance}
              disabled={!attendees.length || busy}
            >
              Send Acceptance
            </button>
          </div>
        </div>

        <div className="card-body">
          <div className="d-none d-lg-block">
            <div className="rounded-3 px-3 py-2 mb-2" style={{ background: "#f1f3f5" }}>
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <span className="small text-secondary">Users</span>
                </div>
                <div className="col-5 d-flex align-items-center">
                  <span className="small text-secondary">E-mail</span>
                </div>
                <div className="col-1 text-end" />
              </div>
            </div>
          </div>

          <div className="list-group list-group-flush">
            {attendees.map((a, idx) => {
              const displayName = getDisplayName(a);
              const initials = toInitialsFromObj(a);
              const key = a.userID ?? a.id ?? a.email ?? `${displayName}-${idx}`;

              return (
                <div key={key} className="list-group-item px-0">
                  <div className="row align-items-center g-2">
                    <div className="col-12 col-lg-6">
                      <div className="d-flex align-items-center gap-2">
                        <input className="form-check-input me-2" type="checkbox" />
                        <div
                          className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center border"
                          style={{ width: 36, height: 36 }}
                          title={displayName}
                        >
                          <span className="small text-secondary fw-semibold">
                            {initials}
                          </span>
                        </div>
                        <span className="fw-semibold">{displayName || "—"}</span>
                      </div>
                    </div>

                    <div className="col-12 col-lg-5">
                      <span className="text-secondary">{a.email}</span>
                    </div>

                    <div className="col-12 col-lg-1">
                      <div className="d-flex justify-content-lg-end">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          title="Remove"
                          onClick={() => onRemove(a.userID ?? a.id ?? a.email)}
                          disabled={busy}
                        >
                          <i className="bi bi-trash" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {!attendees.length && (
              <div className="list-group-item text-center text-secondary py-5">
                No attendees yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
