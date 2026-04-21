import React from "react";

const VideoBackground = ({ trailer, muted }) => {
  return (
    <iframe
      key={muted} // 🔥 re-render jab mute change ho
      className="video-frame"
      src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${trailer}&playsinline=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export default VideoBackground;