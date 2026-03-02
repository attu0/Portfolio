const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

// GET all experiences
router.get("/", async (req, res) => {
    try {
        const experiences = await Experience.find().sort({ order: 1 });
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create experience
router.post("/", async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update experience
router.put("/:id", async (req, res) => {
    try {
        const experience = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!experience)
            return res.status(404).json({ message: "Experience not found" });
        res.json(experience);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE experience
router.delete("/:id", async (req, res) => {
    try {
        const experience = await Experience.findByIdAndDelete(req.params.id);
        if (!experience)
            return res.status(404).json({ message: "Experience not found" });
        res.json({ message: "Experience deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
