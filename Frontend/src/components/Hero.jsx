import React, { useState } from "react";

function Hero() {
    const [imgError, setImgError] = useState(false);

    return (
        <section className="hero" id="hero">
            <div className="container hero-layout">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="line"></span>
                        Hello, I'm
                    </div>
                    <h1 className="hero-name">
                        <span className="gradient-text">Atharv</span>
                    </h1>
                    <p className="hero-tagline">Mechatronics Engineer</p>
                    <p className="hero-description">
                        Turning algorithms into autonomous reality.
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
                <div className="hero-image-wrapper">
                    <div className="hero-image-circle">
                        {!imgError ? (
                            <img
                                src="/profile.jpg"
                                alt="Atharv Mudse"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="hero-image-fallback">AM</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
