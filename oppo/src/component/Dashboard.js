import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events dynamically
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const data = await response.json();
        const formattedEvents = data.map(item => ({
          id: item.id,
          title: item.title.split(' ').slice(0, 3).join(' '),
          description: item.body,
          buttonText: "See Details →"
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error(error);
        setEvents([]);
      }
    };
    fetchEvents();
  }, []);

  // Fetch users dynamically
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        const data = await response.json();
        const formattedUsers = data.map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          status: index % 2 === 0 ? "Active" : "Inactive"
        }));
        setUsers(formattedUsers);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setUsers([]);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const activeCount = users.filter(u => u.status === 'Active').length;
  const inactiveCount = users.filter(u => u.status === 'Inactive').length;

  return (
    <div className="container-fluid px-4 py-4">
      {/* Navigation */}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-4 border-bottom">
        <h1 className="h2">{activeNav}</h1>
      </div>

      {activeNav === 'Dashboard' && (
        <>
          {/* User Summary Boxes centered */}
          <div className="d-flex justify-content-center mb-4">
            <div className="d-flex gap-4">
              <div className="card text-white" style={{ backgroundColor: '#89CFF0', width: '500px', height: '120px' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h6 className="card-title mb-1">Active Users</h6>
                  <p className="card-text fs-4 mb-0">{activeCount}</p>
                </div>
              </div>
              <div className="card text-white" style={{ backgroundColor: '#FFB6C1', width: '500px', height: '120px' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h6 className="card-title mb-1">Inactive Users</h6>
                  <p className="card-text fs-4 mb-0">{inactiveCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="row mb-4">
            <h3>Upcoming Events</h3>
            {events.map(event => (
              <div key={event.id} className="col-md-4 mb-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`https://picsum.photos/300/150?random=${event.id}`}
                    className="card-img-top"
                    alt={event.title}
                    style={{ objectFit: 'cover', height: '150px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <p className="card-text" style={{ fontSize: '0.9rem' }}>
                      {event.description.slice(0, 80)}...
                    </p>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => alert(`See details for event: ${event.title}`)}
                      >
                        {event.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Users */}
          <div className="row">
            <h3>Recent Users</h3>
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>E-mail</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
