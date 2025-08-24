import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MembersTable from './components/MembersTable';
import Sidebar from './components/Sidebar';
import Forget from './components/forget';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* صفحة تسجيل الدخول */}
        <Route path="/" element={<Login />} />

        {/* صفحة نسيت كلمة المرور */}
        <Route path="/forget" element={<Forget />} />

        {/* صفحة الداشبورد */}
        <Route
          path="/dashboard"
          element={
            <div className="d-flex">
              <Sidebar />
              <div className="flex-grow-1 bg-light">
                <MembersTable />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
