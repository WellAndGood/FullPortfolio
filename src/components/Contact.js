import React from 'react';
import '../styles/Contact.css';
import '../App.css';

function Contact() {
    return (
        <section className="contact-me-parent" id="contact-me-parent">
            <div className="contact-me-title">
                <h2>Contact Me</h2>
            </div>
            <div className="contact-me-content">
                <nav className="contact-container">
                    <a><em>613-794-3977</em></a>
                    <a href="mailto:danielpisani12@hotmail.com">danielpisani12@hotmail.com</a>
                    <a href="https://github.com/wellandgood/" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/danielpisani/" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
            </div>
        </section>
    )
}

export default Contact;