import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventOverview from "./pages/EventOverview.js";
import EventAttendees from "./pages/EventAttendees.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events/:id/overview" element={<EventOverview />} />
        <Route path="/events/:id/attendees" element={<EventAttendees />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
