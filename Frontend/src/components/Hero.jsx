import React from "react";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="line"></span>
                        Hello, I'm
                    </div>
                    <h1 className="hero-name">
                        <span className="gradient-text">Atharv</span>
                    </h1>
                    <p className="hero-tagline">Full-Stack Developer</p>
                    <p className="hero-description">
                        I build modern, responsive web applications with the MERN stack.
                        Passionate about clean code, elegant design, and creating digital
                        experiences that make an impact.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary" id="hero-cta-projects">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-outline" id="hero-cta-contact">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
