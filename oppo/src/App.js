import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MembersTable from './components/MembersTable';
import AddUserModal from './components/AddUserModal';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 className="custom-title">My Title</h1>

        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Members List</h2>
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              Add Member
            </button>
          </div>
          <Sidebar />

          <MembersTable />
        </div>

        <AddUserModal show={showModal} handleClose={() => setShowModal(false)} />
      </header>
    </div>
  );
}

export default App;