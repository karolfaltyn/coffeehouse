import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const Hero = () => {
  const hero_img = require("../assets/images/on-pages/coffee-sketch.webp");
  const b = require("../assets/images/on-pages/2.webp");
  const c = require("../assets/images/on-pages/3.webp");
  const a = require("../assets/images/on-pages/1.webp");

  return (
    <section className="flex items-center bg-[#fdfaf5]" id="home">
      <div className="container">
        <div className="flex items-center justify-center lg:flex-col lg:gap-8 sm:gap-0">
          <div className="max-ch">
            <header>
              <h1 className="font-caveat mb-4 text-5xl font-bold">
                ENJOY THE MOMENT
              </h1>
              <a href="##" className="text-3xl font-medium text-orange-500">
                @thecoffeehouse
              </a>
            </header>
            <p className="mt-2 text-2xl font-light">
              The best coffee bean for every cup of your coffee.
            </p>
            <br />
            <Link
              to="/menu"
              className="font-caveat rounded-md border-2 border-dashed border-gray-400 px-4 py-2 text-xl font-medium text-black transition-all hover:bg-[#F3f3f3]"
            >
              MENU
            </Link>
            <br />
          </div>

          <div className="flex lg:max-w-72 lg:justify-center">
            <img
              src={hero_img}
              alt="coffee"
              className="w-96 md:w-9/12 sm:w-2/3 xs:hidden"
            />
          </div>
          <div className="flex w-48 flex-col lg:hidden">
            <img src={a} alt="coffee" className="w-48" />
            <img src={b} alt="coffee" className="ml-12 w-48" />
            <img src={c} alt="coffee" className="w-48" />
          </div>
        </div>
        <br className="sm:hidden" />
        <br className="sm:hidden" />
        <hr className="border-b border-dashed border-gray-400 sm:hidden" />
      </div>
      <Outlet />
    </section>
  );
};
