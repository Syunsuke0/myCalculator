import { OPERATORS } from "@/constants/constants";
import { calculate } from "@/lib/calculate";
import { useState } from "react";

export const useCalculator = () => {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);

  const clear = () => {
    setLeft(0);
    setRight(0);
    setOpe(null);
  };
  const handleOperator = (key) => {
    if (ope === null) {
      setOpe(key);
    } else {
      setLeft(calculate(left, right, ope));
      setOpe(key);
      setRight(0);
    }
  };
  const handleNumber = (key) => {
    if (ope === null) {
      setLeft((prev) => prev * 10 + Number(key));
    } else {
      setRight((prev) => prev * 10 + Number(key));
    }
  };
  const onKeyPressed = (key) => {
    if (key === "AC") {
      clear();
    } else if (key === "=") {
      clear();
      setLeft(calculate(left, right, ope));
    } else if (OPERATORS.includes(key)) {
      handleOperator(key);
    } else {
      handleNumber(key);
    }
  };

  return {
    left,
    right,
    ope,
    onKeyPressed,
  };
};
