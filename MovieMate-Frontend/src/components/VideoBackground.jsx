import React from "react";

const VideoBackground = () => {
  return (
    <video className="mm-video" autoPlay loop muted>
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;

