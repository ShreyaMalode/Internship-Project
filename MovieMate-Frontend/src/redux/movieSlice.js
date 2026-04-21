import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",

  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovies: null,
    upcomingMovies: null,

    toggle: false,
    trailerMovie: null,
    open: false,
    id: "",

    searchMovies: null,
    recommendedMovies: [],
    selectedMovie: null,

    showPlaylist: false,

    watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
    likedMovies: JSON.parse(localStorage.getItem("likedMovies")) || []
  },

  reducers: {
    //  MOVIES
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },

    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    // UI
    setToggle: (state) => {
      state.toggle = !state.toggle;
      state.showPlaylist = false; // ✅ search open → playlist close
    },


    setOpen: (state, action) => {
      state.open = action.payload;
    },

    // TRAILER
    getId: (state, action) => {
      state.id = action.payload;
    },

    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },

    // SEARCH
    setSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    },

    clearSearchMovies: (state) => {
      state.searchMovies = null;
    },

    //  SELECTED MOVIE
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },

    setShowPlaylist: (state) => {
      state.showPlaylist = !state.showPlaylist;
      state.toggle = false; // ✅ playlist open → search close
    },

    //  RECOMMENDED
    setRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },

    // ================= WATCHLIST =================
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!movie) return;

      const movieId = String(
        movie._id ?? movie.id ?? movie.tmdbId ?? movie.title
      );

      const exists = state.watchlist.some(
        (m) =>
          String(m._id ?? m.id ?? m.tmdbId ?? m.title) === movieId
      );

      if (!exists) {
        state.watchlist.push(movie);
        localStorage.setItem(
          "watchlist",
          JSON.stringify(state.watchlist)
        );
      }
    },

    removeFromWatchlist: (state, action) => {
      const movie = action.payload;
      if (!movie) return;

      const movieId = String(
        movie._id ?? movie.id ?? movie.tmdbId ?? movie.title
      );

      state.watchlist = state.watchlist.filter(
        (m) =>
          String(m._id ?? m.id ?? m.tmdbId ?? m.title) !== movieId
      );

      localStorage.setItem(
        "watchlist",
        JSON.stringify(state.watchlist)
      );
    },

    // ================= LIKE =================
    addToLiked: (state, action) => {
      const movie = action.payload;
      if (!movie) return;

      const movieId = String(
        movie._id ?? movie.id ?? movie.tmdbId ?? movie.title
      );

      const exists = state.likedMovies.some(
        (m) =>
          String(m._id ?? m.id ?? m.tmdbId ?? m.title) === movieId
      );

      if (!exists) {
        state.likedMovies.push(movie);
        localStorage.setItem(
          "likedMovies",
          JSON.stringify(state.likedMovies)
        );
      }
    },

    removeFromLiked: (state, action) => {
      const movie = action.payload;
      if (!movie) return;

      const movieId = String(
        movie._id ?? movie.id ?? movie.tmdbId ?? movie.title
      );

      state.likedMovies = state.likedMovies.filter(
        (m) =>
          String(m._id ?? m.id ?? m.tmdbId ?? m.title) !== movieId
      );

      localStorage.setItem(
        "likedMovies",
        JSON.stringify(state.likedMovies)
      );
    }
  }
});


export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId,
  setSearchMovies,
  clearSearchMovies,
  setSelectedMovie,
  setRecommendedMovies,
  addToWatchlist,
  removeFromWatchlist,
  addToLiked,
  removeFromLiked,
  setShowPlaylist
} = movieSlice.actions;

export default movieSlice.reducer;