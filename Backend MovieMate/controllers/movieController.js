import Movie from "../models/movieModel.js";

// GET ALL MOVIES CATEGORY WISE
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    const nowPlaying = movies.filter(m => m.category === "nowPlaying");
    const popular = movies.filter(m => m.category === "popular");
    const topRated = movies.filter(m => m.category === "topRated");
    const upcoming = movies.filter(m => m.category === "upcoming");

    res.json({
      nowPlaying,
      popular,
      topRated,
      upcoming
    });

  } catch (error) {
    res.status(500).json({ message: "Error fetching movies" });
  }
};


//  SEARCH MOVIE (TITLE + CATEGORY )
export const searchMovies = async (req, res) => {
  try {
    const query = req.params.query;

    const movies = await Movie.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } } // 🔥 CATEGORY SEARCH
      ]
    });

    res.json(movies);

  } catch (error) {
    res.status(500).json({ message: "Search error" });
  }
};