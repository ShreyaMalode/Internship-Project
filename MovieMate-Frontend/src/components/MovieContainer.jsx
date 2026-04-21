import React from "react";
import MovieList from "./MovieList";
import WatchlistRow from "./WatchlistRow";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const {
    nowPlayingMovies,
    popularMovie,
    topRatedMovies,
    upcomingMovies,
    searchMovies
  } = useSelector(store => store.movie);

  return (
    <div className="movie-container">

      {/* WATCHLIST TOP SLIDER */}
      <WatchlistRow />

      {searchMovies ? (
        <MovieList title="Search Results" movies={searchMovies} />
      ) : (
        <>
          <MovieList title="Now Playing" movies={nowPlayingMovies} />
          <MovieList title="Popular" movies={popularMovie} />
          <MovieList title="Top Rated" movies={topRatedMovies} />
          <MovieList title="Upcoming" movies={upcomingMovies} />
        </>
      )}

    </div>
  );
};

export default MovieContainer;