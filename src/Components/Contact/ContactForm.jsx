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
    // Handle form submission, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="contact-section-home">
      <div className="contact-info-home">
        <h2>Contact Us</h2>
        <p>HOW TO GET IN TOUCH?</p>
        <p>
          This section only proves that you are approachable and ready to accept reviews and prior bookings.
          People love to be associated with businesses that are friendly and communicate well. Encourage them
          to get in touch with you.
        </p>
        <div className="info-home">
          <p><strong>ADDRESS</strong></p>
          <p>123 Fifth Avenue, New York, NY 10160, USA</p>
          <p><strong>PHONE NUMBER</strong></p>
          <p>+1 910-626-85255</p>
          <p><strong>EMAIL ADDRESS</strong></p>
          <p>contact@tech.com</p>
        </div>
        <div className="social-media">
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>
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
    </div>
  );
}

export default ContactForm;
