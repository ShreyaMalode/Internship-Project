// import Movie from "../models/movieModel.js";

// // get all movies
// export const getAllMovies = async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // get movies by category
// export const getMoviesByCategory = async (req, res) => {
//   try {
//     const movies = await Movie.find({ category: req.params.category });
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };