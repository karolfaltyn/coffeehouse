import "../assets/style/style.css";

export const Info = () => {
  const barista = require("../assets/images/on-pages/barista-collage.png");

  return (
    <section className="flex items-center" id="info">
      <div className="container">
        <div className="flex items-center gap-16 lg:flex-col sm:gap-8">
          <div className="flex lg:justify-center">
            <img
              src={barista}
              alt="employees"
              className="sm:8-12 lg:w-9/12 xs:hidden"
            />
          </div>

          <div className="max-ch">
            <h3 className="mb-4 text-3xl font-semibold">
              What's Make Our Coffee Special!
            </h3>
            <p className="mb-4">
              Our coffee is prepared by professional baristas with many years of
              experience. You can always count on coffee prepared from fresh,
              highest quality beans. We are also aware of plastic pollution so
              we encourage you to bring your own thermal mug for takeaway
              options.
            </p>
            <a
              href="##"
              className="font-semibold underline decoration-wavy hover:opacity-70"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
