import { Link, useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const nav = useNavigate();
  return (
    <section className="hero">
      <h1 className="hero-title">Empowering Agriculture with Technology</h1>
      <p className="hero-text">Innovative solutions for sustainable farming.</p>
      <Link to="/signup" className="cta-button">Get Started</Link>
    </section>
  );
}
