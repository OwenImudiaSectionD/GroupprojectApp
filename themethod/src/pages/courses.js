import React, { useState, useEffect } from 'react';

export default function CoursesPage() {
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null); // Initialize as null

  const courses = [
    { id: 1, title: "Advanced Front-End Programming", description: "Dive deeper into front-end programming using React.", rating: 4.5, image: "https://picsum.photos/80/80?random=1" },
    { id: 2, title: "Fundamentals of Numeric Computing", description: "Use Python to understand math fundamentals.", rating: 4.7, image: "https://picsum.photos/80/80?random=2" },
    { id: 3, title: "Database Programming", description: "Explore database programming.", rating: 4.2, image: "https://picsum.photos/80/80?random=3" },
    { id: 4, title: "Object-Oriented Programming", description: "Understand OOP principles.", rating: 4.3, image: "https://picsum.photos/80/80?random=4" },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (filter && filteredCourses.length < courses.length && !notification) {
      setNotification("Courses filtered!");
    } else if (filteredCourses.length === courses.length && notification) {
      setNotification(null);
    }
  }, [filter, filteredCourses.length, courses.length, notification]);

  return (
    <div>
      <div className="container">
        <h1>Courses Page</h1>
        {notification && (
          <div className="notification">
            {notification}
          </div>
        )}
        <input
          type="text"
          placeholder="Filter courses"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <p className="course-rating">Our Rating: {course.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}
