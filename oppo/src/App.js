import React from 'react';
import logo from './logo.svg';
import './App.css';
import MembersTable from "./components/MembersTable";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="d-flex">
        <Sidebar />

        <div className="container mt-5">
      <h1 className="mb-4">Members</h1>
      <MembersTable />
    </div>
      </div>
      </header>
    </div>
  );
}

export default App;