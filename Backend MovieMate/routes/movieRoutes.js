import express from "express";
import Movie from "../models/movieModel.js";

const router = express.Router();

// SEARCH ROUTE
router.get("/search/:query", async (req, res) => {
  try {
    const q = req.params.query;

    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } }
        
      ]
    });

    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Search error" });
  }
});
//  GET ALL MOVIES
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.json({
      nowPlaying: movies.filter(m => m.category === "nowPlaying"),
      popular: movies.filter(m => m.category === "popular"),
      topRated: movies.filter(m => m.category === "topRated"),
      upcoming: movies.filter(m => m.category === "upcoming"),
    });

  } catch (error) {
    res.status(500).json({ message: "Error fetching movies" });
  }
});

export default router;