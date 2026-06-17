const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    course: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);