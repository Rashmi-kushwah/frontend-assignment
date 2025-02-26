import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        {/* Logo + Text Container */}
        <div className="logo">
          <img src="data:image/jpeg;base64,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" alt="Logo" />
          <span>Register Karo</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Sign Up Button */}
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
