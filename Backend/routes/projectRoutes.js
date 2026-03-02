const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single project
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create project
router.post("/", async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE project
router.delete("/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.json({ message: "Project deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
