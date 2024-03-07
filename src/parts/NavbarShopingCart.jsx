import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const NavbarShopingCart = () => {
  return (
    <nav className="fixed inset-x-0 top-0">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link to="/" className="flex gap-4">
              COFFEEHOUSE
              <img src="##" alt="#" className="sm:hidden" />
            </Link>
          </div>
          <div className="flex gap-8">
            <Link to="/" className="hover:opacity-70">
              Home
            </Link>
            Cart
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
