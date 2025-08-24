import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Sidebar.css'; 

const Sidebar = () => (
    <div className="sidebar vh-100 p-3 border-end d-flex flex-column justify-content-between" style={{ width: '250px' }}>
        <div>
            <h5 className="mb-4">AIAS Chapter University</h5>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active d-flex align-items-center" href="#">
                        <i className="bi bi-people-fill me-2"></i> Members
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="#">
                        <i className="bi bi-calendar-event-fill me-2"></i> Events
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-flex align-items-center" href="#">
                        <i className="bi bi-journal-text me-2"></i> Resources
                    </a>
                </li>
            </ul>
        </div>
        <button className="btn btn-outline-danger mt-4 d-flex align-items-center">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
        </button>
    </div>
);
export default Sidebar;