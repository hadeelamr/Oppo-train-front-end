import React from "react";
import "./App.css";
import SetPass from "./components/SetPass"; // استدعاء صفحة SetPass

function App() {
  return (
<<<<<<< HEAD
    <div>
      <SetPass />
    </div>
=======
    <Router>
      <Routes>
        {}
        <Route path="/" element={<Login />} />

        {}
        <Route path="/forget" element={<Forget />} />

        {}
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
>>>>>>> 4def0c06340a3661f856c45e60c35cad118fa81a
  );
}

export default App;
