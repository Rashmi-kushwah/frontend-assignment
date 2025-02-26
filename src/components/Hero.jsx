import React from "react";
import "./Hero.css"; // CSS Import

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Register Karo</h1>
        <p>Get started with the best registration platform today.</p>
        <button className="get-started-btn" onClick={() => alert("Redirecting to Get Started Page")}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
