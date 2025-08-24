import React from "react";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#5092bfff", 
        color: "#154360", 
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <div
          className="rounded-circle d-flex justify-content-center align-items-center me-2"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#154360", 
            color: "#ffffff",
          }}
        >
          <i className="bi bi-diagram-3"></i>
        </div>
        <span className="fs-6 fw-bold">
          AIAS<br />
          CHAPTER
        </span>
      </div>
      <hr style={{ borderColor: "#154360" }} />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link" style={{ color: "#154360" }}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a
            href="#!"
            className="nav-link active fw-bold"
            style={{
              backgroundColor: "#ffffff",
              color: "#154360",
            }}
          >
            <i className="bi bi-people me-2"></i>
            Members
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link" style={{ color: "#154360" }}>
            <i className="bi bi-calendar-event me-2"></i>
            Events
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link" style={{ color: "#154360" }}>
            <i className="bi bi-folder2-open me-2"></i>
            Resources
          </a>
        </li>
      </ul>
      <hr style={{ borderColor: "#125279ff" }} />
      <div>
        <a href="#!" className="nav-link" style={{ color: "#175073ff" }}>
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
