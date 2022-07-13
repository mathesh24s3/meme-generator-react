import React from "react";
import '../styles/header.css'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="images/TrollFace.png" className="header--logo_img" />
        <h2 className="header--logo_text">Meme Generator</h2>
      </div>
      <nav>
        <h4>React Course - Project 3</h4>
      </nav>
    </header>
  );
}
