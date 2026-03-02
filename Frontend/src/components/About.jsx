import React, { useState, useEffect, useRef } from "react";

const fallbackSlides = [
    { title: "Robotics", emoji: "🤖" },
    { title: "AI Systems", emoji: "🧠" },
    { title: "Computer Vision", emoji: "👁️" },
    { title: "Embedded", emoji: "⚙️" },
];

function About() {
    const [slides, setSlides] = useState(fallbackSlides);
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timerRef.current);
    }, [slides.length]);

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            if (!res.ok) throw new Error("Failed");
            const data = await res.json();
            if (data.length > 0) {
                setSlides(
                    data.map((p, i) => ({
                        title: p.title,
                        image: p.image || "",
                        emoji: ["🤖", "🧠", "👁️", "⚙️", "🚀", "💡"][i % 6],
                    }))
                );
            }
        } catch {
            // keep fallback slides
        }
    };

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-image-wrapper animate-in">
                    <div className="about-slideshow">
                        {slides.map((slide, idx) => (
                            <div
                                className={`about-slide ${idx === current ? "active" : ""}`}
                                key={idx}
                            >
                                {slide.image ? (
                                    <img src={slide.image} alt={slide.title} />
                                ) : (
                                    <div className="about-slide-placeholder">
                                        <span className="about-slide-emoji">{slide.emoji}</span>
                                        <span className="about-slide-title">{slide.title}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="about-slide-dots">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`about-dot ${idx === current ? "active" : ""}`}
                                    onClick={() => setCurrent(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-text animate-in">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Building Machines That See, Think & Act
                    </h2>
                    <p>
                        I’m a Mechatronics Engineer with a strong foundation in robotics,
                        AI, and system design. My work spans ROS2-based autonomous navigation,
                        computer vision, embedded platforms, and scalable AI systems.
                    </p>
                    <p>
                        Whether it's developing a patent-filed robotic rover, optimizing
                        navigation algorithms, or deploying open-source LLM pipelines,
                        I thrive at the intersection of hardware, intelligence, and impact.
                    </p>
                    <div className="about-stats">
                        <div className="stat-card">
                            <div className="stat-number">9.4</div>
                            <div className="stat-label">CGPA</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4+</div>
                            <div className="stat-label">Robotics Projects</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">Coming Soon</div>
                            <div className="stat-label">Patent Filed</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
