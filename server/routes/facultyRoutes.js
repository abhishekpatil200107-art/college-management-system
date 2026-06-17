const express = require("express");
const Faculty = require("../models/Faculty");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({
      message: "Error adding faculty",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const faculty = await Faculty.find().sort({ createdAt: -1 });
    res.json(faculty);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching faculty",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting faculty",
      error: error.message,
    });
  }
});

module.exports = router;