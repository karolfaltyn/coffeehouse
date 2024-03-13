import "../assets/style/style.css";
import { CoffeeBox } from "../components/CoffeeBox";

export const CoffeeMenu = () => {
  const img = require("../assets/images/menu/espresso.jpg");

  return (
    <section
      className="mt-16 flex bg-[#F3f3f3] text-[#36322D]"
      id="coffee-types"
    >
      <div className="container">
        <div className="flex flex-col gap-12">
          <div className="mt-12 flex flex-col items-center gap-8">
            <h3 className="text-5xl font-semibold md:text-3xl xs:text-2xl">
              Black Coffee
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4">
            <CoffeeBox
              image={img}
              name="Espresso"
              desc="Lorem Ipsum do asdj sdko w wkaop"
              price="1£"
            />
            <CoffeeBox />
          </div>
        </div>
      </div>
    </section>
  );
};
