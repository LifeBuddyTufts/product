import React from 'react'; // Import React library

// Define a functional component
function Nav(props) {
  return (
    <div>
      <Tabs aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
    </div>
  );
}

export default Nav; // Export the component