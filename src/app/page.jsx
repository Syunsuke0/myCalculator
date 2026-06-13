export default function Home() {
  const count = 12;
  const BUTTONS = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];
  return (
    <div className="bg-white">
      <div className="text-4xl">計算結果:{count}</div>
      <div className=" grid  grid-cols-4">
        {BUTTONS.map((item) => (
          <button
            key={item}
            className=" h-12 bg-white text-black outline-1 font-bold text-3xl"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
