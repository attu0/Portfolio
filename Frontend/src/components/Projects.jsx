import React from "react";

const projects = [
  {
    _id: "1",
    title: "Disease Diagnosis Treatment Rover",
    description:
      "Led development of a tracked all-terrain rover integrating a 3-DOF robotic arm, spraying mechanism, Pi Camera, LiDAR, MPU6050, and depth cameras for crop monitoring, obstacle avoidance, and targeted disease treatment. Combined robotics, computer vision, and autonomous systems into an integrated agricultural platform.",
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
    mediaUrl: "https://drive.google.com/",
    image: "/SpartansRover.jpeg",
    imagePosition: "center",
    isWinner: true,
  },

  {
    _id: "2",
    title: "Benzene — Autonomous Diff-Drive Robot",
    description:
      "Built a complete ROS2 autonomous mobile-robot stack with SLAM, AMCL, Nav2, AprilTag-based docking, and frontier-based exploration. Validated autonomous navigation and localization in Gazebo before deploying the system to real hardware, with custom messages and system-level integration tests.",
    technologies: [
      "ROS2",
      "C++",
      "Python",
      "Nav2",
      "Gazebo",
      "SLAM",
      "AMCL",
      "AprilTag",
      "Raspberry Pi",
      "Arduino Uno",
      "Docker",
    ],
    githubUrl: "https://github.com/attu0/benzene",
    liveUrl: null,
    mediaUrl: "https://drive.google.com/",
    image: "/benzene.jpeg",
    imagePosition: "center",
    isWinner: false,
  },

  {
    _id: "4",
    title: "PCB Generating Pipeline",
    description:
      "Designed and implemented an automated PCB generation pipeline that converts natural-language requirements into manufacturable board layouts. Built Python-based automation for component placement, routing optimization, and design-rule checks to reduce manual effort and accelerate PCB prototyping.",
    technologies: [
      "Python",
      "Automation",
      "PCB Design",
      "Electronics",
      "AI",
    ],
    githubUrl: null,
    liveUrl: null,
    mediaUrl: "https://drive.google.com/",
    image: "/pcb.png",
    imagePosition: "center",
    isWinner: true,
  },

  {
    _id: "3",
    title: "Plant Disease Detection | Crop Care",
    description:
      "Developed an end-to-end CNN-based plant disease classification system achieving 98% accuracy on a 16GB dataset. Built a FastAPI backend for model serving and a React interface for image upload, real-time prediction visualization, and natural remedy recommendations.",
    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "FastAPI",
      "React",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/attu0/Plant-Disease-Detection",
    liveUrl: "https://plant-disease-detection-bay.vercel.app/",
    mediaUrl: "https://drive.google.com/",
    image: "/image.png",
    imagePosition: "center",
    isWinner: false,
  },

  {
    _id: "5",
    title: "FANUC LR Mate 200iD — Arm Motion Planning",
    description:
      "Built a ROS2 and MoveIt2 motion-planning simulation for the FANUC LR Mate 200iD using the official robot description package. Configured collision-aware motion planning for a 6-DOF industrial manipulator in RViz, extending the project portfolio into industrial robot kinematics and motion planning.",
    technologies: [
      "ROS2",
      "MoveIt2",
      "RViz2",
      "URDF",
      "SDF",
      "Motion Planning",
      "Robot Kinematics",
    ],
    githubUrl: "https://github.com/attu0/fanuc_ws",
    liveUrl: null,
    mediaUrl: "https://drive.google.com/",
    image: "/fanuc_ws.png",
    imagePosition: "center",
    isWinner: false,
  },

  {
    _id: "6",
    title: "Yahboom ROSMaster — Mecanum Robot Simulation & Navigation",
    description:
      "Set up a modular ROS2 workspace for the Yahboom ROSMaster mecanum-wheeled robot with dedicated description, Gazebo simulation, bringup, localization, and navigation packages. Developed a custom mecanum drive controller to enable holonomic motion and autonomous navigation in simulation.",
    technologies: [
      "ROS2",
      "Gazebo",
      "Nav2",
      "URDF",
      "ros2_control",
      "Mecanum Drive",
      "Autonomous Navigation",
    ],
    githubUrl: "https://github.com/attu0/yahboom",
    liveUrl: null,
    mediaUrl: "https://drive.google.com/",
    image: "/yahboom.png",
    imagePosition: "center",
    isWinner: false,
  },
];

const projectEmojis = ["🛒", "💬", "📋", "🎨", "📊", "🔧"];

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <span className="section-label">Portfolio</span>

        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A selection of robotics, autonomous systems, AI, and engineering
          projects focused on building intelligent systems from simulation to
          real-world hardware.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article
              key={project._id}
              className={`project-card ${
                project.isWinner ? "project-card-winner" : ""
              }`}
            >
              <div className="project-media">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    style={{
                      objectPosition: project.imagePosition || "center",
                    }}
                  />
                ) : (
                  <div className="project-image-placeholder">
                    {projectEmojis[idx % projectEmojis.length]}
                  </div>
                )}

                {project.isWinner && (
                  <div className="winner-badge">
                    <span>🏆</span> Winner
                  </div>
                )}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.mediaUrl && (
                    <a
                      href={project.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-watch"
                    >
                      Watch More
                    </a>
                  )}

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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;