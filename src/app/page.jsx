"use client";
import { useState } from "react";

export default function Home() {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [result, setResult] = useState(null);
  const OPERATORS = ["+", "-", "×", "÷"];
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
  const keyPressed = (key) => {
    if (OPERATORS.includes(key)) {
      setOpe(key);
      return;
    }

    if (ope === null) {
      setLeft((prev) => prev * 10 + Number(key));
    } else {
      setRight((prev) => prev + key);
    }

    if (key === "=") {
      const result = left + right;
      return result;
    }
  };

  return (
    <div className="bg-white">
      <div className="text-black">
        計算結果：
        {left}
      </div>
      <div className=" grid  grid-cols-4">
        {BUTTONS.map((item) => (
          <button
            onClick={() => {
              keyPressed(item);
            }}
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
