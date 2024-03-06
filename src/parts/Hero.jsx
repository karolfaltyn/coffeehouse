import "../assets/style/style.css";

export const Hero = () => {
  const hero_img = require("../assets/images/on-pages/cappuccino.jpg");

  return (
    <section className="bg-gradient flex items-center" id="home">
      <div className="container">
        <div className="flex items-center gap-16 md:flex-col md:gap-8">
          <div className="max-ch">
            <header>
              <h1 className="mb-4 text-5xl font-bold">ENJOY THE MOMENT</h1>
              <a href="##" className="text-3xl font-semibold">
                @ THE COFFEEHOUSE
              </a>
            </header>
            <p className="mb-4 text-2xl">
              The best coffee bean for every cup of your coffee.
            </p>
            <a href="##" className="text-2xl">
              MENU
            </a>
            <br />
          </div>

          <div className="flex md:justify-center">
            <img src={hero_img} alt="coffee" className="md:w-9/12" />
          </div>
        </div>
      </div>
    </section>
  );
};
