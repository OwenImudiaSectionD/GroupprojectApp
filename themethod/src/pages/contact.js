import React, { useState } from 'react';

export default function ContactPage({ notification, updateNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNotification("Thank you for reaching out! We'll get back to you shortly.");
  };

  return (
    <div className="container">
      <h1>Contact Page</h1>
      {notification && <p style={{ color: 'green' }}>{notification}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <br />
        <input 
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
