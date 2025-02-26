import React from "react";
import "./Features.css"; // Import the custom CSS
import analyticsDashboard from "../assets/analytics-dashboard.png";
import easy_registeration from "../assets/easy-registration.jpeg";
import secure_data
from "../assets/easy-registration.jpeg";
const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <p className="features-subtitle">
        Empower your business with our intuitive registration platform.
      </p>
      <div className="feature-cards">
        <div className="feature-card">
        
          <img src={analyticsDashboard} alt="Analytics Dashboard" className="feature-icon" />
          <h3>Easy Registration</h3>
          <p>Register your business effortlessly in a few simple steps.</p>
        </div>
        <div className="feature-card">
        
        <img src={easy_registeration} alt="Analytics Dashboard" className="feature-icon" />

         
          <h3>Secure Data</h3>
          <p>Your data is safeguarded with state-of-the-art security protocols.</p>
        </div>
        <div className="feature-card">
        <img src={secure_data} alt="Analytics Dashboard" className="feature-icon" />

          <h3>Analytics Dashboard</h3>
          <p>Gain valuable insights with real-time analytics and reports.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
