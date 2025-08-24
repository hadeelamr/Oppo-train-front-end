import React from 'react';
import logo from './logo.svg';
import './App.css';
import MembersTable from "./components/MembersTable";

function App() {
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

        <h1 className='custom-title'>My Title</h1>
        <div className="container mt-5">
      <h2 className="mb-4">Members List</h2>
      <MembersTable />
    </div>
      </header>
    </div>
  );
}

export default App;
