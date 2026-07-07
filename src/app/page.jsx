"use client";
import { useState } from "react";

const Home = () => {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(null);
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
    "AC",
    "=",
    "+",
  ];

  const clear = () => {
    setLeft(0);
    setRight(null);
    setOpe(null);
    setResult(null);
  };

  const calculate = () => {
    switch (ope) {
      case "+":
        setResult(left + right);
        return;
      case "-":
        setResult(left - right);
        return;
      case "×":
        setResult(left * right);
        return;
      case "÷":
        setResult(left / right);
        return;
      default:
        break;
    }
  };
  const keyPressed = (key) => {
    if (key === "AC") {
      clear();
    } else if (key === "=") {
      calculate();
      return result;
    } else if (OPERATORS.includes(key)) {
      setOpe(key);
    } else if (ope === null) {
      setLeft((prev) => prev * 10 + Number(key));
    } else if (ope) {
      setRight((prev) => prev * 10 + Number(key));
    }
  };

  return (
    <div className="bg-white">
      <div className="text-black">
        計算結果：
        {result !== null ? (
          result
        ) : (
          <>
            {left}
            {ope === null ? "" : ope}
            {ope === null ? "" : right}
          </>
        )}
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
};

export default Home;
