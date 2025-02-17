import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
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
    </div>
  );
};

export default ContactUs;






