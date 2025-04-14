import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Aboutus() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our team and mission here.</p>
      {/* Add more content specific to the about page */}
      <br />
      <Link to="/">Go back to Home</Link> {/* Example navigation */}
    </div>
  );
}

export default Aboutus;