import React from "react";

const categorizedSkills = [
    {
        category: "Robotics",
        icon: "🤖",
        skills: [
            "ROS2 Humble, Jazzy",
            "Nav2",
            "ros2 control",
            "MoveIt2",
            "Docker",
        ],
    },
    {
        category: "Navigation & Perception",
        icon: "🧭",
        skills: [
            "SLAM",
            "Robot Localization",
            "AMCL",
            "Path Planning",
            "Computer Vision",
        ],
    },
    {
        category: "Sensors & Processors",
        icon: "⚡",
        skills: [
            "Raspberry Pi",
            "Intel NUC",
            "Nvidia Jetson",
            "Arduino Uno",
            "LiDAR",
            "IMU",
            "Depth Camera",
        ],
    },
    {
        category: "Programming",
        icon: "💻",
        skills: ["Python", "C++", "C", "Rust", "JavaScript"],
    },
    {
        category: "Simulation",
        icon: "🎮",
        skills: ["Gazebo (GZ sim, Classic)", "Isaac Sim", "URDF Validation", "MuJoCo"],
    },
    {
        category: "Core Coursework",
        icon: "🎓",
        skills: [
            "Control Systems",
            "Kinematics & Dynamics",
            "Industrial Robotics",
            "Sensors & Instrumentation",
            "CAD Design",
            "Machine Learning",
        ],
    },
];

function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <span className="section-label">My Toolkit</span>
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    Robotics-focused tech stack with core engineering degree coursework.
                </p>

                <div className="skills-grid">
                    {categorizedSkills.map((cat, idx) => (
                        <div
                            key={cat.category}
                            className="skill-category animate-in"
                            style={{ animationDelay: `${idx * 0.08}s` }}
                        >
                            <div className="skill-category-header">
                                <span className="skill-category-icon">{cat.icon}</span>
                                <h3>{cat.category}</h3>
                            </div>
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
        </section>
    );
}

export default Skills;
