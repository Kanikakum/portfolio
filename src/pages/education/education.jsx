import React from 'react';
import './education.css';

const Education = () => {
    const educationItems = [
        {
            id: 1,
            institution: 'University of Technology',
            degree: 'Bachelor of Technology in Computer Science',
            duration: '2022 - 2026',
            desc: 'Currently pursuing a B.Tech degree with a focus on Software Engineering, Data Structures, and Algorithms.'
        },
        {
            id: 2,
            institution: 'Swami Vivekanand Vidya Mandir Senior Secondary School',
            degree: 'Higher Secondary Education (PCM)',
            duration: '2020 - 2022',
            desc: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.'
        },
        {
            id: 3,
            institution: 'Swami Vivekanand Vidya Mandir Senior Secondary School',
            degree: 'Secondary Education ',
            duration: '2018 - 2020',
            desc: 'Completed secondary education with a strong foundation in core subjects including Mathematics, Science, and English.'
        }
    ];

    return (
        <section className="education-section">
            <div className="container">
                <h2>My Education</h2>
                <div className="education-timeline">
                    {educationItems.map((item) => (
                        <div key={item.id} className="education-card">
                            <span className="duration">{item.duration}</span>
                            <h3>{item.institution}</h3>
                            <p className="degree">{item.degree}</p>
                            <p className="desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
