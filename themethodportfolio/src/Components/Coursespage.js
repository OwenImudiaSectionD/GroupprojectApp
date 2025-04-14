import React from 'react';
import { Link } from 'react-router-dom';

function Coursespage() {
  return (
    <div>
      <h1>Courses Page</h1>
      <p>Explore the courses we offer.</p>
      {/* Add course listings or details here */}
      <br />
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Coursespage;