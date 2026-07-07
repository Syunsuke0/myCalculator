"use client";
import { useState } from "react";

const Home = () => {
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
    "AC",
    "=",
    "+",
  ];
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const clear = () => {
    setLeft(0);
    setRight(0);
    setOpe(null);
    setResult(null);
  };

  const calculate = () => {
    switch (ope) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "×":
        return left * right;
      case "÷":
        return left / right;
      default:
        return null;
    }
  };
  const keyPressed = (key) => {
    if (key === "AC") {
      clear();
    } else if (key === "=") {
      setResult(calculate());
    } else if (OPERATORS.includes(key)) {
      setOpe(key);
    } else if (ope === null) {
      setLeft((prev) => prev * 10 + Number(key));
    } else if (ope) {
      setRight((prev) => prev * 10 + Number(key));
    }
  };
  const renderDisplay = () =>
    result !== null ? (
      formatNumber(result)
    ) : (
      <>
        {formatNumber(left)}
        {ope === null ? "" : ope}
        {ope !== null && right !== 0 && formatNumber(right)}
      </>
    );

  return (
    <div className="bg-white">
      <div className="text-black">計算結果：{renderDisplay()}</div>
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
