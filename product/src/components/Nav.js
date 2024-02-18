import './Nav.css';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.js';
import Buddies from '../pages/buddies.js';
import pup from './assets/pup.png';
import AboutUs from '../pages/AboutUs.js';
  

function Nav(props) {
  return (
    <div id = "Nav">
        <div id = "title">
            <h1>BuddyUp</h1>
            <img id = "pup" src={pup} alt = "pup logo"/>
        </div>
        <BrowserRouter>
        <div id = "links">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/buddies">Buddies</NavLink>
            <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
        </div>
        <Routes>

            <Route path = "/" index element={<Home />} />
            <Route path="/buddies" element={<Buddies />} />
            <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default Nav; // Export the component