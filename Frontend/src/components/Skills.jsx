import React from "react";

const categorizedSkills = [
    {
        category: "Robotics",
        skills: [
            "ROS2 Humble, Jazzy",
            "Nav2",
            "ros2 control",
            "MoveIt",
            "Docker",
        ],
    },
    {
        category: "Navigation & Perception",
        skills: ["SLAM", "Robot Localization", "AMCL", "Path Planning", "Control Systems"],
    },
    {
        category: "Sensors & Processors",
        skills: [
            "Raspberry Pi",
            "JaNUCvaScript",
            "Nvidia Jetson",
            "Arduino Uno Q",
            "Lidar",
            "IMU",
            "Depth Camera",
        ],

    },
    {
        category: "Programming",
        skills: ["Python", "C++", "C", "Rust"],
    },
    {
        category: "Simulation",
        skills: ["Gazebo (GZ sim, Classic)", " Issac Sim", "URDF Validation"],
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
