import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import movieRoutes from "./routes/movieRoutes.js";// for movies


dotenv.config({
    path:".env"
}) 

// Load env variables
// dotenv.config();

// Connect to database
connectDb();

// dotenv.config({
//     path:".env"
// }) 

const app = express();

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"
    // , "http://localhost:5174"
  ],
  credentials: true
};


// const corsOptions = {
//   origin: ["http://localhost:5173"],
//   credentials: true
// };

app.use(cors(corsOptions));

// Routes
app.use("/api/user", userRoutes);
app.use("/api/movies", movieRoutes);// for movies


// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
console.log("🔥 THIS BACKEND IS RUNNING - SHREYA PROJECT");
