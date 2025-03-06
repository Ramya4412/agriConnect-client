import { Link, useNavigate } from "react-router-dom";
export default function Hero() {
  const nav = useNavigate();
    return (
      <section className="hero">
        <h1>Empowering Agriculture with Technology</h1>
        <p>Innovative solutions for sustainable farming.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>
    );
  }