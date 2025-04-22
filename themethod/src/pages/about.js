import React from 'react';

export default function AboutUs() {
  const profiles = [
    {
      name: "Owen Imudia",
      quote: "ayy i steal yall gif",
      image: "https://picsum.photos/200/300?random=1",
      description: "Designed the front-end.",
    },
    {
      name: "Isaac Williams",
      quote: "there’s a guy tweaking on fent infront of the school",
      image: "https://picsum.photos/200/300?random=2",
      description: "Designed routing and front-end.",
    },
    {
      name: "Antonio Carlos",
      quote: "js bing chilling",
      image: "https://picsum.photos/200/300?random=3",
      description: "CSS Designed home and contact pages.",
    },
    {
      name: "Jerome Mangala",
      quote: "Thus is the first time this teacher has actually not crashed out",
      image: "https://picsum.photos/200/300?random=4",
      description: "Designed state management and layout structuring.",
    },
    {
      name: "Aareez Khan",
      quote: "Can it generate eldritch horrors",
      image: "https://picsum.photos/200/300?random=5",
      description: "CSS Designed about us and courses pages.",
    },
  ];

  return (
    <div className="profile-container">
      <h1>About Us</h1>
      <div className="profile-grid profile-grid-center">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <img src={profile.image} alt={profile.name} className="profile-image" />
            <h2 className="profile-name">{profile.name}</h2>
            <p>{profile.description}</p>
            <p className="profile-quote">"{profile.quote}"</p>
          </div>
        ))}
      </div>
      <div style={{ height: '100px' }}></div>
    </div>
  );
}