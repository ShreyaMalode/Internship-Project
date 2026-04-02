import express from "express";
import movies from "../data/movies.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    movies: movies,
  });
});

export default router;