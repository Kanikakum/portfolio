import React from 'react';
import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner-section section-padding">
      <div className="container">
        <div className="contact-banner-card glass-card">
          <div className="contact-banner-content">
            <span className="badge">Collaboration</span>
            <h2 className="banner-title">Let’s Start <span className="gradient-text">Something</span> Extraordinary</h2>
            <p className="banner-subtitle">
              Have a project in mind? Contact me today and let’s turn your vision into reality. 
              Always open to discussing new opportunities or design challenges.
            </p>
            <div className="banner-btns">
              <a href="/contact" className="btn-premium primary">Get In Touch Now</a>
              <a href="mailto:contact@kanika.com" className="btn-premium outline">Email Me Directly</a>
            </div>
          </div>
          <div className="banner-visual">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="banner-icon">🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;