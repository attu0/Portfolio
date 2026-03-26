import React from "react";

// Fallback sample projects in case the backend is not running
const sampleProjects = [
    {
        _id: "1",
        title: "Disease Diagnosis Treatment Rover",
        description:
            "Led a multidisciplinary team to build a tracked rover with a 3-DOF robotic arm, spraying mechanism, and integrated Pi Camera, LiDAR, MPU 6050, and depth cameras for precision field monitoring, obstacle avoidance, and localized crop disease treatment. Filing a patent for the integrated robotic disease diagnosis and treatment system.",
        technologies: [
            "ROS2",
            "Arduino Mega",
            "Python",
            "LiDAR",
            "Computer Vision",
            "Depth Camera",
            "Fusion 360",
        ],
        githubUrl: "https://github.com/attu0/Spartan",
        liveUrl: null,
        image: "/Disease%20Diagnosis%20Treatment%20Rover.png",
    },
    {
        _id: "2",
        title: "Differential Drive Robot",
        description:
            "Deployed Nav2 stack and SLAM for real-time mapping and obstacle avoidance in dynamic environments, optimized pose accuracy using EKF-based sensor fusion between IMU and wheel odometry, and developed modular ROS2 Humble nodes with a custom web teleop dashboard for remote monitoring and autonomous navigation.",
        technologies: [
            "ROS2",
            "C++",
            "Python",
            "SLAM",
            "Nav2",
            "LiDAR",
            "Arduino Uno",
            "Raspberry Pi",
        ],
        githubUrl: "https://github.com/attu0/articubot_two",
        liveUrl: null,
        image: "/articubot2.jpg",
    },
    {
        _id: "3",
        title: "Plant Disease Detection | Crop Care",
        description:
            "Developed an end-to-end CNN-based plant disease classification system with 98% accuracy on a 16GB dataset, built a FastAPI REST API for efficient model serving, and created a React interface for real-time image upload, prediction visualization, and natural remedy recommendations.",
        technologies: ["Python", "TensorFlow", "FastAPI", "React", "CNN"],
        githubUrl: "https://github.com/attu0/Plant-Disease-Detection",
        liveUrl: "https://plant-disease-detection-bay.vercel.app/",
        image: "/image.png",
    },
];

const projectEmojis = ["🛒", "💬", "📋", "🎨", "📊", "🔧"];

function Projects() {
    const projects = sampleProjects;

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <span className="section-label">Portfolio</span>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    A selection of projects that showcase my skills and passion for
                    building great software.
                </p>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div
                            className="project-card animate-in"
                            key={project._id}
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            ) : (
                                <div className="project-image-placeholder">
                                    {projectEmojis[idx % projectEmojis.length]}
                                </div>
                            )}
                            <div className="project-body">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-github"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link-live"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
