import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Profile from "./Pages/profile";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
