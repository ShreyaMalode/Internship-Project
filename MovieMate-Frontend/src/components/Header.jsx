import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBookmark, FaUserCircle } from "react-icons/fa";

const Header = ({ setSearch, liked = [], watchlist = [], user }) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="mm-header">

      {/* LOGO */}
      <h2 className="mm-logo-text">MovieMate</h2>

      {/* SEARCH */}
      <input
        className="mm-search"
        placeholder="Search movies..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* RIGHT SIDE */}
      <div className="mm-header-right">

        {/* 👤 USER ICON + NAME */}
        <div className="mm-user">
          <FaUserCircle size={24} />
          <span className="mm-username">
            {user?.fullName || "Guest"}
          </span>
        </div>

        {/* ❤️ LIKE */}
        <div className="mm-icon">
          <FaHeart color="red" />
          <span>{liked.length}</span>
        </div>

        {/* 📌 WATCHLIST */}
        <div className="mm-icon">
          <FaBookmark color="gold" />
          <span>{watchlist.length}</span>
        </div>

        {/* LOGOUT */}
        <button className="mm-btn" onClick={logout}>
          Logout
        </button>

      </div>
    </div>
  );
};

export default Header;