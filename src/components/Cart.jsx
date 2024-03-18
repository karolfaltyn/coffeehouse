import "../assets/style/style.css";

export const Cart = ({ items, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalAmount = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="mb-4 border p-4">
      <h2 className="mb-4 font-bold">Twój koszyk</h2>
      {items.length === 0 ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  {item.name} - {item.price} € - {item.quantity} szt.
                </div>
                <div>
                  <button
                    className="mr-2 rounded bg-blue-500 px-2 py-1 text-white"
                    onClick={() => onIncreaseQuantity(index)}
                  >
                    +
                  </button>
                  <button
                    className="rounded bg-red-500 px-2 py-1 text-white"
                    onClick={() => onDecreaseQuantity(index)}
                    disabled={item.quantity === 0}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">
            Łączna kwota: {totalAmount.toFixed(2)} €
          </div>
        </div>
      )}
    </div>
  );
};
