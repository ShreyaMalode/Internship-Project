import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';
import bg from "../assets/Background.png";

function Login() {
  const [isLogin, setIsLogin] =
    // useState(false);
    useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector(store => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  }
  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success(res.data.message);
          // }
          dispatch(setUser(res.data.user));
          localStorage.setItem("user", JSON.stringify(res.data.user));//newly add
          navigate("/browse");
        }
      }
      // catch (error) {
      //     toast.error(error.response.data.message);
      //     console.log(error);
      // }
      catch (error) {
        console.log(error);
        dispatch(setUser(null)); // later add
        toast.error(
          error?.response?.data?.message || "Something went wrong"
        );
      }
      finally {
        dispatch(setLoading(false));
      }
    } else {
      //register
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      }
      // catch (error) {
      //     toast.error(error.response.data.message);
      //     console.log(error);
      // } 
      catch (error) {
        console.log(error);
        toast.error(
          error?.response?.data?.message || "Something went wrong"
        );
      }
      finally {
        dispatch(setLoading(false));
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />

      <div className="banner">
        <img src={bg} alt="background" className="banner-img" />
      </div>

      <div>
        <form className="login-form" onSubmit={getInputData}>
          <h1>{isLogin ? "Login" : "Signup"}</h1>

          {!isLogin &&
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
            />
          }

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            {`${isLoading ? "loading..." : (isLogin ? "Login" : "SIgnup")}`}
          </button>

          <p >
            {isLogin
              ? "New to MovieMate?"
              : "Already have an account?"}<span onClick={loginHandler}>{isLogin ? "signup" : "Login"}</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
