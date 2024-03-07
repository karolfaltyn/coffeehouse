import { Outlet, Link } from "react-router-dom";
import "../assets/style/style.css";

export const Hero = () => {
  const hero_img = require("../assets/images/on-pages/cappuccino.jpg");

  return (
    <section className="flex items-center" id="home">
      <div className="container">
        <div className="flex items-center justify-center gap-16 lg:flex-col lg:gap-8">
          <div className="max-ch">
            <header>
              <h1 className="mb-4 text-4xl font-bold">ENJOY THE MOMENT</h1>
              <a href="##" className="text-3xl font-semibold">
                @thecoffeehouse
              </a>
            </header>
            <p className="text-2xl">
              The best coffee bean for every cup of your coffee.
            </p>
            <Link
              to="/menu"
              className="text-2xl font-semibold underline decoration-wavy hover:opacity-70"
            >
              MENU
            </Link>
            <br />
          </div>

          <div className="flex lg:justify-center">
            <img
              src={hero_img}
              alt="coffee"
              className="w-96 md:w-9/12 xs:hidden"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};
