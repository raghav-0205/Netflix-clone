import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../contexts/userContext";
import { MdCheck } from "react-icons/md";
import Msg from "./Msg";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginSpace = ({ useCase }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { user, setuser } = useContext(userContext);
  const [showMsg, setshowMsg] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const sendUser = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        user
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message);
    }
  };

  const checkUser = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signin",
        user
      );
      setMessage(response.data.message);
      return response;
    } catch (error) {
      console.error(error);
      setMessage(error.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (useCase === "Sign up") {
      const id = uuidv4();
      const USER = { id: id, name: name, email: email, password: password };
      await sendUser(USER);
      setshowMsg(true);
      setTimeout(() => {
        setshowMsg(false);
        navigate("/signin");
      }, 3000);
    } else {
      const USER = { email: email, password: password };
      const response = await checkUser(USER);
      if (response && response.data.user) {
        setuser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        if (!rememberMe) {
          setTimeout(() => {
            setuser((prevUser) => ({ ...prevUser, isLoggedIn: true }));
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, isLoggedIn: false })
            );
          }, 10000);
        }

        navigate("/browse");
      } else {
        setshowMsg(true);
        setTimeout(() => {
          setshowMsg(false);
        }, 3000);
      }
    }
    setname("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex flex-col justify-evenly items-center gap-2 min-h-[70vh] w-[450px] bg-[rgba(0,0,0,0.7)] rounded-lg p-5  text-white">
        <h2 className="text-3xl font-bold mt-4 mb-3 pl-5 self-baseline">
          {useCase}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex w-[90%] flex-col space-y-4"
        >
          {useCase === "Sign up" && (
            <input
              type="text"
              placeholder="Name "
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="p-3 bg-[#18161698] backdrop-opacity-5 border border-white/20 rounded outline-none transition duration-300 focus:border-white/50 focus:ring-1 focus:ring-white/30"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-[#18161698] backdrop-opacity-5 border border-white/20 rounded outline-none transition duration-300 focus:border-white/50 focus:ring-1 focus:ring-white/30"
            required
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-10 bg-[#18161698] text-white placeholder-gray-400 
               backdrop-opacity-5 border border-white/20 rounded outline-none 
               transition duration-300 focus:border-white/50 focus:ring-1 focus:ring-white/30"
              required
            />
            <button
              type="button"
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white 
               text-lg p-1 rounded-full hover:bg-white/20 focus:outline-none hover:cursor-pointer transition "
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-red-600 p-2 rounded font-bold cursor-pointer hover:bg-red-700 transition"
          >
            {useCase}
          </button>
        </form>
        <div className="flex items-center gap-2 w-[90%]">
          {useCase === "Sign in" && (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <label
                htmlFor="rememberMe"
                className="flex items-center cursor-pointer"
              >
                <input
                  id="rememberMe"
                  type="checkbox"
                  className="hidden peer"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <div className="w-5 h-5 flex items-center justify-center border border-gray-600 rounded-sm bg-[#0c0c0c] peer-checked:bg-white peer-checked:hover:bg-gray-300  peer-checked:border-white hover:border-white transition-[background-color] delay-200 ease-in-out">
                  <MdCheck
                    className={`${
                      rememberMe ? "opacity-100" : "opacity-0"
                    } text-black transition delay-200`}
                    size={15}
                  />
                </div>
                <span className="ml-2 text-white">Remember me</span>
              </label>
            </div>
          )}
        </div>
        {showMsg && (
          <div className="w-full">
            <Msg msg={message} />
          </div>
        )}
        {useCase === "Sign in" ? (
          <div className="mt-6 text-sm">
            <span className="text-gray-300">New to Netflix? </span>
            <NavLink
              to="/signup"
              className="text-white hover:underline font-semibold"
            >
              Sign up now
            </NavLink>
          </div>
        ) : (
          <div className="mt-6 text-sm">
            <span className="text-gray-300">Already have an account? </span>
            <NavLink to="/signin" className="text-white hover:underline">
              Sign in
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginSpace;
