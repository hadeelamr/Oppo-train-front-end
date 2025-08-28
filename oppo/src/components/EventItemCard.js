
import React from "react";
import { Link } from "react-router-dom";

export default function EventItemCard({
  id,
  variant = "trip",
  imageUrl = "",
  title = "",
  discerption = "",
  overview = "",
  location = "",
  startsAt = "",
  endsAt = "",
  capacity = "",
  memberPrice = "",
  userPrice = "",
  status = "",
  type = "",
  createdBy = "",
  createdAtServer = "",
}) {
  if (variant === "trip") {
    return (
      <div className="card shadow-sm border-0 mb-3 rounded-4">
        <div className="card-body d-flex gap-3 align-items-center p-3">
          {imageUrl ? (
            <img src={imageUrl} alt="" className="rounded-2" width="120" height="80" style={{ objectFit: "cover" }} />
          ) : (
            <div className="rounded bg-light" style={{ width: "120px", height: "80px" }} />
          )}

          <div className="flex-grow-1">
            <h6 className="mb-2 fw-semibold text-dark">{title}</h6>
            <p className="mb-3 small text-muted lh-sm">{discerption}</p>

            <div className="d-flex gap-4">
              <div className="d-flex align-items-center text-muted small">
                <i className="bi bi-geo-alt me-2"></i>
                <span>{location}</span>
              </div>
              <div className="d-flex align-items-center text-muted small">
                <i className="bi bi-calendar3 me-2"></i>
                <span>{startsAt ? new Date(startsAt).toLocaleDateString() : "—"}</span>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center">
            <div className="rounded bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-2" style={{ width: "40px", height: "40px" }}>
              <i className="bi bi-people"></i>
            </div>
            <div className="text-center">
              <div className="fw-bold text-dark">{capacity}</div>
              <div className="small text-muted">Capacity</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4">
      <div className="card-body d-flex flex-column">
        {imageUrl ? (
          <img src={imageUrl} alt="" className="mb-3 rounded-2 w-100" style={{ height: "120px", objectFit: "cover" }} />
        ) : (
          <div className="rounded-2 mb-3 bg-light w-100" style={{ height: "120px" }} />
        )}

        <h6 className="mb-1 fw-semibold">{title}</h6>
        <p className="small text-muted mb-3">{discerption}</p>
        <div className="mt-auto d-flex flex-column gap-2">
          <div className="d-flex justify-content-between small text-muted mb-2">
            <span>
              <i className="bi bi-geo-alt me-1"></i>
              {location}
            </span>
            <span>
              <i className="bi bi-calendar3 me-1"></i>
              {startsAt ? new Date(startsAt).toLocaleDateString() : "—"}
            </span>
          </div>
          <Link to={id ? `/events/${id}/overview` : "#"} className="btn btn-outline-primary btn-sm align-self-start">
            <span>See More</span>
            <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
