import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2 className="footer-logo">Kanika<span className="accent-dot">.</span></h2>
                    <p className="footer-tagline">Frontend Developer Intern @ CodeQlik | Creating seamless digital solutions.</p>
                    <div className="social-pill-container">
                        <a href="https://github.com/kanikakum" className="social-pill" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/kanika-kumawat-b4b4a1279/" className="social-pill" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
                
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Navigation</h4>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Services</h4>
                        <a href="#">Full Stack</a>
                        <a href="#">UI/UX Design</a>
                        <a href="#">API Dev</a>
                        <a href="#">Consulting</a>
                    </div>
                </div>
                
                <div className="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Get latest tech insights and updates delivered to your inbox.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="email@address.com" />
                        <button className="btn-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">&copy; 2026 Kanika. Built with React & Passion.</p>
                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
