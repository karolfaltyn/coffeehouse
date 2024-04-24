import { useState } from "react";
import { HashLink } from "react-router-hash-link";
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

  return (
    <nav className="fixed inset-x-0 top-0 font-semibold">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <HashLink smooth to="#home">
              <a
                href="#home"
                className="font-caveat flex gap-2 font-black hover:opacity-70"
              >
                COFFEEHOUSE
                <img src={coffee_svg} alt="logo" className="sm:hidden" />
              </a>
            </HashLink>
          </div>
          <div className="hidden md:block">
            <button onClick={toggleMenu}>
              <img src={isMenuOpen ? close : menu} alt="hamburger menu" />
            </button>
          </div>
          <div className={`flex gap-8 ${isMenuOpen ? "" : "block"} md:hidden`}>
            <HashLink smooth to="#home">
              <a
                href="#home"
                className="font-caveat font-black hover:opacity-70"
              >
                HOME
              </a>
            </HashLink>
            <HashLink smooth to="#info">
              <a
                href="#info"
                className="font-caveat font-black hover:opacity-70"
              >
                INFO
              </a>
            </HashLink>
            <HashLink smooth to="#coffee-types">
              <a
                href="#coffee-types"
                className="font-caveat font-black hover:opacity-70"
              >
                COFFEE
              </a>
            </HashLink>

            <HashLink smooth to="#contact">
              <a
                href="#contact"
                className="font-caveat font-black hover:opacity-70"
              >
                CONTACT
              </a>
            </HashLink>
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
              <button className="invisible ">
                <img src={close} alt="close" />
              </button>
              <p className="font-caveat text-4xl font-bold">Menu</p>
              <button onClick={closeMenu}>
                <img src={close} alt="close" />
              </button>
            </h2>
            <div className="flex flex-col items-center gap-4">
              <HashLink smooth to="#home">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="font-caveat text-xl transition-all hover:scale-110"
                >
                  HOME
                </a>
              </HashLink>
              <hr className="w-full border-b border-dashed border-gray-400" />
              <HashLink smooth to="#info">
                <a
                  href="#info"
                  onClick={closeMenu}
                  className="font-caveat text-xl transition-all hover:scale-110"
                >
                  INFO
                </a>
              </HashLink>
              <hr className="w-full border-b border-dashed border-gray-400" />
              <HashLink smooth to="#coffee-types">
                <a
                  href="#coffee-types"
                  onClick={closeMenu}
                  className="font-caveat text-xl transition-all hover:scale-110"
                >
                  COFFEE
                </a>
              </HashLink>
              <hr className="w-full border-b border-dashed border-gray-400" />
              <HashLink smooth to="#contact">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="font-caveat text-xl transition-all hover:scale-110"
                >
                  CONTACT
                </a>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
