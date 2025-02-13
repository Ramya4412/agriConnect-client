import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <footer className="footer" style={styles.footer}>
            {/* Subscription Section */}
            <div className="subscription" style={styles.subscription}>
                <h2>Stay Connected with Agriconnect</h2>
                <p>Subscribe for updates on fresh produce, seasonal highlights, and exclusive farmer deals.</p>
                <div className="subscribe-form" style={styles.subscribeForm}>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                    />
                    <button onClick={handleSubscribe} style={styles.button}>Subscribe</button>
                </div>
            </div>

            <div className="footer-container" style={styles.footerContainer}>
                {footerSections.map((section, index) => (
                    <div key={index} className="footer-section" style={styles.footerSection}>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                    </div>
                ))}
                
                {/* Follow Us Section */}
                <div className="follow-us" style={styles.followUs}>
                    <h3>Follow Us</h3>
                    <div className="social-icons" style={styles.socialIcons}>
                        <a href="#" style={styles.icon}><FaFacebookF /></a>
                        <a href="#" style={styles.icon}><FaInstagram /></a>
                        <a href="#" style={styles.icon}><FaTwitter /></a>
                        <a href="#" style={styles.icon}><FaYoutube /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom" style={styles.footerBottom}>
                <p>© 2025 Agriconnect. Supporting Local Farmers & Fresh Produce.</p>
            </div>
        </footer>
    );
};

const footerSections = [
    { title: "About Us", description: "Connecting farmers with consumers for fresh, local, and sustainable produce." },
    { title: "Marketplace", description: "Explore fresh, organic, and locally sourced produce." },
    { title: "Delivery & Pickup", description: "Choose local delivery or designated pickup points." },
    { title: "Community", description: "Join discussions, review farmers, and support local agriculture." },
    { title: "Contact", description: "Get in touch for inquiries or support." }
];

const styles = {
    footer: { backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" },
    subscription: { textAlign: "center", marginBottom: "20px" },
    subscribeForm: { display: "flex", justifyContent: "center", marginTop: "10px" },
    input: { padding: "8px", width: "250px", border: "2px solid white", background: "transparent", color: "white", borderRadius: "20px 0 0 20px" },
    button: { padding: "8px", background: "#ed8936", color: "white", borderRadius: "0 20px 20px 0", cursor: "pointer", border: "none" },
    footerContainer: { display: "flex", justifyContent: "space-around", flexWrap: "wrap" },
    footerSection: { flex: 1, minWidth: "150px", margin: "10px" },
    followUs: { flex: 1, minWidth: "150px", margin: "10px", textAlign: "center" },
    socialIcons: { display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" },
    icon: { color: "#fff", fontSize: "24px", textDecoration: "none" },
    footerBottom: { marginTop: "20px" }
};

export default Footer;


