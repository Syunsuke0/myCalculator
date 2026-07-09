import { BUTTONS } from "@/constants/constants";

export const Keypad = ({ onKeyPressed }) => {
  return (
    <div className=" grid  grid-cols-4">
      {BUTTONS.map((item) => (
        <button
          onClick={() => {
            onKeyPressed(item);
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
