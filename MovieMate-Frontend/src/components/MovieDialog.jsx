import React from "react";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import {
  setOpen,
  addToWatchlist,
  removeFromWatchlist,
  addToLiked,
  removeFromLiked
} from "../redux/movieSlice";

// ICONS
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

const MovieDialog = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const dispatch = useDispatch();

  const { open, id, selectedMovie, watchlist, likedMovies } =
    useSelector((store) => store.movie);

  const movie = selectedMovie;

  const isLiked = likedMovies?.some(
    (m) => m.title === movie?.title
  );

  const isAdded = watchlist?.some(
    (m) => m.title === movie?.title
  );

  const [muted, setMuted] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  // LIKE
  const handleLike = () => {
    if (isLiked) {
      dispatch(removeFromLiked(movie));
    } else {
      dispatch(addToLiked(movie));
      setDisliked(false);
    }
  };

  // DISLIKE
  const handleDislike = () => {
    setDisliked(!disliked);
  };

  //  WATCHLIST
  const handleWatchlist = () => {
    if (isAdded) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullScreen>
      <div className="yt-player">

        {/* CLOSE */}
        <button className="yt-close" onClick={handleClose}>
          ✖
        </button>

        {/* VIDEO */}
        <iframe
          key={muted}
          className="yt-video"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${muted ? 1 : 0}&controls=1&rel=0`}
          title="YouTube player"
          allow="autoplay"
          allowFullScreen
        />

        {/* CONTROLS */}
        <div className="yt-controls">

          {/* VOLUME */}
          <button
            className={muted ? "" : "active"}
            onClick={() => setMuted(!muted)}
          >
            {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </button>

          {/* LIKE */}
          <button
            className={isLiked ? "active" : ""}
            onClick={handleLike}
          >
            {isLiked ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
          </button>

          {/* DISLIKE */}
          <button
            className={disliked ? "active" : ""}
            onClick={handleDislike}
          >
            {disliked ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
          </button>

          {/* WATCHLIST */}
          <div
            className="watchlist-wrapper"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <button
              className={`yt-btn ${isAdded ? "active" : ""}`}
              onClick={handleWatchlist}
            >
              {isAdded ? <CheckIcon /> : <AddIcon />}
            </button>

            {showTooltip && (
              <span className="tooltip">
                {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
              </span>
            )}
          </div>

        </div>
      </div>
    </Dialog>
  );
};

export default MovieDialog;