import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const Navbar = () => {
  const menu = require("../assets/images/svg/bx-menu.svg").default;
  const close = require("../assets/images/svg/bx-x.svg").default;
  const coffee_svg = require("../assets/images/svg/bx-coffee.svg").default;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <nav className="fixed inset-x-0 top-0 font-semibold">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link to="/" className="flex gap-2 hover:opacity-70">
              COFFEEHOUSE
              <img src={coffee_svg} alt="logo" className="sm:hidden" />
            </Link>
          </div>
          <div className="hidden md:block">
            <button onClick={toggleMenu}>
              <img src={isMenuOpen ? close : menu} alt="hamburger menu" />
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

      <div
        className={`fixed z-50 h-full w-full transform backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container flex flex-col items-center">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-8 flex justify-between gap-8 justify-self-center text-center text-2xl font-bold">
              <button className="invisible">
                <img src={close} alt="close" />
              </button>
              Menu
              <button onClick={closeMenu}>
                <img src={close} alt="close" />
              </button>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-xl transition-all hover:scale-110"
              >
                HOME
              </a>
              <hr className="w-full border-b border-dotted border-slate-900" />

              <a
                href="#info"
                onClick={closeMenu}
                className="text-xl transition-all hover:scale-110"
              >
                INFO
              </a>
              <hr className="w-full border-b border-dotted border-slate-900" />
              <a
                href="#coffee-types"
                onClick={closeMenu}
                className="text-xl transition-all hover:scale-110"
              >
                COFFEE
              </a>
              <hr className="w-full border-b border-dotted border-slate-900" />

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-xl transition-all hover:scale-110"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
