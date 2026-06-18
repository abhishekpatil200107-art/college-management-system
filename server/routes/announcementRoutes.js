const express = require("express");
const Announcement = require("../models/Announcement");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body);

    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({
      message: "Error adding announcement",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({
      createdAt: -1,
    });

    res.json(announcements);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching announcements",
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);

    res.json({
      message: "Announcement deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting announcement",
      error: error.message,
    });
  }
});

module.exports = router;