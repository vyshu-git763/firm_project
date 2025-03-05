import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Home.css'; 
import './Navbar.css';

import partnerImage1 from '../assets/images/male.jpg';/*
import partnerImage2 from '../assets/images/female.jpeg';
*/
import secretarial from '../assets/images/secretarial.jpeg';
import corporate from '../assets/images/corporatereconstructing.jpeg';
import insolvency from '../assets/images/insolvency.jpeg';
import audit from '../assets/images/audit.jpeg';
import sebi from '../assets/images/sebi.jpeg';
import privateplacement from '../assets/images/privateplacement.png';
//import Navbar from './Navbar';





const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const servicesRef = useRef(null);
  useEffect(() => {
    if (location.hash === "#services" && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);


  return (
    <div className="home">
         <section id="intro"  className="intro">
        <h2>Welcome to Rahul A & Associates</h2>
        <p>
          At Rahul A & Associates, we offer expert solutions in various areas of law and compliance. 
          Our team is committed to delivering high-quality services to help your business grow and 
          succeed in an ever-changing legal landscape. Learn more about how we can support your business 
          through our specialized services.
        </p>
      </section>
      <section id="services"  className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <div className="card">
              <img src={secretarial} alt="Secretarial and Legal Compliance" />
              <button className="card-button" onClick={() => navigate('/secretarial')}>
                Secretarial and Legal Compliance
              </button>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img src={corporate} alt="Corporate Restructuring" />
              <button className="card-button" onClick={() => navigate('/corporate-restructuring')}>
                Corporate Restructuring
              </button>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img src={insolvency} alt="Insolvency and Bankruptcy" />
              <button className="card-button" onClick={() => navigate('/insolvency-bankruptcy')}>
                Insolvency and Bankruptcy
              </button>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img src={audit} alt="Audit and Due Diligence" />
              <button className="card-button" onClick={() => navigate('/audit')}>
                Audit and Due Diligence
              </button>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img src={sebi} alt="SEBI and Listed Entity Companies" />
              <button className="card-button" onClick={() => navigate('/sebi')}>
                SEBI and Listed Entity Companies
              </button>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img src={privateplacement} alt="Private Placement" />
              <button className="card-button" onClick={() => navigate('/private-placement')}>
                Private Placement
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <h2>Founding Partners</h2>
        <div className="partners-list">
          <div className="partner-item">
            <img src={partnerImage1} alt="Partner 1" />
            <h3>Rahul Agarwal</h3>
          </div>
         { /*
         <div className="partner-item">
            <img src={partnerImage2} alt="Partner 2" />
            <h3>Jane Smith</h3>
          </div>
          */
}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Rahul A & Associates. All rights reserved.</p>
        <button onClick={() => alert('Privacy Policy')}>Privacy Policy</button>
        <button onClick={() => alert('Terms of Service')}>Terms of Service</button>
      </footer>
    </div>
  );
};

export default Home;