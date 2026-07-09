"use client";
import { Display } from "@/components/Display";
import { BUTTONS, OPERATORS } from "@/constants/constants";
import { calculate, formatNumber } from "@/lib/calculate";
import { useState } from "react";

const Home = () => {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [result, setResult] = useState(null);

  const clear = () => {
    setLeft(0);
    setRight(0);
    setOpe(null);
    setResult(null);
  };

  const handleNumber = (key) => {
    if (ope === null) {
      setLeft((prev) => prev * 10 + Number(key));
    } else {
      setRight((prev) => prev * 10 + Number(key));
    }
  };
  const keyPressed = (key) => {
    if (key === "AC") {
      clear();
    } else if (key === "=") {
      setResult(calculate(left, right, ope));
    } else if (OPERATORS.includes(key)) {
      setOpe(key);
    } else {
      handleNumber(key);
    }
  };

  return (
    <div className="bg-white">
      <Display left={left} right={right} ope={ope} result={result} />
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
