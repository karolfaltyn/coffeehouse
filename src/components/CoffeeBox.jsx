import "../assets/style/style.css";

export const CoffeeBox = ({ id, image, name, desc, price, onAddToCart }) => {
  const handleClick = () => {
    onAddToCart({ id, name, price });
  };

  return (
    <div className="flex w-72 flex-col gap-8 rounded-lg bg-white p-6 shadow-lg">
      <div className="flex self-center">
        <img
          src={image}
          alt="Espresso"
          className="border-8 border-double border-black"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="">
          <h4 className="text-2xl font-bold">
            {name} <br /> <span className="text-orange-400">{price}€</span>
          </h4>
          <p className="mb-4 font-semibold underline decoration-wavy">
            <span className="cursor-pointer hover:opacity-70">Read more</span>
          </p>
        </div>
        <button
          onClick={handleClick}
          className="rounded-md border border-black bg-white px-4 py-2 text-xl font-semibold text-black transition-all hover:bg-[#F3f3f3]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
