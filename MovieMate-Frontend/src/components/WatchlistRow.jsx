import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const WatchlistRow = () => {
  const watchlist = useSelector(store => store.movie.watchlist);

  if (!watchlist || watchlist.length === 0) return null;

  return (
    <div className="movie-list">
      <h2 className="movie-heading">🔥 My Watchlist</h2>

      <div className="movie-row">
        {watchlist.map(movie => (
          <MovieCard
            key={String(movie._id ?? movie.id ?? movie.tmdbId ?? movie.title)}
            movie={movie}
            isWatchlist={true}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchlistRow;