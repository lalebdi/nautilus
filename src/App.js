import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboveNavBar from './components/AboveNavBar';
import BelowNavBar from './components/BelowNavBar';
function App() {
  return (
    <div className="App">
      <h1>The Nautilus Morning Assigment</h1>
      <AboveNavBar />
      <NavBar />
      <BelowNavBar />
    </div>
  );
}

export default App;
