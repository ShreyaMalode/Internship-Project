// import express from "express";
// import Movie from "../models/movie.js";

// const router = express.Router();


// // GET all movies
// router.get("/", async (req, res) => {
//   try {
//     const movies = await Movie.find();
//     res.json(movies);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // GET single movie
// router.get("/:id", async (req, res) => {
//   try {
//     const movie = await Movie.findById(req.params.id);
//     res.json(movie);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // POST add new movie
// router.post("/", async (req, res) => {
//   try {
//     const movie = new Movie(req.body);
//     const savedMovie = await movie.save();
//     res.status(201).json(savedMovie);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// // PUT update movie
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedMovie);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// // PATCH update movie
// router.patch("/:id", async (req, res) => {
//   try {
//     const updatedMovie = await Movie.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedMovie);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


// // DELETE movie
// router.delete("/:id", async (req, res) => {
//   try {
//     await Movie.findByIdAndDelete(req.params.id);
//     res.json({ message: "Movie deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// export default router;