import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <section className="navbar" id="navbar">
           <div className="wrapper">
               <a id="main-title">Dan.DotCom</a>
                <ul class="nav nav-menu">
                    <li class="nav-item">
                        <a class="nav-link active" href="#about-me">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Resume</a>
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div class="subtitle">
                <p>A Full-Stack Web Developer with a Healthy Blend of Medicine, Tech, and Politics</p>
            </div>
            
        </section>
    )
}

export default Navbar;