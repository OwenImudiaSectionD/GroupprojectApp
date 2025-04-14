import React from 'react';
import { Link } from 'react-router-dom';

function Contactpage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Here's how you can get in touch with us.</p>
      {/* Add contact form or details here */}
      <br />
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Contactpage;