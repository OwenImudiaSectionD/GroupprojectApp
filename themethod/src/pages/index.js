import React, { useState } from 'react';

export default function Homepage() {
  const [greeting, setGreeting] = useState("Welcome to the Homepage!");
  const [notification, setNotification] = useState("");

  const changeGreeting = () => {
    setGreeting("Thanks for visiting us today!");
    setNotification("Homepage greeting updated!");
  };

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {notification && <p>{notification}</p>}
      <button onClick={changeGreeting}>Update Greeting</button>
    </div>
  );
}
