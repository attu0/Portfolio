import React from "react";

function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-image-wrapper animate-in">
                    <div className="about-image-placeholder">👨‍💻</div>
                </div>
                <div className="about-text animate-in">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Crafting digital experiences with passion & precision
                    </h2>
                    <p>
                        I'm a full-stack developer with a deep love for building things on
                        the web. I specialize in the MERN stack — MongoDB, Express, React,
                        and Node.js — and I'm always excited to learn new technologies and
                        push the boundaries of what's possible.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new tech, contributing
                        to open source, or sharpening my problem-solving skills. I believe
                        great software is built at the intersection of clean code, thoughtful
                        design, and genuine empathy for the user.
                    </p>
                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Curiosity</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
