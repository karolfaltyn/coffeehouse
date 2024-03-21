import "../assets/style/style.css";

export const MoreInfo = ({ desc }) => {
  return (
    <div className="h-60 w-60 border-8 border-double border-black p-4 font-bold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
      <p>{desc}</p>
    </div>
  );
};
