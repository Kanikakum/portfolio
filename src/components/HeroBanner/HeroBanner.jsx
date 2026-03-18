import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="home-container">
            <header className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I am Kanika, a Passionate Developer.</p>
                <div className="cta-buttons">
                    <button className="btn primary">View My Work</button>
                    <button className="btn secondary">Get In Touch</button>
                </div>
                
            </header>
        </div>
  );
}

export default HeroBanner;