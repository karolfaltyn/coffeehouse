import { useState } from "react";
import { NavbarShoppingCart } from "../parts/NavbarShoppingCart";
import { CoffeeMenu } from "../parts/CoffeeMenu";

export const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <NavbarShoppingCart toggleCart={toggleCart} />
      <main>
        <CoffeeMenu
          onAddToCart={addToCart}
          items={cartItems}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
        />
      </main>
    </>
  );
};
