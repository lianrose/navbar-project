import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ padding: "100px", textAlign: "center" }}>
        <h1>WELCOME TO ROSSIE'S WEBSITE 🐢</h1>
        <p>"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." – Philippians 4:6</p>
      </section>
    </div>
  );
}

export default App;

