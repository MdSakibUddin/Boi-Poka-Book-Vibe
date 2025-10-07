import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-4">Home</li>
      </Link>
      <Link to="/listedbooks">
        <li className="m-4">Listed Books</li>
      </Link>

      <li className="m-4">Pages to Read</li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      {/* 👇 this div centers all content and limits width */}
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* Navbar Start */}
        <div className="flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className=" flex gap-3">
          <a className="btn bg-[#23BE0A] hover:bg-[#1fa108] text-white">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] hover:bg-[#084147] text-white">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
