// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TripsPage from "./pages/TripsPage";
import EventsPage from "./pages/EventsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Navigate to="/trips" replace />} />

        
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/events" element={<EventsPage />} />

      
        <Route path="*" element={<Navigate to="/trips" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
