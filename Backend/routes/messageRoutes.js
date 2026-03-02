const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST create message
router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "Name, email, and message are required" });
        }
        const newMessage = await Message.create({ name, email, subject, message });
        res.status(201).json({ message: "Message sent successfully!", data: newMessage });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all messages (for admin use)
router.get("/", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE message
router.delete("/:id", async (req, res) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) return res.status(404).json({ message: "Message not found" });
        res.json({ message: "Message deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
