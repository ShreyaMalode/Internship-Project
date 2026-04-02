import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

// Load env variables
dotenv.config();

// Connect to database
connectDb();

dotenv.config({
    path:".env"
}) 

const app = express();

// Middlewares

app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true
};

app.use(cors(corsOptions));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
