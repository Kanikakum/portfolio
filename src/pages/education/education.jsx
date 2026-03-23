import React from 'react';
import './education.css';

const Education = () => {
    const educationItems = [
        {
            id: 1,
            institution: 'University of Technology',
            degree: 'Bachelor of Technology in Computer Science',
            duration: '2022 - 2026',
            desc: 'Specializing in Full Stack Development, Cloud Computing, and Artificial Intelligence. Maintaining a top-tier GPA and participating in innovative tech projects.'
        },
        {
            id: 2,
            institution: 'Swami Vivekanand Vidya Mandir',
            degree: 'Higher Secondary Education (PCM)',
            duration: '2020 - 2022',
            desc: 'Focused on advanced Mathematics and Physics. Developed strong analytical and problem-solving skills through rigorous coursework.'
        },
        {
            id: 3,
            institution: 'Swami Vivekanand Vidya Mandir',
            degree: 'Secondary Education',
            duration: '2018 - 2020',
            desc: 'Built a solid foundation in core sciences and mathematics, consistently excelling in academic competitions and team projects.'
        }
    ];

    return (
        <section className="education-page-section section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Knowledge Path</span>
                    <h2 className="section-title">Academic <span className="gradient-text">Journey</span></h2>
                    <p className="section-subtitle">A timeline of my educational background and milestones.</p>
                </div>
                
                <div className="education-timeline-container">
                    <div className="timeline-line"></div>
                    <div className="education-timeline">
                        {educationItems.map((item, index) => (
                            <div key={item.id} className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-node"></div>
                                <div className="education-card glass-card">
                                    <div className="education-header">
                                        <span className="duration-pill">{item.duration}</span>
                                        <h3 className="institution-name">{item.institution}</h3>
                                    </div>
                                    <h4 className="degree-title">{item.degree}</h4>
                                    <p className="education-desc">{item.desc}</p>
                                    <div className="card-decoration"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
