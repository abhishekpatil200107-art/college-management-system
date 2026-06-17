const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    name: String,
    department: String,
    qualification: String,
    experience: String,
    email: String,
    photoURL: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", facultySchema);