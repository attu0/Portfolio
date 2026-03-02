const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
    {
        icon: { type: String, default: "" },
        title: { type: String, required: true },
        skills: [{ type: String }],
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Skill", skillSchema);
