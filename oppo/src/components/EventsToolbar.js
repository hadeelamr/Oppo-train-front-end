
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function EventsToolbar({ onSearch }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isTrip = location.pathname.startsWith("/trips");
  const isEvent = location.pathname.startsWith("/events");

  const handleSearchChange = (e) => {
    onSearch?.(e.target.value);
  };

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
      <div>
        <h3 className="mb-2 text-dark">Events Management</h3>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className={`nav-link ${isTrip ? "active" : ""}`} to="/trips">
              Trip
            </NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className={`nav-link ${isEvent ? "active" : ""}`} to="/events">
              Event
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="input-group w-auto" style={{ minWidth: "260px" }}>
          <span className="input-group-text bg-white border-end-0">
            <i className="bi bi-search text-muted"></i>
          </span>
          <input
            className="form-control border-start-0 shadow-none"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </div>
        <button
          className="btn btn-primary px-3"
          onClick={() => navigate("/events/new")}
        >
          Add Event
        </button>
      </div>
    </div>
  );
}
