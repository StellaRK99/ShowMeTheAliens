import React from 'react'
import { Link } from "react-router-dom";
import alien from '../alien.png';
import '../App.css'
function Navbar() {
    return (
        <div className="nav-bar">  
            <div className="logo-container">
                <Link to="/"> 
                    <img className="App-logo" src={alien}/>
                </Link>
            </div>          
            <nav>
                <Link to="/About">About</Link>
                <Link to="/UFOSightings">UFO Sightings</Link>
                <Link to="/FirstHandAccounts">Firsthand Accounts</Link>
            </nav>
        </div>
    )
}

export default Navbar;