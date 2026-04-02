import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    poster: String,
    banner: String,
    video: String,
    rating: Number,
    year: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);