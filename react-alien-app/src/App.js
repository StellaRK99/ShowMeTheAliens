import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './Pages/About'
import Accounts from './Pages/Accounts'
import Sightings from './Pages/Sightings'
import Home from './Pages/Home'
import Navbar from '../src/Components/Navbar'
import 'react-router-dom';
import alien from './alien.png';
import './App.css';

function App() {
  document.title = "Home"
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path ="/About" element= {<About />} />
        <Route path ="/FirstHandAccounts" element= {<Accounts />} />
        <Route path ="/UFOSightings" element= {<Sightings />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
