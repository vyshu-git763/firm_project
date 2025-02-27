import React from 'react';
import { useState } from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const form = e.target; // Get the form element

    // Create FormData object to send to Web3Forms
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };
  return (
    <div className="contact-us">
      <div className="contact-us-header">
        <h2>Contact Us</h2>
        <p>We're here to assist you. Reach out to us via the following ways:</p>
      </div>

      <div className="contact-cards">
        <div className="contact-card">
          <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
          <h3>Email</h3>
          <p><a href="rahul@csra.in
">contact@rahulassociates.com</a></p>
        </div>
        <div className="contact-card">
          <span className="icon"><FontAwesomeIcon icon={faPhoneAlt} /></span>
          <h3>Phone</h3>
          <p><a href="+91 9844320530">+91 9844320530
          </a></p>
        </div>
        <div className="contact-card">
          <span className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
          <h3>Address</h3>
          <p>Sankalp Business Bay,
            No 07, Opposite to ETA Gardens,
            Magadi Road, Bangalore 560023
          </p>
        </div>
      </div>
        {/* Message Box Form */}
        <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="b0fd33f9-f7df-4c36-b9e4-48152988961e" />
          <input type="text" name="name" placeholder="Your Name" className="contact-input" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" className="contact-textarea" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;






