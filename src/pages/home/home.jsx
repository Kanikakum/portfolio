import HeroBanner from "../../components/HeroBanner/HeroBanner";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import BlogGrid from "../../components/BlogGrid/BlogGrid";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            
            {/* Hero Section */}
            <HeroBanner />

            {/* Projects Section */}
            <ProjectGrid />

            {/* Blogs Section */}
            <BlogGrid />

            {/* Contact Section */}
            <ContactBanner />

        </div>
    );
};

export default Home;