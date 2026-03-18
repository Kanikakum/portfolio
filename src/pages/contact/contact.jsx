import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2>Contact Me</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message" rows="5"></textarea>
                    <button type="submit" className="btn primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
