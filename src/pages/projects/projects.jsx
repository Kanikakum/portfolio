import React from 'react';
import './projects.css';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";

const Projects = () => {
    const projectList = [
        { id: 1, title: 'Weather Forecast App', desc: 'A real-time weather app providing accurate local forecasts using live API data.', url: 'https://github.com/Kanikakum/weather-forecast-app.git' },
        { id: 2, title: 'QRCode Generator', desc: 'A fast utility tool that converts text or URLs into downloadable QR codes.', url: 'https://github.com/Kanikakum/QRcode-Generator.git' },
        { id: 3, title: 'Portfolio Website', desc: 'A professional showcase of modern web projects and technical skills', url: 'https://github.com/Kanikakum/portfolio.git' }
    ];

    return (
        <section className="projects-section">
            <div className="container">
                <h2>Recent Projects</h2>
                <div className="project-grid">
                    {projectList.map((project) => (
                        <div key={project.id} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <button className="btn demo"><a href={project.url}>View Demo</a></button>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
