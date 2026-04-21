import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";
const VideoTitle = ({ title, overview, muted, setMuted }) => {
  const dispatch = useDispatch();
  const trailerMovie = useSelector(store => store.movie.trailerMovie);

  const handlePlay = () => {
    setMuted(false); //(sound ON)
    dispatch(getId(trailerMovie));
    dispatch(setOpen(true));
  };

  return (
    <div className="video-title">
      <h1 className="title-heading">{title}</h1>

      <p className="title-desc">{overview}</p>

      <div className="btn-group">

        {/* PLAY */}
        <button className="play-btn" onClick={handlePlay}>
          <CiPlay1 size={24} />
          <span>Watch Now</span>
        </button>

        {/*  MUTE / UNMUTE */}
        <button
          className="info-btn"
          onClick={() => setMuted(prev => !prev)}
        >
          {muted ? "🔇 Mute" : "🔊 Unmute"}
        </button>

      </div>
    </div>
  );
};
export default VideoTitle;