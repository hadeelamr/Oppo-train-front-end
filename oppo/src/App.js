import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MembersTable from "./components/MembersTable";
import Sidebar from "./components/Sidebar";
import Events from './pages/EventsPage';
import Resources from './pages/Resources/ResourcesManagement';
import Login from './components/Login'; 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
       <Route path="/" element={<Login />} />
      </Routes>

      {isLoggedIn && (
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1 p-4">
            <Routes>
              <Route path="/members" element={<MembersTable />} />
              <Route path="/events" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
