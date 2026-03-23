import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact-page-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Get in Touch</span>
                    <h2 className="section-title">Let's Create <span className="gradient-text">Future</span> Together</h2>
                    <p className="section-subtitle">Have a question or want to work together? Drop me a message below.</p>
                </div>
                
                <div className="contact-container">
                    <div className="contact-sidebar">
                        <div className="contact-info-card glass-card">
                            <h3>Contact Information</h3>
                            <div className="contact-methods">
                                <div className="method">
                                    <div className="method-icon">📍</div>
                                    <div className="method-text">
                                        <h4>Location</h4>
                                        <p>Jaipur, Rajasthan, India</p>
                                    </div>
                                </div>
                                <div className="method">
                                    <div className="method-icon">📧</div>
                                    <div className="method-text">
                                        <h4>Email</h4>
                                        <p>kanikakumawat2022@gmail.com</p>
                                    </div>
                                </div>
                                <div className="method">
                                    <div className="method-icon">🔗</div>
                                    <div className="method-text">
                                        <h4>Socials</h4>
                                        <div className="social-links">
                                            <a href="https://www.linkedin.com/in/kanika-kumawat-b4b4a1279/" target="_blank">LinkedIn</a>
                                            <a href="https://github.com/kanikakum" target="_blank">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="status-card glass-card">
                            <div className="status-dot"></div>
                            <p>Currently working at CodeQlik It Solutions as a  Frontend Developer Intern!</p>
                        </div>
                    </div>
                    
                    <div className="contact-main">
                        <form className="contact-form-premium glass-card">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="example@email.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="What's this about?" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Tell me more about your project..." rows="6" required></textarea>
                            </div>
                            <button type="submit" className="btn-premium primary full-width">
                                Send Message
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
