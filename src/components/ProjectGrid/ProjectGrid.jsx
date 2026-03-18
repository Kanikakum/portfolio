import "./ProjectGrid.css";

function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      desc: "Shows real-time weather using API",
      link: "https://weather-app-kanika.netlify.app/",
    },
    {
      id: 2,
      title: "QR Code Generator",
      desc: "Generate QR codes using Node.js",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "Personal portfolio using React",
      link: "#",
    },
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <a href={project.link} target="_blank">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;