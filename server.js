const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Habilitar CORS
app.use(cors());

// Inicia Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/books", require("./routes/book"));
app.use("/api/users", require("./routes/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
