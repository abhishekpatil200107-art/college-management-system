const express = require("express");
const Admission = require("../models/Admission");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();

    res.status(201).json({
      success: true,
      message: "Admission enquiry submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admissions" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting application",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAdmission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedAdmission);
  } catch (error) {
    res.status(500).json({
      message: "Error updating application",
    });
  }
});

module.exports = router;