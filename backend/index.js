const express = require("express");
const mongoose = require("mongoose"); // Import Mongoose for database connection
const cors = require("cors");

// Import and use your MongoDB connection
require("./config");

const app = express();

app.use(express.json());
app.use(cors());

// Import your routers
const userRouter = require("./routers/user.router");
const libraryRouter = require("./routers/library.router"); // Corrected the router name

// Use your routers with appropriate prefixes
app.use("/api/users", userRouter);
app.use("/api/library", libraryRouter); // Adjusted the route for library

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 8080; // Use process.env.PORT for dynamic port allocation

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
