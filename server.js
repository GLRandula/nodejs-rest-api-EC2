const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/db");
const errorHandler = require("./middlewares/errorhandler");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

// User Routes
app.use("/api/users", userRoutes);

// Handle 404 Not Found
app.use((req, res, next) => {
  res.status(404);
  next(new Error(`Route ${req.originalUrl} not found`));
});

// Global Error Handler
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
