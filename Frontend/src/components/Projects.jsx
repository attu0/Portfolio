import React, { useState, useEffect } from "react";

// Fallback sample projects in case the backend is not running
const sampleProjects = [
    {
        _id: "1",
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce application with cart, payment integration, and product management built with the MERN stack.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        githubUrl: "#",
        liveUrl: "#",
        image: "",
    },
    {
        _id: "2",
        title: "Real-Time Chat App",
        description:
            "A modern chat application with real-time messaging, online status indicators, and media sharing powered by Socket.io.",
        technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
        githubUrl: "#",
        liveUrl: "#",
        image: "",
    },
    {
        _id: "3",
        title: "Task Management Dashboard",
        description:
            "A productivity app with drag-and-drop task boards, team collaboration, analytics, and calendar integration.",
        technologies: ["React", "Express", "MongoDB", "Chart.js"],
        githubUrl: "#",
        liveUrl: "#",
        image: "",
    },
];

const projectEmojis = ["🛒", "💬", "📋", "🎨", "📊", "🔧"];

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch("/api/projects");
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            setProjects(data.length > 0 ? data : sampleProjects);
        } catch {
            // Use sample projects if backend is unavailable
            setProjects(sampleProjects);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section projects" id="projects">
            <div className="container">
                <span className="section-label">Portfolio</span>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    A selection of projects that showcase my skills and passion for
                    building great software.
                </p>

                {loading ? (
                    <div className="loading-grid">
                        {[1, 2, 3].map((i) => (
                            <div className="skeleton-card" key={i}></div>
                        ))}
                    </div>
                ) : (
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
                )}
            </div>
        </section>
    );
}

export default Projects;
