import React from "react";
import "./pages.css";

function About() {
  return (
    <div className="page">
      <div className="overlay">
        <h1>About Me 🌸</h1>
        <p>
          Hi! I’m <strong>Rose</strong>, a student currently studying{" "}
          <strong>Bachelor in Information Technology</strong> at{" "}
          <strong>CTU Danao Campus</strong>.
        </p>
        <p>
         I enjoy learning new things and pushing myself to grow every day. Studying isn’t always easy, but I’m thankful for the support I get from my family, and my friends they keep me motivated to finish college. Through my experiences, I’ve learned how important time management and self-motivation are, and these are skills I’m proud to have as I continue my journey. Below is my strength, goals and interest.
        </p>

        <h2>💪 Strength</h2>
        <ul className="list">
          <li>I’m always eager to learn new things and improve myself.</li>
          <li>I’m open to feedback, even if it’s negative, because I know it helps me grow.</li>
          <li>I try to stay positive and patient, even when things get difficult.</li>
        </ul>

        <h2>🎯 Goals</h2>
        <ul className="list">
          <li>I want to build a strong foundation that will help me in my future career.</li>
          <li>
           I hope to gain real-world experience through internships or school projects.
          </li>
          <li>
            My dream is to have a good future and get a stable job in the field of programming.
          </li>
        </ul>

        <h2>🌿 Interest</h2>
        <p>
          In my free time, I enjoy{" "}
          <strong>
            scrolling at tiktok, playing music, watching
            movies, whatching paranormal investigation, and dancing some trend on tiktok.]
          </strong>
          . These hobbies help me to relax and not thinking much.
        </p>
      </div>
    </div>
  );
}

export default About;
