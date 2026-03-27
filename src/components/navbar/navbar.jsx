import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/portfolio.png";
import './navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" onClick={() => setIsMenuOpen(false)}><img src={logo} alt="Kanika Logo" className="logo-img" />Kanika</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                <li><Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Education</Link></li>
                <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
            
            <div className="navbar-actions">
                <a href="/resume.pdf" className="btn-premium outline cv-btn">Download CV</a>
                <div className="theme-toggle">
                    <input
                        type="checkbox"
                        id="theme-toggle"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <label htmlFor="theme-toggle" className="slider"></label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
