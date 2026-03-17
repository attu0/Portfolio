import React from "react";

const fallbackExperiences = [
    {
        _id: "1",
        role: "Full-Stack Developer",
        company: "Freelance",
        location: "India",
        startDate: "2024",
        endDate: "Present",
        description:
            "Building modern web applications using the MERN stack for various clients.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
];

function Experience() {
    const experiences = fallbackExperiences;

    return (
        <section className="section experience" id="experience">
            <div className="container">
                <span className="section-label">Career</span>
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">
                    My professional journey and the roles that shaped my expertise.
                </p>

                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div
                            className="timeline-item animate-in"
                            key={exp._id || idx}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="timeline-date">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>
                                <p className="timeline-company">
                                    {exp.company}
                                    {exp.location ? ` · ${exp.location}` : ""}
                                </p>
                                <p className="timeline-description">{exp.description}</p>
                                {exp.technologies && exp.technologies.length > 0 && (
                                    <div className="timeline-tech">
                                        {exp.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
