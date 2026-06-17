const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URL);

  const hashedPassword = await bcrypt.hash("admin123", 10);

  await Admin.create({
    email: "admin@college.com",
    password: hashedPassword,
  });

  console.log("Admin created successfully");
  process.exit();
}

createAdmin();