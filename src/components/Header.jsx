import { useState } from "react";


export default function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="login-signup">
          <a href="#login" className="login">Login</a>
          <a href="#signup" className="signup">Sign Up</a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <a href="/" className="logo">AGRICONNECT</a>
        
        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">HOME</a></li>
          <li><a href="#">MARKET</a></li>
          <li><a href="#">CROP CONVERTER</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>
    </>
  );
}