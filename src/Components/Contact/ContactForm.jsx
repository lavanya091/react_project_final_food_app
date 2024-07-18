import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-section-home">
      <div className="contact-overlay">
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form-home">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">BOOK A TABLE</button>
          </form>
          <div className="social-media">
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Google Plus"><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>
        <div className="footer-section foot">
          <h3>Contact</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section timings">
          <h3>Opening</h3>
          <ul>
            <li>Monday - Saturday: 09AM - 09PM</li>
            <li>Sunday: 10AM - 08PM</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>"Join Our Foodie Family!"</p>
          <br/>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>SIGNUP</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Your Site Name, All Right Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Home</a>
            <a href="#">Cookies</a>
            <a href="#">Help</a>
            <a href="#">FAQs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactForm;
