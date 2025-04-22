import React, { useState } from 'react';

export default function CoursesPage() {
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState('');

  const courses = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced React" },
    { id: 3, title: "Next.js Fundamentals"},
    { id: 4, title: "Object-Oriented Programming"},
    { id: 5, title: "Database Programming"}
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Courses Page</h1>
      {notification && <p style={{ color: 'white' }}>{notification}</p>}
      <input
        type="text"
        placeholder="Filter courses"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
      {/* Using a local notification handler instead of updateNotification prop */}
      <button onClick={() => setNotification("Courses filtered!")}>
        Notify Filter Change
      </button>
    </div>
  );
}
