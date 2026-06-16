const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    course: String,
    message: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admission", admissionSchema);