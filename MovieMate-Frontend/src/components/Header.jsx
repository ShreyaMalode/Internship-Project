import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDropdown, IoMdPeople, IoMdPerson } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle, clearSearchMovies } from "../redux/movieSlice";
import { setShowPlaylist } from "../redux/movieSlice";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
function Header() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // page refresh ke baad user set
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      dispatch(setUser(savedUser));
    }
  }, []);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
    dispatch(clearSearchMovies()); //  search reset
  };

  return (
    <div className="header">
      <img src={logo} alt="moviemate-logo" className="logo" />

      {/* ONLY SHOW ON /browse */}
      {user && location.pathname === "/browse" && (
        <div className="header-right">
          <div className="profile">
            <IoMdPerson size={20} />
            <h1 className="username">{user.fullName}</h1>
          </div>

          <div className="button-group">

            <button onClick={toggleHandler} className="btn">
              {toggle ? "Home" : "Search Movie"}
            </button>

            <button
              onClick={() => dispatch(setShowPlaylist())}
              className="btn"
            >
              <PlaylistPlayIcon style={{height:"15px"}} />
            </button>

             <button onClick={logoutHandler} className="btn">
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;