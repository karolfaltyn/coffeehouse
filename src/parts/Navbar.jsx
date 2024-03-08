import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const Navbar = () => {
  const coffee_svg = require("../assets/images/svg/bx-coffee.svg").default;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link to="/" className="flex gap-2 font-semibold hover:opacity-70">
              COFFEEHOUSE
              <img src={coffee_svg} alt="logo" className="sm:hidden" />
            </Link>
          </div>
          <div className="hidden md:block">
            <button onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`flex gap-8 ${isMenuOpen ? "" : "block"} md:hidden`}>
            <a href="#home" className="hover:opacity-70">
              HOME
            </a>
            <a href="#info" className="hover:opacity-70">
              INFO
            </a>
            <a href="#coffee-types" className="hover:opacity-70">
              COFFEE
            </a>
            <a href="#contact" className="hover:opacity-70">
              CONTACT
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && <div onClick={closeMenu}></div>}

      <div
        className={`fixed right-0 z-50 h-full w-full transform backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-md border border-black bg-white px-8 py-4 text-4xl font-semibold hover:opacity-70"
          >
            HOME
          </a>
          <hr className="w-9/12 border border-black" />
          <a
            href="#info"
            onClick={closeMenu}
            className="rounded-md border border-black bg-white px-8 py-4 text-4xl font-semibold hover:opacity-70"
          >
            INFO
          </a>
          <hr className="w-9/12 border border-black" />
          <a
            href="#coffee-types"
            onClick={closeMenu}
            className="rounded-md border border-black bg-white px-8 py-4 text-4xl font-semibold hover:opacity-70"
          >
            COFFEE
          </a>
          <hr className="w-9/12 border border-black" />
          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-md border border-black bg-white px-8 py-4 text-4xl font-semibold hover:opacity-70"
          >
            CONTACT
          </a>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
