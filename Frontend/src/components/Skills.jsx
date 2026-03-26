import React from "react";

const categorizedSkills = [
    {
        category: "Robotics (Primary)",
        skills: [
            "ROS2 Humble",
            "Nav2",
            "SLAM",
            "LiDAR",
            "Sensor Fusion (EKF)",
            "Raspberry Pi",
            "Arduino",
        ],
    },
    {
        category: "AI & Vision",
        skills: ["Python", "Computer Vision", "TensorFlow", "CNN", "Whisper", "Ollama"],
    },
    {
        category: "CSE Stack",
        skills: [
            "React",
            "JavaScript",
            "Node.js",
            "Express.js",
            "FastAPI",
            "REST APIs",
            "MongoDB",
        ],
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "Vite", "Fusion 360"],
    },
];

function Skills() {
    const skillCategories = categorizedSkills;

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <span className="section-label">My Toolkit</span>
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    Robotics-focused tech stack with core CSE skills.
                </p>

                <div className="skills-grid">
                    <div className="skill-category animate-in">
                        <div className="skill-category-icon">🧩</div>
                        <h3>Skills</h3>
                        {skillCategories.map((cat) => (
                            <div key={cat.category} className="skill-group">
                                <h4>{cat.category}</h4>
                                <div className="skill-tags">
                                    {cat.skills.map((skill) => (
                                        <span className="skill-tag" key={`${cat.category}-${skill}`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
