import "../assets/style/style.css";

export const Cart = ({ items, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container flex flex-col items-center">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-8 text-center text-2xl font-bold">Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Cart is empty, add some products.</p>
        ) : (
          <div>
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div>
                    {item.name} - {item.price} € - {item.quantity} szt.
                  </div>
                  <div>
                    <button
                      className="mr-2 rounded border px-2 py-1 text-black"
                      onClick={() => onIncreaseQuantity(index)}
                    >
                      +
                    </button>
                    <button
                      className="rounded border px-2 py-1 text-black"
                      onClick={() => onDecreaseQuantity(index)}
                      disabled={item.quantity === 0}
                    >
                      -
                    </button>
                  </div>
                </li>
              ))}
            </div>
            <div className="mt-4 font-bold">
              Total amount: {totalAmount.toFixed(2)} €
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
