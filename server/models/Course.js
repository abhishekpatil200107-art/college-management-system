const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    duration: String,
    subjects: String,
    career: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);