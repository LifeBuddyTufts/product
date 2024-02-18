// import React, { useState } from 'react';
// import { useNavigate, Route, Routes, Link } from 'react-router-dom';
import './Nav.css';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.js';
import Buddies from '../pages/Buddies.js';
import pup from './assets/pup.png';


// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
  

function Nav(props) {
//   const [value, setValue] = useState(0); // State to manage active tab
//   const history = useNavigate(); // Get history object from useHistory hook


//   const handleChange = (event, newValue) => {
//     setValue(newValue); // Update active tab
//     // Navigate to corresponding route based on tab index
//     switch (newValue) {
//       case 0:
//         history.push('/home');
//         break;
//       case 1:
//         history.push('/buddies');
//         break;
//       case 2:
//         history.push('/contact');
//         break;
//       default:
//         break;
//     }
//   };
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
            <NavLink className="nav-link" to="/home">Contact</NavLink>
        </div>
        <Routes>

            <Route path = "/" index element={<Home />} />
            <Route path="/buddies" element={<Buddies />} />
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default Nav; // Export the component