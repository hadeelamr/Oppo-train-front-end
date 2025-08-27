
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MembersTable from "./components/MembersTable";
import Sidebar from "./components/Sidebar";
import Events from './pages/EventsPage';
import Resources from './pages/Resources/ResourcesManagement';
import TripsPage from "./pages/TripsPage";
import EventOverview from "./pages/EventOverview";
import EventAttendees from "./pages/EventAttendees";
import AddEventPage from "./pages/AddEventPage";
import EditEventPage from "./pages/EditEventPage"; 

export default function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<MembersTable />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/new" element={<AddEventPage />} />
            <Route path="/events/:id" element={<Navigate to="overview" replace />} />
            <Route path="/events/:id/overview" element={<EventOverview />} />
            <Route path="/events/:id/attendees" element={<EventAttendees />} />
            <Route path="/events/:id/edit" element={<EditEventPage />} /> 
            <Route path="/trips" element={<TripsPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<Navigate to="/events" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
