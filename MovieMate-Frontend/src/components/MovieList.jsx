import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie = false, isWatchlist = false }) => {
  if (!movies) return null;

  return (
    <div className="movie-list">
      <h2 className={searchMovie ? "movie-heading dark" : "movie-heading"}>
        {title}
      </h2>

      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={String(movie._id ?? movie.id ?? movie.tmdbId ?? movie.title)}
            movie={movie}
            isWatchlist={isWatchlist}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;