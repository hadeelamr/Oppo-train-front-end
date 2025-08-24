import React from 'react';
import logo from './logo.svg';
import './App.css';
import MembersTable from "./components/MembersTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
       

        <div className="container mt-5">
      <h1 className="mb-4">Members</h1>
      <MembersTable />
    </div>
      </header>
    </div>
  );
}

export default App;
