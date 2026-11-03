import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

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
            <a
              href="https://docs.google.com/document/d/1tyGGb3Ps3Yif9oUb7beHYO4jmDaEUHc2/export?format=pdf"
              className="btn-outline"
              id="hero-cta-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="download-icon" />
              Resume
            </a>

            <a
              href="https://docs.google.com/document/d/1FO4D3HenDQzSuCUJ2kL94boewdREj_gS-WVrl9RCq0Y/export?format=pdf"
              className="btn-primary"
              id="hero-cta-cv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload className="download-icon" />
              CV
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-circle">
            {!imgError ? (
              <img
                src="/profile2.jpg"
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
