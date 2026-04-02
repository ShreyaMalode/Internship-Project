import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import MovieContainer from "../components/MovieContainer";

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [liked, setLiked] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const [video, setVideo] = useState(null);

  // ✅ USER FROM REDUX
  const user = useSelector((store) => store.app.user);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
      .then(res => setMovies(res.data.movies || []));
  }, []);

  const filtered = movies
    .filter(m => category === "all" ? true : m.category === category)
    .filter(m => m.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ background: "#111", minHeight: "100vh" }}>

      {/* ✅ HEADER WITH USER */}
      <Header
        setSearch={setSearch}
        liked={liked}
        watchlist={watchlist}
        user={user}
      />

      {/* HERO */}
      <MainContainer />

      {/* CATEGORY BUTTONS */}
      <div style={{ padding: 20, marginTop: 0 }}>
        {["all", "trending", "popular", "upcoming"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              margin: 5,
              padding: "8px 15px",
              borderRadius: 20,
              border: "none",
              background: category === c ? "red" : "#333",
              color: "white",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* MOVIES */}
      <MovieContainer
        movies={filtered}
        setVideo={setVideo}
        liked={liked}
        watchlist={watchlist}
        setLiked={setLiked}
        setWatchlist={setWatchlist}
      />

      {/* VIDEO POPUP */}
     
      {video && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={() => setVideo(null)} // outside click close
        >

          {/* 🔥 BACK BUTTON */}
          <button
            onClick={() => setVideo(null)}
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              padding: "10px 15px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              zIndex: 10000
            }}
          >
            ⬅ Back
          </button>

          {/* VIDEO BOX */}
          <div onClick={(e) => e.stopPropagation()}>

            <video width="800" controls autoPlay>
              <source src={video.trailer} type="video/mp4" />
            </video>

            <h2 style={{ color: "white", textAlign: "center" }}>
              {video.title}
            </h2>

          </div>
        </div>
      )}




    </div>
  );
};

export default Browse;