const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const admissionRoutes = require("./routes/admissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admissions", admissionRoutes);
app.use("/api/admin", adminRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});