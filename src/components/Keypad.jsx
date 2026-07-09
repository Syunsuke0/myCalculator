import { BUTTONS } from "@/constants/constants";

export const Keypad = ({ OnKeyPressed }) => {
  return (
    <div className=" grid  grid-cols-4">
      {BUTTONS.map((item) => (
        <button
          onClick={() => {
            OnKeyPressed(item);
          }}
          key={item}
          className=" h-12 bg-white text-black outline-1 font-bold text-3xl"
        >
          {item}
        </button>
      ))}
    </div>
  );
};
