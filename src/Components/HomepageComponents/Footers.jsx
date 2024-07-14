import React from 'react';
import './Footer.css';

function Footer() {
  return (
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
  );
}

export default Footer;
