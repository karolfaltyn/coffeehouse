import "../assets/style/style.css";

export const AlertBox = ({ onClose, clearCartItems }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-xl">
          The order has been placed, <br />
          we will inform you when it is ready.
        </h2>
        <p className="mb-4">
          Order number: {Math.floor(Math.random() * 30) + 1}
        </p>

        <button
          onClick={() => {
            onClose();
            clearCartItems();
            window.location.reload();
          }}
          className="w-full rounded-md border border-black bg-white px-4 py-2 text-xl font-semibold text-black transition-all hover:bg-[#F3f3f3]"
        >
          Close
        </button>
      </div>
    </div>
  );
};
