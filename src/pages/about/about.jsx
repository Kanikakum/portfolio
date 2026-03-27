import React from 'react';
import './about.css';

const About = () => {
    const skillCategories = [
        {
            title: "Programming",
            skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"]
        },
        {
            title: "Frontend",
            skills: ["React", "HTML5", "CSS3", "Vite", "Tailwind"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "SQL", "PostgreSQL", "REST APIs"]
        },
        {
            title: "Tools & Core",
            skills: ["Git", "GitHub", "VS Code", "DSA", "OOPs"]
        }
    ];

    return (
        <section className="about-page-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Who I Am</span>
                    <h2 className="section-title">Bridging <span className="gradient-text">Design & Code</span></h2>
                    <p className="section-subtitle">Dedicated developer focused on building scalable and user-centric web applications.</p>
                </div>
                
                <div className="about-main-content">
                    <div className="about-bio glass-card">
                        <div className="bio-header">
                            <div className="bio-avatar">K</div>
                            <div className="bio-info">
                                <h3>Kanika</h3>
                                <p>Frontend Developer Intern @ CodeQlik It Solutions | Computer Science Student @ Vivekanand Institute of Technology</p>
                            </div>
                        </div>
                        <div className="bio-text">
                            <p>
                                I am a Computer Science student (B.Tech 2022–2026) with a deep passion for solving complex problems through technology. 
                                My journey began with a curiosity about how the web works, which evolved into a professional pursuit of building robust software solutions.
                            </p>
                            <p>
                               <p>
I am an enthusiastic Computer Science student pursuing B.Tech (2022–2026) with skills in React, JavaScript, and web development. I enjoy building responsive and user-friendly applications and continuously improving my problem-solving abilities through real-world projects.
</p>.
                            </p>
                        </div>
                        <div className="bio-footer">
                            <a href="/contact" className="btn-premium primary">Contact Me</a>
                            <a href="/resume.pdf" className="btn-premium outline">Download CV</a>
                        </div>
                    </div>
                    
                    <div className="skills-showcase">
                        <div className="skills-grid">
                            {skillCategories.map((cat, idx) => (
                                <div key={idx} className="skill-cat-card glass-card">
                                    <h4 className="cat-title">{cat.title}</h4>
                                    <div className="skill-tags">
                                        {cat.skills.map(skill => (
                                            <span key={skill} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="experience-summary glass-card">
                            <div className="exp-item">
                                <span className="exp-count">10+</span>
                                <span className="exp-label">Tools Mastered</span>
                            </div>
                            <div className="exp-divider"></div>
                            <div className="exp-item">
                                <span className="exp-count">15+</span>
                                <span className="exp-label">Certifications</span>
                            </div>
                            <div className="exp-divider"></div>
                            <div className="exp-item">
                                <span className="exp-count">20+</span>
                                <span className="exp-label">Open Source</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
