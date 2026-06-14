"use client";
import { useState } from "react";

export default function Home() {
  const left = "12";
  const ope = "+";
  const right = "34";
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
      <div className="text-4xl text-black">
        計算結果:{left} {ope} {right}
      </div>
      <div className=" grid  grid-cols-4">
        {BUTTONS.map((item) => (
          <button
            onClick={() => {
              keyPressed(key);
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
