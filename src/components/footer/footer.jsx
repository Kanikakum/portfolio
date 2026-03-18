import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Kanika Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:contact@example.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
