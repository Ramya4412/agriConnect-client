import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="spacer"></div>
      <div className="services-container">
        {/* First Service */}
        <div className="service-card">
          <h3 className="service-title">Precision Farming</h3>
          <p className="service-text">Using data-driven insights for better yield.</p>
          <div className="service-image-container">
            <img 
              src="https://www.fieldbee.com/wp-content/uploads/2021/12/5.jpg" 
              alt="Precision Farming" 
              className="service-image"
            />
          </div>
        </div>

        {/* Second Service */}
        <div className="service-card">
          <h3 className="service-title">Agri-Tech Solutions</h3>
          <p className="service-text">Smart devices to monitor crop health.</p>
          <div className="service-image-container">
            <img 
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/agri_tech.jpeg" 
              alt="Agri-Tech Solutions" 
              className="service-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
