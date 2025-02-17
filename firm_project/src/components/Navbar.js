import React from 'react';
import firmlogo from '../assets/images/firmlogo.jpg';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faClipboard, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import {  useNavigate } from 'react-router-dom'; 

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavClick = (path) => {
        navigate(path);
    };

    const scrollToSection = (sectionId) => {
        navigate('/');
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

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
                        <button className="nav-btn" onClick={() => scrollToSection('intro')}>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => handleNavClick('/research')}>
                            <FontAwesomeIcon icon={faBook} /> Research
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => scrollToSection('services')}>
                            <FontAwesomeIcon icon={faClipboard} /> Our Services
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => handleNavClick('/AboutUs')}>
                            <FontAwesomeIcon icon={faInfoCircle} /> About Us
                        </button>
                    </li>
                    <li>
                        <button className="nav-btn" onClick={() => handleNavClick('/ContactUS')}>
                            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;


