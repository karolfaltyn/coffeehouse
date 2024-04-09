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
  clearCartItems,
}) => {
  const espresso = require("../assets/images/menu/espresso.webp");
  const americano = require("../assets/images/menu/americano.webp");
  const lungo = require("../assets/images/menu/lungo.webp");
  const cappuccino = require("../assets/images/menu/cappuccino.webp");
  const coffee_latte = require("../assets/images/menu/coffee-latte.webp");
  const latte_macchiato = require("../assets/images/menu/latte-macchiato.webp");
  const cold_brew = require("../assets/images/menu/cold-brew.webp");
  const ice_latte = require("../assets/images/menu/ice-latte.webp");
  const coffee_frappe = require("../assets/images/menu/coffee-frappe.webp");

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
          clearCartItems={clearCartItems}
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
                desc="The foundation of other coffees. This beverage is served as a small, strong shot of caffeine."
                price="1.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={2}
                image={americano}
                name="Americano"
                desc="Technically a “black coffee”, the americano is a shot of espresso made up with hot water. "
                price="2.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={3}
                image={lungo}
                name="Lungo"
                desc="A lungo is an espresso coffee, but with a higher volume than a standard espresso."
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
                desc="The cappuccino is one part espresso, one part milk, and one part foam."
                price="2.20"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={5}
                image={coffee_latte}
                name="Coffee Latte"
                desc="The latte is comprised of a shot of espresso and steamed milk with just a touch of foam."
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={6}
                image={latte_macchiato}
                name="Latte Macchiato"
                desc="Layered coffee prepared with a small portion of espresso, milk and milk froth."
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
                desc="Coffee prepared by steeping ground beans in cold water for an extended period, usually 12-24 hours."
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={8}
                image={ice_latte}
                name="Ice Latte"
                desc="One shot of espresso and plenty of cold milk, optional sweet syrup."
                price="2.50"
                onAddToCart={onAddToCart}
              />
              <CoffeeBox
                id={9}
                image={coffee_frappe}
                name="Coffee Frappe"
                desc="Made of water, espresso, sugar, milk, ice and is shaken, blended or beaten to combine the ingredients."
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
