import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Our Vision Section */}
      <h2 className="vision-title">Our Vision</h2>
      <p className="about-text">
        AgriConnect is dedicated to bridging the gap between farmers and consumers by leveraging 
        technology to create a seamless farm-to-market ecosystem.
      </p>
      <div className="image-card">
        <img 
          src="public\agriculture-tech.jpeg" 
          alt="Agriculture Tech" 
          className="about-image"
        />
      </div>

      {/* Our Mission Section */}
      <h2 className="mission-title">Our Mission</h2>
      <p className="about-text">
        Our mission is to empower farmers with digital tools to ensure better productivity, 
        sustainability, and economic growth while providing consumers access to fresh farm produce.
      </p>
      <div className="image-card">
        <img 
          src="public\Sustainable Farming.jpg" 
          alt="Sustainable Farming" 
          className="about-image"
        />
      </div>

      {/* Why Choose Us Section */}
      <h2 className="why-title">Why Choose AgriConnect?</h2>
      <ul className="about-list">
  <li>
    <span className="icon">🌱</span>
    <span className="text">Fresh & Organic Produce</span>
    <span className="dash">-</span>
    <span className="description">Directly from farms</span>
  </li>
  <li>
    <span className="icon">💰</span>
    <span className="text">Fair Prices</span>
    <span className="dash">-</span>
    <span className="description">No middlemen, better earnings for farmers</span>
  </li>
  <li>
    <span className="icon">📊</span>
    <span className="text">Real-Time Market Insights</span>
    <span className="dash">-</span>
    <span className="description">Smart pricing decisions</span>
  </li>
  <li>
    <span className="icon">🚚</span>
    <span className="text">Fast & Reliable Delivery</span>
    <span className="dash">-</span>
    <span className="description">Ensuring fresh produce at your doorstep</span>
  </li>
  <li>
    <span className="icon">🔒</span>
    <span className="text">Secure Payments & Logistics</span>
    <span className="dash">-</span>
    <span className="description">Safe transactions and efficient supply chain</span>
  </li>
</ul>

      <div className="image-card">
        <img 
          src="public\Farm Products.jpg" 
          alt="Farm Products" 
          className="about-image"
        />
      </div>

      {/* Our Impact Section */}
      <h2 className="impact-title">Our Impact in Numbers</h2>
      <div className="impact-grid">
        <div className="impact-box">👩‍🌾 Farmers will be Empowered</div>
        <div className="impact-box">📦 Orders Delivered</div>
        <div className="impact-box">🌍 Operating in 10+ Regions</div>
        <div className="impact-box">💵 20% Higher Earnings for Farmers</div>
      </div>

      {/* Meet Our Farmers Section */}
      <h2 className="farmers-title">Meet Our Farmers</h2>
      <div className="farmers-container">
        <div className="farmer-card">
          <img src="public\Organic Wheat Farmer.jpg" alt="Farmer 1" className="farmer-image"/>
          <p>👨‍🌾 Rajesh Kumar - Organic Wheat Farmer</p>
        </div>
        <div className="farmer-card">
          <img src="public\Fresh Vegetable Producer.jpg" alt="Farmer 2" className="farmer-image"/>
          <p>👩‍🌾 Maria Lopez - Fresh Vegetable Producer</p>
        </div>
        <div className="farmer-card">
          <img src="public\Sustainable Rice Farming.jpg" alt="Farmer 3" className="farmer-image"/>
          <p>👴 Ahmed Ali - Sustainable Rice Farming</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <h2 className="testimonials-title">What Farmers Say</h2>
      <blockquote className="testimonial">
        "AgriConnect helped me sell my crops at fair prices without worrying about middlemen!"
      </blockquote>

      {/* Contact Section */}
      <h2 className="contact-title">Get in Touch</h2>
      <p className="about-text">
        Have questions? Want to join as a farmer or consumer? Reach us at:
      </p>
      <p className="contact-info">📧 Email: support@agriconnect.com | 📞 Phone: +123 456 7890</p>
    </div>
  );
};

export default AboutUs;
