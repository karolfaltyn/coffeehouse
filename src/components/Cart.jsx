import "../assets/style/style.css";
import { useState } from "react";
import { AlertBox } from "./AlertBox";

export const Cart = ({
  items,
  onIncreaseQuantity,
  onDecreaseQuantity,
  toggleCart,
  clearCartItems,
}) => {
  const close = require("../assets/images/svg/bx-x.svg").default;
  const plus = require("../assets/images/svg/bx-plus-circle.svg").default;
  const minus = require("../assets/images/svg/bx-minus-circle.svg").default;

  const [showAlert, setShowAlert] = useState(false);

  const toggleAlert = () => setShowAlert(!showAlert);

  const scrollToTop = () =>
    document.querySelector("#cart-div").classList.remove("overflow-y-auto");

  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container flex flex-col items-center">
      <div className="mb-32 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-8 flex justify-between justify-self-center text-center text-2xl font-bold">
          <button className="invisible">
            <img src={close} alt="close" />
          </button>
          Shopping Cart{" "}
          <button onClick={toggleCart}>
            <img src={close} alt="close" />
          </button>
        </h2>
        <p className="mb-4 text-center text-2xl font-bold">
          Order pickup only <br />
          at the premises!
        </p>

        {items.length === 0 ? (
          <p>Cart is empty, add some products.</p>
        ) : (
          <>
            <div className="mb-4 flex justify-center gap-4 font-semibold">
              <form>
                <input
                  type="radio"
                  id="eatin"
                  name="option"
                  value="1"
                  defaultChecked
                />
                <label htmlFor="eatin">Eat in</label>
                <br />
                <input type="radio" id="takeout" name="option" value="2" />
                <label htmlFor="takeout">Take out</label>
              </form>
            </div>
            <ul>
              <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between gap-8 sx:flex-col sx:gap-2"
                  >
                    <div>
                      <span className="font-medium">{item.name}</span> -{" "}
                      {item.price} € x {item.quantity}
                    </div>
                    <div className="flex self-center justify-self-center">
                      <button
                        className="mx-4 text-black"
                        onClick={() => onIncreaseQuantity(index)}
                      >
                        <img src={plus} alt="plus" />
                      </button>
                      <button
                        className="text-black"
                        onClick={() => onDecreaseQuantity(index)}
                        disabled={item.quantity === 0}
                      >
                        <img src={minus} alt="minus" />
                      </button>
                    </div>
                  </li>
                ))}
              </div>
              <div className=" mb-2 mt-6 text-lg font-semibold">
                Total amount: {totalAmount.toFixed(2)} €
              </div>
            </ul>
            <button
              onClick={() => {
                toggleAlert();
                scrollToTop();
              }}
              className="w-full rounded-md border border-black bg-white px-4 py-2 text-xl font-semibold text-black transition-all hover:bg-[#F3f3f3]"
            >
              Confirm order
            </button>
            {showAlert && (
              <AlertBox onClose={toggleAlert} clearCartItems={clearCartItems} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
