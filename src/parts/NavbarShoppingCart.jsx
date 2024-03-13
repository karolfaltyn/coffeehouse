import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const NavbarShoppingCart = () => {
  const coffee_svg = require("../assets/images/svg/bx-coffee.svg").default;

  return (
    <nav className="fixed inset-x-0 top-0 font-semibold">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link to="/" className="flex gap-2 font-semibold hover:opacity-70">
              COFFEEHOUSE
              <img src={coffee_svg} alt="logo" className="sm:hidden" />
            </Link>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="hover:opacity-70">
              HOME
            </Link>
            CART
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
