import React, { useState, useEffect } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { auth } from "../services/firebase";

const Navbar = () => {
  const { authed, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <>
      <nav
        id="nav"
        className="flex flex-row w-full justify-between items-center  px-2 py-2 bg-sky-500/25 h-[3em]"
      >
        <div id="logo" className="flex items-center space-x-1 text-xl">
          <FaHandsHelping />
          <h1 className="text-zinc-500">Scriptee.me</h1>
        </div>
        {!authed && (
          <ul className="flex space-x-4 ">
            <li className="hover:text-blue-600">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        )}
        <div>
          {authed ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rouded"
            >
              Logout
            </button>
          ) : null}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
