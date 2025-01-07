import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <nav id="main-navbar">
      <img src="/images/logo.png" alt="Logo" />
      <a href="#about">O nas</a>
      <a href="#process">Proces zgłoszenia</a>
      <a href="#project">Cel Projektu</a>
      <a href="#contact">Kontakt</a>
    </nav>
  );
}

export default Navbar;