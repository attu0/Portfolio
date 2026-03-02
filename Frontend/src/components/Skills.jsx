import React, { useState, useEffect } from "react";

const fallbackSkills = [
    {
        icon: "⚛️",
        title: "Frontend",
        skills: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Responsive Design"],
    },
    {
        icon: "🛠️",
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose"],
    },
    {
        icon: "🚀",
        title: "Tools & Other",
        skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel"],
    },
];

function Skills() {
    const [skillCategories, setSkillCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const res = await fetch("/api/skills");
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setSkillCategories(data.length > 0 ? data : fallbackSkills);
        } catch {
            setSkillCategories(fallbackSkills);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <span className="section-label">My Toolkit</span>
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    Here are the technologies and tools I work with to bring ideas to life.
                </p>

                {loading ? (
                    <div className="loading-grid">
                        {[1, 2, 3].map((i) => (
                            <div className="skeleton-card" key={i}></div>
                        ))}
                    </div>
                ) : (
                    <div className="skills-grid">
                        {skillCategories.map((cat, idx) => (
                            <div
                                className="skill-category animate-in"
                                key={cat._id || idx}
                                style={{ animationDelay: `${idx * 0.15}s` }}
                            >
                                <div className="skill-category-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                                <div className="skill-tags">
                                    {cat.skills.map((skill) => (
                                        <span className="skill-tag" key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Skills;
