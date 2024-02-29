import React, { useState } from "react";
import "../assets/style/style.css";

export const Navbar = () => {
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
            <a href="##" className="flex gap-4">
              COFFEEHOUSE
              <img src="##" alt="#" />
            </a>
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
            <a href="##">HOME</a>
            <a href="##">ABOUT</a>
            <a href="##">MENU</a>
            <a href="##">REVIEWS</a>
            <a href="##">CONTACT</a>
          </div>
        </div>
      </div>

      {isMenuOpen && <div onClick={closeMenu}></div>}

      <div
        className={`fixed right-0 h-full w-full transform backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="mt-16 flex flex-col items-center gap-12">
          <a href="##" onClick={closeMenu}>
            HOME
          </a>
          <a href="##" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="##" onClick={closeMenu}>
            MENU
          </a>
          <a href="##" onClick={closeMenu}>
            REVIEWS
          </a>
          <a href="##" onClick={closeMenu}>
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};
