import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const PlaylistPage = () => {
  const { watchlist, likedMovies } = useSelector((store) => store.movie);

  return (
    <div className="playlist-page">

      {/*  WATCHLIST */}
      <div className="playlist-section">
        <h2>⭐ My Watchlist</h2>
        <div className="playlist-row">
          {watchlist?.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>

      {/* LIKED MOVIES */}
      <div className="playlist-section">
        <h2>👍 Liked Movies</h2>
        <div className="playlist-row">
          {likedMovies?.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default PlaylistPage;