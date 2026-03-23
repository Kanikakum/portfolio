import React from 'react';
import "./ProjectGrid.css";

function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: "Landing page (Travel Platform)",
      desc: "Designed and developed a responsive travel landing page using HTML, CSS, and JavaScript, featuring an attractive UI, smooth navigation, and interactive elements to enhance user experience.",
      link: "https://github.com/Kanikakum/SCT_WD_1.git",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "var(--primary)"
    },
    {
      id: 2,
      title: "Tic tac toe Game ",
      desc: "Developed a Tic Tac Toe game using HTML, CSS, and JavaScript with interactive gameplay, win detection logic, and a responsive user interface.",
      link: "https://github.com/Kanikakum/SCT_WD_3-tic-tac-toe-project-.git",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "var(--secondary)"
    },
    {
      id: 3,
      title: "To Do App",
      desc: "Built a dynamic To-Do app  with features like task creation, deletion, and state management, providing a simple and user-friendly experience.",
      link: "https://github.com/Kanikakum/SCT_WD_4.git",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "var(--accent)"
    },
  ];

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="badge">Portfolio</span>
          <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
          <p className="section-subtitle">A collection of projects where design meets functionality.</p>
        </div>
        
        <div className="project-grid-container">
          {projects.map((project) => (
            <div key={project.id} className="project-premium-card glass-card">
              <div className="project-visual" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                <div className="project-icon" style={{ backgroundColor: project.color }}></div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-footer">
                  <a href={project.link} className="btn-link" target="_blank" rel="noopener noreferrer">
                    View Project 
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid-cta">
          <a href="/projects" className="btn-premium outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;