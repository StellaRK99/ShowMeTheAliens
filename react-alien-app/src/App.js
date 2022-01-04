import React from 'react';
import 'react-router-dom';
import alien from './alien.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={alien} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
