import React, { useState, useEffect } from "react";

const fallbackEducation = [
    {
        _id: "1",
        degree: "Bachelor of Technology in Computer Science",
        institution: "University",
        location: "India",
        startYear: "2021",
        endYear: "2025",
        description:
            "Studying Computer Science with a focus on software engineering and web technologies.",
    },
];

function Education() {
    const [education, setEducation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchEducation();
    }, []);

    const fetchEducation = async () => {
        try {
            const res = await fetch("/api/education");
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setEducation(data.length > 0 ? data : fallbackEducation);
        } catch {
            setEducation(fallbackEducation);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section education" id="education">
            <div className="container">
                <span className="section-label">Academics</span>
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">
                    My academic background and qualifications.
                </p>

                {loading ? (
                    <div className="loading-grid">
                        <div className="skeleton-card"></div>
                    </div>
                ) : (
                    <div className="timeline">
                        {education.map((edu, idx) => (
                            <div
                                className="timeline-item animate-in"
                                key={edu._id || idx}
                                style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <h3>{edu.degree}</h3>
                                        <span className="timeline-date">
                                            {edu.startYear} — {edu.endYear}
                                        </span>
                                    </div>
                                    <p className="timeline-company">
                                        {edu.institution}
                                        {edu.location ? ` · ${edu.location}` : ""}
                                    </p>
                                    {edu.description && (
                                        <p className="timeline-description">{edu.description}</p>
                                    )}
                                    {edu.grade && (
                                        <p className="timeline-grade">Grade: {edu.grade}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Education;
