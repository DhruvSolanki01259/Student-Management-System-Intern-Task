import studentRoutes from "./routes/student.route.js";

import express from "express";
import "dotenv/config";

const app = express();
app.use(express.json());

// student, search, default and invalid api routes
app.use("/students", studentRoutes);
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    error: false,
    message: "Server is Running.",
  });
});
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    error: true,
    message: "Invalid Routes.",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server connected to PORT: ${PORT}`);
});
