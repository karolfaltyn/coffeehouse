import "../assets/style/style.css";
import { Outlet, Link } from "react-router-dom";

export const PageNotFound = () => {
  const hero_img = require("../assets/images/on-pages/coffee-sketch.webp");

  return (
    <section className="flex items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <img
            src={hero_img}
            alt="coffee"
            className="transition-all hover:scale-110"
          />
          <h1 className="font-caveat text-5xl font-black">404</h1>
          <p className="font-caveat text-3xl font-black">
            We don't have that coffee yet.
          </p>
          <Link
            to="/"
            className="font-medium text-orange-400 underline decoration-wavy hover:opacity-70"
          >
            Let's go back.
          </Link>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
