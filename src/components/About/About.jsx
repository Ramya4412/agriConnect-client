import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Us</h2>
      <div className="spacer"></div>
      <p className="about-text">
        We provide smart farming solutions to enhance productivity and sustainability.
      </p>
      <div className="about-card">
        <img 
          src="https://cosmosmagazine.com/wp-content/uploads/2020/02/180606-agriculture-full.jpg" 
          alt="Farming Image" 
          className="about-image"
        />
      </div>
    </section>
  );
}
