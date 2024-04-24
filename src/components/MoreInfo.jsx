import "../assets/style/style.css";

export const MoreInfo = ({ desc }) => {
  return (
    <div className="flex h-60 w-60 items-center border-8 border-double border-black p-4">
      <p className="text-xl font-semibold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        {desc}
      </p>
    </div>
  );
};
