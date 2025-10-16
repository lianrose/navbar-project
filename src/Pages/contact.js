import React from "react";
import "./pages.css";

function Contact() {
  return (
    <section className="page contact">
      <div className="overlay">
        <h1>Contact Me 💌</h1>
        <p>Feel free to reach out! I’d love to connect with you. 💬</p>

        <ul className="contact-list">
          <li><strong>📧Email:</strong> rlimutan4@gmail.com</li>
          <li><strong>ⓕFacebook:</strong> <a href="#">https://www.facebook.com/lianrose.limutan</a></li>
          <li><strong>🅾Instagram:</strong> <a href="#">limutan.r</a></li>
          <li><strong>♪TikTok:</strong> <a href="#">@lianrose24</a></li>
        </ul>

        <p className="thankyou">💖 Thank you for taking the time to read my portfolio!</p>
      </div>
    </section>
  );
}

export default Contact;
