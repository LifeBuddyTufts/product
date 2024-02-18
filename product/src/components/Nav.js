// import React, { useState } from 'react';
// import { useNavigate, Route, Routes, Link } from 'react-router-dom';
// import './Nav.css';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
  

// function Nav(props) {
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
//   return (
//     <div id = "Nav">
//         <h1>Life Buddy</h1>
//       <Tabs onChange={handleChange} value={value} aria-label="basic tabs example">
//         <Tab label="Home" />
//         <Tab label="Buddies" />
//         <Tab label="Contact" />
//       </Tabs>
//     </div>
//   );
// }

function Nav () {
    // <Routes>        
    //   <Route path="/Home"  element={<Home/>} />
    //   <Route path="/Buddies"  element={<buddies />}/>
    // </Routes>
}

export default Nav; // Export the component