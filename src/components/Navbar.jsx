import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="logo">
        AL <span>AMIN</span>
      </div>

      <div
        className="menu"
        id="menu"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      <ul
        className={`nav-links ${menuOpen ? "active" : ""}`}
        id="navLinks"
      >
        <li>
          <a href="#home" onClick={handleNavClick}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={handleNavClick}>
            Skills
          </a>
        </li>

        <li>
          <a href="#experience" onClick={handleNavClick}>
            Experience
          </a>
        </li>

        <li>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
        </li>

        <li>
          <a href="#services" onClick={handleNavClick}>
            Services
          </a>
        </li>

        <li>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;