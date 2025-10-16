import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">ROSIEE :)</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/contact">Contact</Link>
      </div>


      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
