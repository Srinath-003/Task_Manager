const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Port
const PORT = 5000;
mongoose.connect("mongodb://localhost:27017/srin")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
