import React from "react";
import "./ContactUs.css"; // Import external CSS file
import { FaFacebook, FaTwitter, FaInstagram , FaYoutube} from 'react-icons/fa'; // Import social media icons

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-item">
          <span className="icon">📍</span>
          <h2>Address</h2>
          <p>Telangana State Convention Center</p>
          <p>705  Street</p>
        </div>
        <div className="contact-item">
          <span className="icon">📧</span>
          <h2>Email Address</h2>
          <p>contact@agriconnect.com</p>
          <p>contact@agriconnect2.com</p>
        </div>
        <div className="contact-item">
          <span className="icon">📞</span>
          <h2>Phone</h2>
          <p>+10 123 456 7890</p>
          <p>+10 987 654 3210</p>
        </div>
        <div className="contact-item">
          <span className="icon">⏰</span>
          <h2>Business Hours</h2>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="contact-item">
          <span className="icon">🔗</span>
          <h2>Social Media</h2>
          <p>
            <a href="#" className="social-link">
              <FaFacebook className="social-icon" /> Facebook
            </a>
          </p>
          <p>
            <a href="#" className="social-link">
              <FaTwitter className="social-icon" /> Twitter
            </a>
          </p>
          <p>
            <a href="#" className="social-link">
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </p>
          <p>
            <a href="#" className="social-link">
              <FaYoutube className="social-icon" /> Youtube
            </a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Have Questions? Get In Touch!</h2>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit Form</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What products do you offer?</h3>
          <p>We offer a wide range of agricultural products including fresh produce, dairy, meat, and poultry.</p>
        </div>
        <div className="faq-item">
          <h3>Where are you located?</h3>
          <p>We are located at the Telangana State Convention Center, 705 Street.</p>
        </div>
        <div className="faq-item">
          <h3>How can I place an order?</h3>
          <p>You can place an order through our website or by contacting us directly via phone or email.</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.505198627906!2d-122.3343783!3d47.6115765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab54b1d6973%3A0x7b33c5a5bb3a37f1!2sWashington%20State%20Convention%20Center!5e0!3m2!1sen!2sus!4v1644850198232!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          className="google-map"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h3>Agriconnect</h3>
        <p>We provide the best home-grown and natural products for your health.</p>
        <div className="footer-products">
          <h4>Products</h4>
          <p>Agriculture | Dairy | Meat | Poultry</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;