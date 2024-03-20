import "../assets/style/style.css";
import { CoffeeBox } from "../components/CoffeeBox";
import { Cart } from "../components/Cart";

export const CoffeeMenu = ({
  onAddToCart,
  items,
  onIncreaseQuantity,
  onDecreaseQuantity,
  isCartOpen,
  toggleCart,
}) => {
  const espresso = require("../assets/images/menu/espresso.jpg");
  const americano = require("../assets/images/menu/americano.jpg");
  const doppio = require("../assets/images/menu/doppio.jpg");
  const cappuccino = require("../assets/images/menu/cappuccino.jpg");
  const coffee_latte = require("../assets/images/menu/coffee-latte.jpg");
  const latte_macchiato = require("../assets/images/menu/latte-macchiato.jpg");
  const cold_brew = require("../assets/images/menu/cold-brew.jpg");
  const ice_latte = require("../assets/images/menu/ice-latte.jpg");
  const coffee_frappe = require("../assets/images/menu/coffee-frappe.jpg");

  return (
    <section>
      <div
        id="cart-div"
        className={`fixed z-50 h-full w-full transform overflow-y-auto backdrop-blur-sm ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <Cart
          items={items}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
          toggleCart={toggleCart}
        />
      </div>
      <div className="mt-16 flex bg-[#F3f3f3]" id="coffee-types">
        <div className="container">
          <div className="mb-16 flex flex-col gap-12">
            <div className="mt-12 flex flex-col items-center gap-8">
              <h3 className="text-5xl font-semibold md:text-3xl xs:text-2xl">
                Black Coffee
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4">
              <CoffeeBox
                id={1}
                image={espresso}
                name="Espresso"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="1.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={2}
                image={americano}
                name="Americano"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={3}
                image={doppio}
                name="Doppio"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="1.50"
                onAddToCart={onAddToCart}
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-8">
              <h3 className="text-5xl font-semibold md:text-3xl xs:text-2xl">
                White Coffee
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4">
              <CoffeeBox
                id={4}
                image={cappuccino}
                name="Cappuccino"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={5}
                image={coffee_latte}
                name="Coffee Latte"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={6}
                image={latte_macchiato}
                name="Latte Macchiato"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.30"
                onAddToCart={onAddToCart}
              />
            </div>

            <div className="mt-12 flex flex-col items-center gap-8">
              <h3 className="text-5xl font-semibold md:text-3xl xs:text-2xl">
                Cold Coffee
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4">
              <CoffeeBox
                id={7}
                image={cold_brew}
                name="Cold Brew"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={8}
                image={ice_latte}
                name="Ice Latte"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={9}
                image={coffee_frappe}
                name="Coffee Frappe"
                desc="Lorem Ipsum do asdj sdko w wkaop"
                price="2.50"
                onAddToCart={onAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
