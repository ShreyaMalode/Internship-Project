import React from "react";

const MovieContainer = ({
  movies,
  setVideo,
  liked,
  watchlist,
  setLiked,
  setWatchlist
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: 20 }}>

      {movies.map(movie => (
        <div key={movie.id} style={{ width: 200 }}>

          {/* POSTER CLICK → OPEN VIDEO */}
          <img
            src={movie.poster}
            alt={movie.title}
            style={{ width: "100%", cursor: "pointer" }}
            onClick={() => setVideo(movie)}
          />

          <h4 style={{ color: "white" }}>{movie.title}</h4>

          <button onClick={() => setLiked([...liked, movie])}>
            ❤️ Like
          </button>

          <button onClick={() => setWatchlist([...watchlist, movie])}>
            📌 Watchlist
          </button>

        </div>
      ))}

    </div>
  );
};

export default MovieContainer;