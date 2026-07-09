"use client";
import { Display } from "@/components/Display";
import { Keypad } from "@/components/Keypad";
import { useCalculator } from "@/hooks/useCalculator";

const Home = () => {
  const { left, right, ope, result, onKeyPressed } = useCalculator();

  return (
    <div className="bg-white">
      <Display left={left} right={right} ope={ope} result={result} />
      <Keypad onKeyPressed={onKeyPressed} />
    </div>
  );
};

export default Home;
