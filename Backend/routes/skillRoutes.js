const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// GET all skills
router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find().sort({ order: 1 });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create skill category
router.post("/", async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update skill category
router.put("/:id", async (req, res) => {
    try {
        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!skill) return res.status(404).json({ message: "Skill not found" });
        res.json(skill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE skill category
router.delete("/:id", async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);
        if (!skill) return res.status(404).json({ message: "Skill not found" });
        res.json({ message: "Skill deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
