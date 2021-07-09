import React from 'react';
import '../styles/Portfolio.css';
import '../App.css';

function Portfolio() {
    return (
        <section className="work-portfolio-parent" id="work-portfolio-parent">
            <div className="work-portfolio-title">
                <h2>Work</h2>
            </div>
            <div className="work-portfolio-content">

                <div className="project" id="project-3">
                    <h3>Vuze Musical</h3>
                    <image src="../assets/images/instrument_search.png"
                        alt="Image of musical instrument searcher application. Select to access directly."
                        target="_blank" className="images"/>
                    <div className="inner-text">

                        <h4>HTML/CSS/Javascript/APIs</h4>
                        <h5>A music-based API to help you explore new instruments and tutorials.</h5>
                        <a href="https://github.com/WellAndGood/BCS-Project-1" target="_blank" rel="noreferrer">
                            <h4>Github</h4>
                        </a>
                        <a href="https://wellandgood.github.io/BCS-Project-1/" target="_blank" rel="noreferrer">
                            <h4>Application</h4>
                        </a>
                    </div>
                </div>

                <div className="project" id="project-4">
                    <h3>Weather Network</h3>
                    <image src="../assets/images/ScreenshotWeather.jpg"
                        alt="Image of weather network application. Select to access directly." target="_blank"
                        className="images" />
                    <div className="inner-text"></div>
                    <h4>HTML/CSS/Javascript/APIs</h4>
                    <h5>A weather-based API to help you settle the weather and predicted forecasts in your city of
                        choice.</h5>
                    <a href="https://github.com/WellAndGood/DanielsWeatherNetwork" target="_blank" rel="noreferrer">
                        <h4>Github</h4>
                    </a>
                    <a href="https://wellandgood.github.io/DanielsWeatherNetwork/" target="_blank" rel="noreferrer">
                        <h4>Application</h4>
                    </a>
                </div>

                <div className="project" id="project-5">
                    <h3>Password Generator</h3>
                    <image src="../assets/images/screenshotPassword.jpg"
                        alt="Image of password generator application. Select to access directly." target="_blank"
                        className="images" />
                    <div className="inner-text"></div>
                    <h4>HTML/CSS/Javascript</h4>
                    <h5>A Javascript-powered password generator, between 8 and 128 characters.</h5>
                    <a href="https://github.com/WellAndGood/JavascriptPasswordGenerator" target="_blank" rel="noreferrer">
                        <h4>Github</h4>
                    </a>
                    <a href="https://wellandgood.github.io/JavascriptPasswordGenerator/" target="_blank" rel="noreferrer">
                        <h4>Application</h4>
                    </a>
                </div>

                <div className="project" id="project-1">
                    <h3>Birdwatcher App (Quack)</h3>
                    <image src="../assets/images/birdwatcherquack.jpg"
                        alt="Image of birdwatcher application titled Quack. Select to access directly." target="_blank"
                        className="images" />
                    <div className="inner-text"></div>
                    <h4>Full-Stack</h4>
                    <h5>A log-in portal to view/submit bird sightings and add bird profiles.</h5>
                    <a href="https://github.com/WellAndGood/BirdWatcher-1" target="_blank" rel="noreferrer">
                        <h4>Github</h4>
                    </a>
                    <a href="http://birdwatcherquack.herokuapp.com/" target="_blank" rel="noreferrer">
                        <h4>Application</h4>
                    </a>
                </div>

                <div className="project" id="project-2">
                    <h3>Employee Tracker</h3>
                    <image src="../assets/images/SQLEmployeeTrack.jpg"
                        alt="Screenshot of back-end terminal containing chart of employees with job data."
                        target="_blank" className="images" />
                    <div className="inner-text"></div>
                    <h4>MySQL</h4>
                    <h5>A back-end application to add employees, categorize them into departments, and create/remove
                        employees and departments.</h5>
                        <a href="https://github.com/WellAndGood/EmployeeTrackerSQL" target="_blank" rel="noreferrer">
                        <h4>Github</h4>
                    </a>
                </div>

                <div className="project" id="project-6">
                    <h3>Front-End Team-Builder</h3>
                    <image src="../assets/images/teambuildernode.jpg"
                        alt="Screenshot of browser with pre-built templates of employees." target="_blank"
                        className="images" />
                    <div className="inner-text"></div>
                    <h4>Node.js</h4>
                    <h5>A Node-powered command line application, which generates an HTML webpage.</h5>
                    <a href="https://github.com/WellAndGood/Team-Profile-Generator" target="_blank" rel="noreferrer">
                        <h4>Github</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;