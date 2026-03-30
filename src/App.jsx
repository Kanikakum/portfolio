import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/navbar/navbar.jsx';
import Footer from '@/components/footer/footer.jsx';
import Home from '@/pages/home/home.jsx';
import About from '@/pages/about/about.jsx';
import Projects from '@/pages/projects/projects.jsx';
import Contact from '@/pages/contact/contact.jsx';
import Education from '@/pages/education/education.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import '@/App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem('portfolio-theme', JSON.stringify(darkMode));

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, [darkMode]);

  return (
    <Router>
      <div className="app-wrapper">
        <div className="bg-gradient-mesh"></div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
