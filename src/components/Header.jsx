import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaGlobe } from "react-icons/fa"; // Icons
import { NavLink } from "react-router-dom";
import "./Header.css"; // Import CSS file

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("selectedLanguage", e.target.value);
  };

  return (
    <>
      {/* Top Bar (Language + Auth) */}
      <div className="top-bar">
        {/* Language Dropdown */}
        <div className="language-selector">
          <FaGlobe />
          <select value={language} onChange={handleLanguageChange}>
            <option value="EN">Language (EN)</option>
            <option value="TE">తెలుగు (TE)</option>
            <option value="HI">हिन्दी (HI)</option>
            <option value="TA">தமிழ் (TA)</option>
          </select>
        </div>

        {/* Login / Signup */}
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/LoginForm" className="login">Login</Link>
              <Link to="/signup" className="signup">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="profile">
                <FaUser /> <span>Profile</span>
              </Link>
              <button onClick={logout} className="logout">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <img src="/logo.png" alt="Agri Marketplace Logo" className="logo" />
            <Link to="/" className="brand-title">AGRICONNECT</Link>
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
  <li>
    <NavLink to="/" exact activeClassName="active">
      HOME
    </NavLink>
  </li>
  <li>
    <NavLink to="/aboutus" activeClassName="active">
      ABOUTUS
    </NavLink>
  </li>
  <li>
    <NavLink to="/contact" activeClassName="active">
      CONTACT
    </NavLink>
  </li>
  <li>
    <NavLink to="/market" activeClassName="active">
      MARKET
    </NavLink>
  </li>
</ul>

          {/* Mobile Menu Button */}
          <div className="menu-toggle">
            <button>&#9776;</button>
          </div>
        </div>
      </nav>
    </>
  );
}
