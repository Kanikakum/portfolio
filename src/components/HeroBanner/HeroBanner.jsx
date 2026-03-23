import React from 'react';
import "./HeroBanner.css";
import heroImg from "../../assets/hero-bg.png";

function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="hero-container container">
        <div className="hero-content">
          <span className="badge">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Creating <span className="gradient-text">Responsive & User-Friendly</span> Web Interfaces.
          </h1>
          <p className="hero-description">
            I'm <span className="highlight">Kanika</span>, a Frontend Developer Intern at CodeQlik It Solutions. 
            I build elegant, high-performance web applications with modern tech stacks.
          </p>
          <div className="hero-btns">
            <a href="/projects" className="btn-premium primary">Explore Projects</a>
            <a href="/contact" className="btn-premium outline">Let's Talk</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num"></span>
              <span className="stat-label">Fresher</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">7+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num">Jaipur</span>
              <span className="stat-label">Location</span>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-blob"></div>
          <img src={heroImg} alt="Hero Illustration" className="hero-img" />
          <div className="floating-card glass-card">
            <div className="dot"></div>
            <span>Frontend Intern @ CodeQlik</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;