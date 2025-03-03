import { useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="login-signup">
          <Link to="/LoginForm" className="login">Login</Link>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <a href="/" className="logo">AGRICONNECT</a>
        
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">PROFILE</a></li>
          <li><a href="#">PRODUCT</a></li>
          <li><a href="#">ORDERS</a></li>
        </ul>
      </nav>
    </>
  );
}