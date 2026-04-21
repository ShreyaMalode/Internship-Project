import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  poster_path: String,
  category: String,
  tmdbId: Number,
  trailer: String
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;