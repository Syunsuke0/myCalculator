"use client";
import { Display } from "@/components/Display";
import { Keypad } from "@/components/Keypad";
import { useCalculator } from "@/hooks/useCalculator";

const Home = () => {
  const { left, right, ope, onKeyPressed } = useCalculator();

  return (
    <div className="bg-white">
      <Display left={left} right={right} ope={ope} />
      <Keypad onKeyPressed={onKeyPressed} />
    </div>
  );
};

export default Home;
