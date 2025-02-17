import React from 'react';
import './AboutUs.css';
import founderImage from '../assets/images/male.jpg'
import teamImage from '../assets/images/female.jpeg'
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div>
      <h2>
        Welcome to <strong>Rahul A & Associates! </strong> </h2>
      <p>  We are a team of dedicated professionals offering top-notch company secretary services.
        Our mission is to provide seamless solutions to meet your corporate compliance needs.
      </p>
      </div>
      <div className="founder-bar">
        <h2>Founder</h2>
        <div className="line"></div>
        <img src={founderImage} alt="Founder" className="founder-image" />
        <p>
          <strong>Rahul Agarwal</strong>, a qualified Company Secretary (CS), Chartered Financial Analyst (CFA), and Master of Business Laws (MBL), is the founder partner of M/s Rahul A & Associates. As an Associate Member of the Institute of Company Secretaries of India (ICSI) with over a decade of experience, Rahul brings extensive knowledge and expertise in corporate secretarial services to the firm.
        </p>
      </div>
      <div className="team-bar">
        <h2>Our Team</h2>
        <div className="line"></div>
        <div className="team-members">
          <div className="team-card">
            <img src={founderImage} alt="Team Member" />
            <h3>CS Rahul Aggarwal</h3>
            <p>Rahul is an Associate Member of Institute of Company Secretaries of India (ICSI) with an experience of over 10 years and Rahul’s experience as a corporate secretarial services practitioner brings to the team knowledge and understanding of corporate affairs and compliance issues. He heads the regulatory compliance and secretarial practice team. He has helped many organizations in their secretarial compliance activities & has ensured a strong compliance framework in the organizations. He also handles due diligence activities, secretarial audit and corporate restructuring matters like mergers & amalgamations, liquidations, etc. and provides legal opinion on various matters. </p>
            <div className="special-tag">CS, CFA,MBL</div>
          </div>
          <div className="team-card">
            <img src={teamImage} alt="Team Member" />
            <h3>CS Lokesh Sharma
            </h3>
            <p>Manish is a Member of the Institute of Company Secretaries of India experience of over 10 years. He has good exposure in compliance audit and management system, along with preparation of legal due diligence report, drafting and vetting of various legal agreements.  His expertise, inter-alia, is in regulatory approvals, licenses, registrations of organization etc.
            </p>
            <div className="special-tag">CS</div>
          </div>
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


