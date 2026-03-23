import React from 'react';
import './projects.css';

const Projects = () => {
    const projectList = [
        { 
            id: 1, 
            title: 'Weather Forecast App', 
            desc: 'Built a web-based weather app that fetches real-time API data and displays temperature, humidity, and weather conditions with a clean and responsive UI.', 
            url: 'https://github.com/Kanikakum/weather-forecast-app.git',
            tags: [ "API", "HTML", "CSS", "JavaScript"],
            category: "Web App"
        },
        { 
            id: 2, 
            title: 'QRCode Generator', 
            desc: 'Built a QR Code Generator using Node.js and Express.js that generates QR codes for text or URLs with efficient backend processing and a clean UI.', 
            url: 'https://github.com/Kanikakum/QRcode-Generator.git',
            tags: ["Node.js", "Express", "Canvas"],
            category: "Utility Tool"
        },
        { 
            id: 3, 
            title: 'Portfolio', 
            desc: 'Built a personal portfolio website using React to showcase my skills, projects, and experience with a modern and responsive design.', 
            url: 'https://github.com/Kanikakum/portfolio.git',
            tags: ["React", "Design", "Vite"],
            category: "Personal Brand"
        }
    ];

    return (
        <section className="projects-page-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Featured Portfolio</span>
                    <h2 className="section-title">My <span className="gradient-text">Creations</span></h2>
                    <p className="section-subtitle">Deep dive into some of the complex problems I've solved and the products I've built.</p>
                </div>
                
                <div className="projects-full-grid">
                    {projectList.map((project) => (
                        <div key={project.id} className="project-feature-card glass-card">
                            <div className="feature-img-placeholder">
                                <div className="feature-badge">{project.category}</div>
                            </div>
                            <div className="feature-content">
                                <div className="feature-tags">
                                    {project.tags.map(tag => <span key={tag} className="tag-item">{tag}</span>)}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="feature-actions">
                                    <a href={project.url} className="btn-premium primary small" target="_blank" rel="noopener noreferrer">View Github</a>
                                    <a href="#" className="btn-premium outline small">Live Demo</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
