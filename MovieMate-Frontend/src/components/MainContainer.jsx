import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  //  Selected movie ya default first movie
  const selected = useSelector(store => store.movie.selectedMovie);
  const movies = useSelector(store => store.movie.nowPlayingMovies);

  const movie = selected || movies?.find(m => m.title === "Avatar 2") || movies?.[0];
  //  Volume control
  const [muted, setMuted] = useState(true);

  if (!movie) return null;

  return (
    <div className="main-container">

      {/*  HERO VIDEO */}
      <VideoBackground
        trailer={movie.trailer}
        muted={muted}
      />

      {/*  TITLE + BUTTONS */}
      <VideoTitle
        title={movie.title}
        overview={movie.overview}
        movie={movie}
        muted={muted}
        setMuted={setMuted}
      />

    </div>
  );
};

export default MainContainer;