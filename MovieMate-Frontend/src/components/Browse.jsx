import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import SearchMovie from "./SearchMovie";
import useMoviesFromBackend from "../hooks/useMoviesFromBackend";
import { useSelector } from "react-redux";
import PlaylistPage from "./PlaylistPage";
const Browse = () => {
  const toggle = useSelector(store => store.movie.toggle);
  const showPlaylist = useSelector(store => store.movie.showPlaylist);
  useMoviesFromBackend();

  return (
    <div>
      <Header />

      {showPlaylist ? (
        <PlaylistPage />   // playlist
      ) : toggle ? (
        <SearchMovie />    // search
      ) : (
        <>
          <MainContainer />
          <MovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;