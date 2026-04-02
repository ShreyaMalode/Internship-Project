import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
import Movie from "./models/movieModel.js";

dotenv.config(); // ✅ load env

const data = JSON.parse(
  fs.readFileSync("./data/movies.json", "utf-8")
);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB Connected");

    await Movie.deleteMany();
    console.log("🧹 Old data deleted");

    await Movie.insertMany(data);
    console.log("🎬 Movies inserted");

    process.exit();
  } catch (error) {
    console.log("❌ Error:", error);
  }
};

seedData();