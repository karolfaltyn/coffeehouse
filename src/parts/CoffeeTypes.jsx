import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const CoffeeTypes = () => {
  const black = require("../assets/images/on-pages/black-coffee.webp");
  const white = require("../assets/images/on-pages/white-coffee.webp");
  const cold = require("../assets/images/on-pages/cold-coffee.webp");

  return (
    <section
      className="bg-coffee flex items-center bg-[#F3f3f3]"
      id="coffee-types"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-8 md:gap-4">
            <div>
              <img
                src={black}
                alt="black coffee"
                className="w-64 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
            <div>
              <img
                src={white}
                alt="white coffee"
                className="w-72 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
            <div>
              <img
                src={cold}
                alt="cold coffee"
                className="w-64 border-8 border-double border-black transition-all hover:scale-110"
              />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-8">
            <h3 className="font-caveat text-5xl md:text-3xl xs:text-2xl">
              Which type are you?
            </h3>
            <Link
              to="/menu"
              className="font-caveat rounded-md border-2 border-dashed border-gray-400 px-4 py-2 text-xl font-medium text-black transition-all hover:bg-[#fff]"
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
