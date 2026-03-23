import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import Education from './pages/education/education';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="bg-gradient-mesh"></div>
        <Navbar />
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
