import React from 'react';
import '../styles/About.css';
import '../App.css';

function About() {
    return (
        <section className="about-me" id="about-me">
            <div className="about-me-title">
                <h2>About Me</h2>
            </div>

            <div className="about-me-content">
                <p>Greetings world! My name is <em>Daniel</em> (he/him). I'm a full-stack web developer, capable of
                    being a wide variety of applications. I have an ongoing interest in the tech world. I like
                    understanding how computers work, and I have big ideas about how technology can transform the
                    medical and political world.</p>
                <p>In addition to that, I'm a practicing Registered Dietitian, bringing with me years of experience in
                    clinical settings</p>
                <img src="../assets/images/Danielphoto.jpg" alt="photo of Daniel"/>
                <p>A few words to describe myself. I consider myself:</p>
                <ul>
                    <li> ☑️ Lifelong Learner</li>
                    <li>I've learned four languages on my own, on top of my native French and English.</li>
                    <li> ☑️ Persistent and patient.</li>
                    <li>I've written four books in four years and run half-marathons.</li>
                    <li> ☑️ Creative and inventive.</li>
                    <li>I've played guitar for 15 years, and learned sales and marketing copywriting</li>
                </ul>
                <h2>Coding Skills and Languages</h2>
                <ul className="skill-columns">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vanilla Javascript</li>
                    <li>JQuery (though I hate it)</li>
                    <li>MySQL</li>
                    <li>ORM/Sequelize</li>
                    <li>Node.js/Express.js</li>
                    <li>HTML Routing</li>
                    <li>RESTful APIs</li>
                    <li>MongoDB</li>
                    <li>React.js</li>
                </ul>
            </div>
        </section>
    )
}

export default About;