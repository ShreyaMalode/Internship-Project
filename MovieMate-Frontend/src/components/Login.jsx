import React, { useState } from "react";
import Header from "./Header";
import Background from "../assets/Background.png";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

function Login() {
  const [isLogin, setIsLogin] = useState(true); // default login
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post(
          `${API_END_POINT}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } else {
        // SIGNUP
        const res = await axios.post(
          `${API_END_POINT}/register`,
          { fullName, email, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {/* <Header /> */}

      <div

        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "50px"
        }}
      >
        <form onSubmit={getInputData} className="form-box">
          <h1>{isLogin ? "Login" : "Signup"}</h1>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}
          </button>

          <p>
            {isLogin ? "Already have an account?" : "New to MovieMate?"}
            <span onClick={loginHandler}>
              {isLogin ? " Signup" : " Login"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;