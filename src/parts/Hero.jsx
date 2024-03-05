import "../assets/style/style.css";

export const Hero = () => {
  const hero_img = require("../assets/images/on-pages/cappuccino.jpg");

  return (
    <section className=" bg-gradient flex items-center" id="home">
      <div className="container">
        <div className="flex items-center justify-around md:flex-col-reverse md:gap-32">
          <div>
            <header>
              <h1 className="mb-4 text-5xl font-bold">ENJOY THE MOMENT</h1>
              <a
                href="##"
                className="text-3xl font-semibold underline decoration-wavy"
              >
                @ THE COFFEEHOUSE
              </a>
              <p className="mb-8 mt-8 text-2xl">
                The best coffee bean for every cup of your coffee.
              </p>
              <a href="##" className=" text-2xl">
                MENU
              </a>
              <br />
            </header>
          </div>

          <div className="shadow-md">
            <img src={hero_img} alt="coffee" className="hero-img rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
