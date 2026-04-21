import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrailerMovie,
  setSelectedMovie,
  setRecommendedMovies
} from "../redux/movieSlice";
import { setSearchMovieDetails } from "../redux/searchSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.searchMovie.searchedMovie);

  const recommended = useSelector(
    (store) => store.movie.recommendedMovies
  );

  const {
    nowPlayingMovies,
    popularMovie,
    topRatedMovies,
    upcomingMovies
  } = useSelector((store) => store.movie);

  const searchHandler = async (e) => {
    e.preventDefault();

    if (!query.trim()) return alert("Enter movie name");

    try {
      const res = await axios.get(
        `http://localhost:5000/api/movies/search/${query}`
      );

      console.log("SEARCH RESULT 👉", res.data);

      if (res.data.length > 0) {
        dispatch(
          setSearchMovieDetails({
            searchMovie: query,
            movies: res.data
          })
        );

        const searched = res.data[0];

        dispatch(getTrailerMovie(searched.trailer));
        dispatch(setSelectedMovie(searched));


        let allMovies = [
          ...(popularMovie || []),
          ...(nowPlayingMovies || []),
          ...(topRatedMovies || []),
          ...(upcomingMovies || [])
        ];

        //  remove duplicates
        const uniqueMovies = Array.from(
          new Map(allMovies.map((m) => [m.title, m])).values()
        );

        // remove current movie
        let recommendedMovies = uniqueMovies.filter(
          (movie) => movie.title !== searched.title
        );

        // same category first
        recommendedMovies.sort((a, b) => {
          if (a.category === searched.category) return -1;
          if (b.category === searched.category) return 1;
          return 0;
        });

        // limit 
        recommendedMovies = recommendedMovies.slice(0, 20);

        console.log("RECOMMENDED 👉", recommendedMovies);

        dispatch(setRecommendedMovies(recommendedMovies));
      } else {
        dispatch(
          setSearchMovieDetails({
            searchMovie: query,
            movies: []
          })
        );
        dispatch(setRecommendedMovies([]));
        alert("Movie Not Found");
      }
    } catch (err) {
      console.log(err);
    }

    setQuery("");
  };

  return (
    <>
      {/* SEARCH */}
      <div className="search-container">
        <form onSubmit={searchHandler} className="search-form">
          <div className="search-box">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
              placeholder="Search Movies..."
            />
            <button className="search-button">Search</button>
          </div>
        </form>
      </div>

      {/* RESULTS */}
      <div className="search-result">
        {movies && movies.length > 0 ? (
          <>
            <h2 className="movie-heading dark">Search Results</h2>
            <MovieList movies={movies} searchMovie={true} />
          </>
        ) : (
          <h2 style={{ textAlign: "center", color: "white" }}>
            Movie Not Found
          </h2>
        )}
        {/* RECOMMENDED */}
        {recommended?.length > 0 ? (
          <div className="recommended-section" style={{paddingLeft:"5px"}}>
            <h2 className="movie-heading dark">
               Recommended For You
            </h2>
            <MovieList movies={recommended} />
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "black" }}>
            Search to get recommendations 🔍
          </p>
        )}
      </div>


    </>
  );
};

export default SearchMovie;