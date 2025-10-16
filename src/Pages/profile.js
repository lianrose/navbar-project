import React from "react";
import "./pages.css";

function Profile() {
  return (
    <section className="page profile">
      <div className="overlay">
        <h1>My Profile 👩</h1>
        <ul className="profile-list">
          <li><strong>Name:</strong> Rose Ann G. Limutan</li>
          <li><strong>School:</strong> Cebu Technological University - Danao Campus</li>
          <li><strong>Program:</strong> Bachelor of Science in Information Technology</li>
          <li><strong>Year:</strong> 4th Year College</li>
          <li><strong>Hobbies:</strong> Drawing, Singing, Dancing, Sleeping and Watching movie</li>
        </ul>
      </div>
    </section>
  );
}

export default Profile;
