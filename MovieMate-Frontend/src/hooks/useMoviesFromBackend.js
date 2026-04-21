import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  getTrailerMovie
} from "../redux/movieSlice";

const useMoviesFromBackend = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies")
      .then(res => {

        dispatch(getNowPlayingMovies(res.data.nowPlaying));
        dispatch(getPopularMovie(res.data.popular));
        dispatch(getTopRatedMovie(res.data.topRated));
        dispatch(getUpcomingMovie(res.data.upcoming));

        //  DEFAULT BANNER VIDEO
        if (res.data.nowPlaying.length > 0) {
          dispatch(getTrailerMovie(res.data.nowPlaying[0].trailer));
        }

      })
      .catch(err => console.log(err));
  }, []);
};

export default useMoviesFromBackend;