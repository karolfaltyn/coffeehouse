import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const CoffeeMenu = () => {
  const black = require("../assets/images/on-pages/black-coffee.jpg");
  const white = require("../assets/images/on-pages/white-coffee.jpg");
  const cold = require("../assets/images/on-pages/cold-coffee.jpg");

  return (
    <section className="bg-coffee flex items-center" id="coffee-types">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-8 md:gap-4">
            <div>
              <img
                src={black}
                alt="black coffee"
                className="w-72 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
            <div>
              <img
                src={white}
                alt="white coffee"
                className="w-80 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
            <div>
              <img
                src={cold}
                alt="cold coffee"
                className="w-72 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-8">
            <h3 className="text-5xl md:text-3xl xs:text-2xl">
              Which type are you?
            </h3>
            <Link
              to="/menu"
              className="font-semibold underline decoration-wavy"
            >
              MENU
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
