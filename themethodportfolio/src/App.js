import React from 'react';
// 1. Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 2. Import your page components (adjust paths if needed)
import Homepage from './Components/Homepage';
import Aboutus from './Components/Aboutus';
import Contactpage from './Components/Contactpage';
import Coursespage from './Components/Coursespage';

// Optional: Import a CSS file for basic styling
import './App.css';

function App() {
  return (
    // 3. Wrap your entire application with BrowserRouter (aliased as Router)
    <Router>
      <div>
        {/* 4. Create Navigation Links using the Link component */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </nav>

        <hr /> {/* A simple separator */}

        {/* 5. Define the Routes */}
        {/* Routes component holds all individual Route definitions */}
        <Routes>
          {/* Each Route maps a URL path to a specific component */}
          {/* The 'element' prop takes the JSX of the component to render */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/courses" element={<Coursespage />} />

          {/* Optional: Add a "catch-all" route for 404 Not Found pages */}
          <Route path="*" element={
            <div>
              <h2>404 Page Not Found</h2>
              <Link to="/">Go to Homepage</Link>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;