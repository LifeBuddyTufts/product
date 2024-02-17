import React from 'react'; // Import React library
import './Nav.css';import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Define a functional component
function Nav(props) {
  return (
    <div>
      <Tabs aria-label="basic tabs example">
          <Tab label="Home" />
        <Tab bel="Buddies" />
      <divlabel="Buddies" />
          <Tab label="Contact" />
        </Tabs>
    </div>
  );
}

export default Nav; // Export the component