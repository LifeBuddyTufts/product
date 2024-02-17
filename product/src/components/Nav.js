import React from 'react'; // Import React library

// Define a functional component
function Nav(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default Nav; // Export the component