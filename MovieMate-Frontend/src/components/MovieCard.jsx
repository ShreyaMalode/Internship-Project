import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getId,
  setOpen,
  addToWatchlist,
  removeFromWatchlist
} from "../redux/movieSlice";
import { setSelectedMovie } from "../redux/movieSlice";
const MovieCard = ({ movie, isWatchlist = false }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((store) => store.movie.watchlist);

  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const hoverTimeout = useRef(null); // 🔥 important

  const movieId = String(
    movie._id ?? movie.id ?? movie.tmdbId ?? movie.title
  );

  const isAdded = watchlist.some(
    (m) =>
      String(m._id ?? m.id ?? m.tmdbId ?? m.title) === movieId
  );

  const handleWatchlist = (e) => {
    e.stopPropagation();
    if (isAdded) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  const handlePlay = () => {
    dispatch(setSelectedMovie(movie));
    dispatch(getId(movie.trailer));
    dispatch(setOpen(true));
  };

  //  HOVER DELAY 
  const handleEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setHovered(true);
    }, 500); // 500ms delay
  };

  const handleLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHovered(false);
  };

  return (
    <div
      className="movie-card"
      onClick={handlePlay}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/*  IMAGE + VIDEO */}
      <div className="movie-inner">

        {/* POSTER */}
        <img
          src={movie.poster_path}
          className="movie-image"
          style={{ opacity: hovered ? 0 : 1 }}
        />

        {/*  HOVER VIDEO */}
        {hovered && movie.trailer && (
          <iframe
            className="hover-video"
            loading="lazy"
            src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
            title="hover trailer"
            allow="autoplay"
          />
        )}

      </div>

      {/*  POPUP */}
      <div className="hotstar-popup">

        <img src={movie.poster_path} className="popup-img" />

        <div className="popup-content">

          <div className="action-row">

            <button
              className="watch-now"
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
            >
              ▶ Watch Now
            </button>

            <div
              className="watchlist-wrapper"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <button
                className="plus-inline"
                onClick={handleWatchlist}
              >
                {isAdded ? "✔" : "+"}
              </button>

              {showTooltip && (
                <span className="tooltip">
                  {isAdded
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"}
                </span>
              )}
            </div>

          </div>

          <div className="meta-row">
            <span className="meta-item rating">
              ⭐ {movie.rating || "8.0"}
            </span>
          </div>

          <div className="genre-tags">
            {(movie.genres ||
              movie.genre ||
              [movie.category || "Movie"])
              ?.slice(0, 3)
              .map((g, i) => (
                <span key={i} className="genre-pill">
                  {typeof g === "string" ? g : g.name}
                </span>
              ))}
          </div>

          <p className="desc">
            {movie.overview ||
              movie.description ||
              "No description available"}
          </p>

          <div className="badge-row">
            {movie.adult && <span className="badge red">18+</span>}
            {movie.popularity > 80 && (
              <span className="badge gold">Trending</span>
            )}
            {movie.vote_average > 8 && (
              <span className="badge green">Top Rated</span>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieCard;