import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const NavbarShoppingCart = ({ toggleCart, isCartOpen }) => {
  const coffee_svg = require("../assets/images/svg/bx-coffee.svg").default;
  const cart = require("../assets/images/svg/bx-cart.svg").default;
  const close = require("../assets/images/svg/bx-x.svg").default;

  return (
    <nav className="fixed inset-x-0 top-0 bg-[#F3f3f3] font-semibold">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link to="/" className="flex gap-2 font-semibold hover:opacity-70">
              COFFEEHOUSE
              <img src={coffee_svg} alt="logo" className="sm:hidden" />
            </Link>
          </div>
          <button onClick={toggleCart}>
            <img src={isCartOpen ? close : cart} alt="shopping cart" />
          </button>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
