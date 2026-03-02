const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Import all models
const Project = require("./models/Project");
const Skill = require("./models/Skill");
const Experience = require("./models/Experience");
const Education = require("./models/Education");
const Testimonial = require("./models/Testimonial");

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected for seeding...");

        // Clear existing data
        await Project.deleteMany({});
        await Skill.deleteMany({});
        await Experience.deleteMany({});
        await Education.deleteMany({});
        await Testimonial.deleteMany({});
        console.log("Cleared existing data.");

        // Seed Projects
        const projects = await Project.insertMany([
            {
                title: "E-Commerce Platform",
                description:
                    "A full-featured e-commerce application with cart, payment integration, and product management built with the MERN stack.",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
                githubUrl: "https://github.com/",
                liveUrl: "#",
                featured: true,
            },
            {
                title: "Real-Time Chat App",
                description:
                    "A modern chat application with real-time messaging, online status indicators, and media sharing powered by Socket.io.",
                technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
                githubUrl: "https://github.com/",
                liveUrl: "#",
                featured: true,
            },
            {
                title: "Task Management Dashboard",
                description:
                    "A productivity app with drag-and-drop task boards, team collaboration, analytics, and calendar integration.",
                technologies: ["React", "Express", "MongoDB", "Chart.js"],
                githubUrl: "https://github.com/",
                liveUrl: "#",
                featured: false,
            },
        ]);
        console.log(`Seeded ${projects.length} projects.`);

        // Seed Skills
        const skills = await Skill.insertMany([
            {
                icon: "⚛️",
                title: "Frontend",
                skills: [
                    "React",
                    "JavaScript",
                    "HTML5",
                    "CSS3",
                    "Vite",
                    "Responsive Design",
                ],
                order: 1,
            },
            {
                icon: "🛠️",
                title: "Backend",
                skills: [
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "MongoDB",
                    "Mongoose",
                ],
                order: 2,
            },
            {
                icon: "🚀",
                title: "Tools & Other",
                skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vercel"],
                order: 3,
            },
        ]);
        console.log(`Seeded ${skills.length} skill categories.`);

        // Seed Experience
        const experiences = await Experience.insertMany([
            {
                role: "Full-Stack Developer",
                company: "Freelance",
                location: "India",
                startDate: "2024",
                endDate: "Present",
                description:
                    "Building modern web applications using the MERN stack for various clients. Focused on clean, maintainable code and responsive design.",
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                order: 1,
            },
            {
                role: "Web Developer Intern",
                company: "Tech Startup",
                location: "Remote",
                startDate: "2023",
                endDate: "2024",
                description:
                    "Contributed to frontend development with React, collaborated on REST API design, and assisted in deploying features to production.",
                technologies: ["React", "JavaScript", "Git"],
                order: 2,
            },
        ]);
        console.log(`Seeded ${experiences.length} experiences.`);

        // Seed Education
        const education = await Education.insertMany([
            {
                degree: "Bachelor of Technology in Computer Science",
                institution: "University",
                location: "India",
                startYear: "2021",
                endYear: "2025",
                description:
                    "Studying Computer Science with a focus on software engineering, data structures, and web technologies.",
                grade: "",
                order: 1,
            },
        ]);
        console.log(`Seeded ${education.length} education entries.`);

        // Seed Testimonials
        const testimonials = await Testimonial.insertMany([
            {
                name: "Alex Johnson",
                role: "Project Manager",
                company: "TechCorp",
                message:
                    "Atharv delivered an outstanding web application. His attention to detail and ability to translate requirements into elegant code is impressive.",
                rating: 5,
                featured: true,
            },
            {
                name: "Sarah Williams",
                role: "Startup Founder",
                company: "InnovateLab",
                message:
                    "Working with Atharv was a great experience. He built our MVP quickly and the code quality was excellent. Highly recommended!",
                rating: 5,
                featured: true,
            },
            {
                name: "Raj Patel",
                role: "Senior Developer",
                company: "DevStudio",
                message:
                    "Great collaborator with strong problem-solving skills. Atharv consistently writes clean, well-documented code.",
                rating: 4,
                featured: false,
            },
        ]);
        console.log(`Seeded ${testimonials.length} testimonials.`);

        console.log("\n✅ Database seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding failed:", error.message);
        process.exit(1);
    }
};

seedData();
