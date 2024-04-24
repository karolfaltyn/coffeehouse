import { useState } from "react";
import "../assets/style/style.css";
import { MoreInfo } from "./MoreInfo";

export const CoffeeBox = ({ id, image, name, desc, price, onAddToCart }) => {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const toggleMoreInfo = () => setIsMoreInfoOpen(!isMoreInfoOpen);

  const handleClick = () => onAddToCart({ id, name, price });

  return (
    <div className="relative flex w-72 flex-col gap-8 rounded-lg bg-white p-6 shadow-lg">
      <div
        className={`absolute transform backdrop-blur-md sxs:hidden ${
          isMoreInfoOpen ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out`}
      >
        <MoreInfo desc={desc} />
      </div>
      <div className="flex self-center">
        <img
          src={image}
          alt="Espresso"
          className="border-8 border-double border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="">
          <h4 className="text-2xl">
            <span className=" font-caveat font-bold text-3xl">{name}</span>
            <br />{" "}
            <span className="font-normal text-orange-400">{price}€</span>
          </h4>
          <button
            onClick={toggleMoreInfo}
            className="mb-4 font-semibold underline decoration-wavy"
          >
            <span className="cursor-pointer  transition-all ease-in-out hover:opacity-70 sxs:hidden">
              {isMoreInfoOpen ? "Close info" : "Read more"}
            </span>
          </button>
        </div>
        <button
          onClick={handleClick}
          className="font-caveat rounded-md border-2 border-dashed border-gray-400 px-4 py-2 text-xl font-thin text-black transition-all hover:bg-[#F3f3f3]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
