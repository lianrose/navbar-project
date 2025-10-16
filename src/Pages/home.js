import React from "react";
import "./pages.css";
import background from "../assets/background.jpg"; // add your picture here

function Home() {
  return (
    <section
      className="page home"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="overlay">
        <h1>Hi, I’m Rose! 👋</h1>
        <p>
          Welcome to my student portfolio. I’m Rose Ann G. Limutan, a student currently taking up Information Technology at CTU Danao Campus. This portfolio contain about my strength, goals and interest that I’ve been building along the way. As I continue my journey in the future, I’m excited to share my small information. Feel free to explore and get to know more about me!</p>

        <h2>What You’ll Find Here 🌸</h2>
        <ul className="list">
          <li><strong>About Me:</strong> Learn a little about who I am and what my Interest and hobbies are.</li>
          <li><strong>My Profile:</strong> Where my Information Located.</li>
          <li><strong>Contact:</strong> Find my details and reach out if you’d like to connect!</li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
