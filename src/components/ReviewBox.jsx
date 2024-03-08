import "../assets/style/style.css";

export const ReviewBox = ({ photo, name, rate, review }) => {
  return (
    <div className="border border-black">
      <div className="w-1/1 flex items-center justify-center gap-4 p-4">
        <div>
          <img src={photo} alt="person" className="" />
        </div>
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <p>{rate}</p>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};
