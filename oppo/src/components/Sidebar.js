import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => (
    <div className="bg-light vh-100 p-3 border-end d-flex flex-column justify-content-between" style={{ width: '250px' }}>
        <div>
            <h5 className="mb-4">AIAS Chapter University</h5>
            <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link active" href="#">Members</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
            </ul>
        </div>
        <button className="btn btn-outline-danger mt-4">Logout</button>
    </div>
);

export default Sidebar;