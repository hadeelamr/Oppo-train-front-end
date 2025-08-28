
import React from "react";

function toDate(value) {
  if (!value) return null;
  if (typeof value?.toDate === "function") return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === "number") return new Date(value);
  if (typeof value === "string") {
    let s = value.trim().replace(/\u202f/g, " ").replace(/\s+at\s+/i, " ");
    s = s.replace(/UTC([+-])(\d{1,2})\b/i, (_, sign, h) => `${sign}${String(h).padStart(2, "0")}:00`);
    const d = new Date(s);
    if (!isNaN(d)) return d;
  }
  if (value && typeof value === "object" && typeof value.seconds === "number") {
    const ms = value.seconds * 1000 + Math.floor((value.nanoseconds || 0) / 1e6);
    return new Date(ms);
  }
  return null;
}
function fmtDate(d) {
  if (!d) return "";
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "2-digit", year: "numeric" }).format(d);
}
function fmtTimeRange(start, end) {
  const s = toDate(start);
  const e = toDate(end);
  if (!s) return "";
  const f = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
  return e ? `${f.format(s)} – ${f.format(e)}` : f.format(s);
}

export default function EventHeaderCard({
  title = "Untitled event",
  overviewText = "",
  startsAt,
  endsAt,
  location = "",
  capacity = "",
  image = null,
  badges = {},
}) {
  const dateLabel = fmtDate(toDate(startsAt));
  const timeLabel = fmtTimeRange(startsAt, endsAt);

  return (
    <div className="card border-0 shadow-sm rounded-4 mb-3">
      <div className="card-body">
        <div className="row g-3 align-items-center">
          <div className="col-lg-5">
            {image ? (
              <img
                src={image}
                alt={title}
                className="img-fluid rounded-3"
                style={{ height: 220, objectFit: "cover", width: "100%" }}
              />
            ) : (
              <div className="bg-light rounded-3 d-flex align-items-center justify-content-center" style={{ height: 220 }}>
                <i className="bi bi-image fs-1 text-secondary" aria-hidden="true" />
              </div>
            )}
          </div>

          <div className="col-lg-7">
            <h3 className="fw-bold mb-1">{title}</h3>
            {overviewText && <p className="text-secondary mb-3">{overviewText}</p>}

            <ul className="list-unstyled small text-secondary mb-3">
              <li className="mb-2">
                <i className="bi bi-calendar me-2" aria-hidden="true" />
                <strong className="me-1">Date:</strong>{dateLabel}
              </li>
              <li className="mb-2">
                <i className="bi bi-clock me-2" aria-hidden="true" />
                <strong className="me-1">Time:</strong>{timeLabel}
              </li>
              <li className="mb-2">
                <i className="bi bi-pin-map me-2" aria-hidden="true" />{location}
              </li>
              <li>
                <i className="bi bi-people me-2" aria-hidden="true" />{capacity}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
