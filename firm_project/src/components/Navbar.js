import React from 'react';
import { useNavigate } from 'react-router-dom';
import firmlogo from '../assets/images/firmlogo.jpg';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faClipboard, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ homeRef, servicesRef }) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100); // Slight delay ensures smooth transition
    };

    // Function to navigate to services section inside Home
    const goToServices = () => {
        navigate('/');
        setTimeout(() => {
            window.location.hash = "#services";
        }, 100);
    };

 

    return (
        <header className="navbar-header">
            <div className="logo">
                <div className="logo-circle">
                    <img src={firmlogo} alt="Firm Logo" />
                </div>
                <h1>Rahul A & Associates</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <button className="nav-btn" onClick={goToHome}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => navigate('/research')}>
                            <FontAwesomeIcon icon={faBook} /> Research
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={goToServices}>
                            <FontAwesomeIcon icon={faClipboard} /> Our Services
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => navigate('/AboutUs')}>
                            <FontAwesomeIcon icon={faInfoCircle} /> About Us
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => navigate('/contactUs')}>
                            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;


