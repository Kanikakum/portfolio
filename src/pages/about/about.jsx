import React from 'react';
import './about.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <p>Computer Science student (B.Tech 2022–2026) with skills in C/C++, Java, Python, SQL, and web development. Passionate about problem-solving, quick to learn, and eager to build real-world projects.</p>
                    <p>Since then, I have been working on my skills in JavaScript, React, and CSS, Node.js and express.js. Looking forward to building something awesome with you!</p>
                </div>
                <div className="skills">
                    <h3>My Skills</h3>
                    <ul className="skills-list">
                        <li><p>Programming Languages: Proficient in C, C++, Python, Java, JavaScript with a good understanding of Object Oriented programming(OOPs) concepts. </p></li>
                        <li><p>Version Control and Database: Git, GitHub, MySQL.</p></li>
                        <li><p>Computer	Fundamentals: Data Structures and Algorithms, Object-Oriented Programming, DBMS.</p></li>
                        <li><p>Web Technologies: HTML, CSS, JavaScript, Git, VS Code</p></li>
                        <li><p>Backend	Development : Proficient in Node.js , with knowledge of server-side programming and building RESTful APIs.</p></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
