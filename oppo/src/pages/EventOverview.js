// src/pages/EventOverview.js
import { useEffect, useState, useMemo } from "react";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { getEvent, deleteEvent } from "../services/eventsApi";
import EventHeaderCard from "../components/EventHeaderCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function EventOverview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setErr(null);
    getEvent(id)
      .then((data) => active && setEvent(data))
      .catch((e) => active && setErr(e))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [id]);

  const ui = useMemo(() => {
    if (!event) return {};
    const overviewObj = event.overview && typeof event.overview === "object" ? event.overview : null;

    return {
      title: event.title ?? "Untitled event",
      overviewText:
        (typeof event.overview === "string" && event.overview) ||
        event.discerption ||
        event.description ||
        overviewObj?.intro ||
        "",
      keyHighlights: Array.isArray(overviewObj?.keyHighlights) ? overviewObj.keyHighlights : [],
      location: event.location || "",
      capacity: event.capacity ?? "",
      status: event.status || "",
      type: event.type || "",
      createdBy: event.createdBy || "",
      userPrice: event.userPrice ?? null,
      memberPrice: event.memberPrice ?? null,
      image: event.image || null,
    };
  }, [event]);

  function handleEdit() {
    navigate(`/events/${id}/edit`);
  }

  async function handleDelete() {
    if (!window.confirm(`Delete "${ui.title}"?`)) return;
    try {
      await deleteEvent(id);
      navigate("/events");
    } catch (e) {
      console.error(e);
      alert("Failed to delete.");
    }
  }

  if (loading) return <div className="container py-4">Loading…</div>;
  if (err) return <div className="container py-4 text-danger">Error: {err.message}</div>;
  if (!event) return <div className="container py-4">Event not found.</div>;

  return (
    <div className="container py-4" style={{ maxWidth: 1120 }}>
      <div className="mb-3">
        <div className="d-flex align-items-center gap-2">
          <Link to="/events" className="btn btn-sm" aria-label="Back">
            <i className="bi bi-arrow-left fs-4" aria-hidden="true" />
          </Link>
          <h2 className="mb-0 fw-bold text-truncate" style={{ maxWidth: "calc(100% - 56px)" }} title={ui.title}>
            {ui.title}
          </h2>
        </div>

        <div className="d-flex justify-content-end gap-2 mt-2">
          <button className="btn btn-danger rounded-pill" onClick={handleDelete}>Delete</button>
          <button className="btn btn-primary rounded-pill" onClick={handleEdit}>Edit</button>
        </div>
      </div>

      <EventHeaderCard
        title={ui.title}
        overviewText={ui.overviewText}
        startsAt={event.startsAt}
        endsAt={event.endsAt}
        location={ui.location}
        capacity={ui.capacity}
        image={ui.image}
        badges={{
          status: ui.status,
          type: ui.type,
          createdBy: ui.createdBy,
          userPrice: ui.userPrice,
          memberPrice: ui.memberPrice,
        }}
      />

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-header bg-white border-0 pt-3 px-3 pb-0">
          <ul className="nav nav-pills card-header-pills gap-2" role="tablist">
            <li className="nav-item">
              <NavLink
                to={`/events/${id}/overview`}
                end
                className={({ isActive }) => `nav-link rounded-pill px-4 py-2 fw-semibold ${isActive ? "active" : ""}`}
              >
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`/events/${id}/attendees`}
                className={({ isActive }) => `nav-link rounded-pill px-4 py-2 fw-semibold ${isActive ? "active" : ""}`}
              >
                Attendees
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="card-body">
          {ui.overviewText ? (
            <>
              <p className="mb-3">{ui.overviewText}</p>
              {ui.keyHighlights.length > 0 && (
                <>
                  <h6 className="fw-bold">Key Highlights</h6>
                  <ul className="mb-0">
                    {ui.keyHighlights.map((k, i) => (
                      <li key={i} className="text-secondary">{k}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          ) : (
            <p className="mb-0 text-secondary">No overview provided.</p>
          )}
        </div>
      </div>
    </div>
  );
}
