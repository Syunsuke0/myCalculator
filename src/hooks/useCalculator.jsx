import { OPERATORS } from "@/constants/constants";
import { calculate } from "@/lib/calculate";
import { useState } from "react";

export const useCalculator = () => {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);

  const [expression, setExpression] = useState([]);

  const handleNumber2 = (key) => {
    setExpression((prev) => {
      // 配列の最後を確認
      const last = prev[prev.length - 1];

      // ope or 空配列
      if (OPERATORS.includes(last) || prev.length === 0) {
        console.log(`初!${[...prev, Number(key)]}`);
        return [...prev, Number(key)];
      } else {
        console.log([...prev.slice(0, -1), last * 10 + Number(key)]);
        return [...prev.slice(0, -1), last * 10 + Number(key)];
      }
    });
  };

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
      // handleNumber(key);
      handleNumber2(key);
    }
  };

  return {
    left,
    right,
    ope,
    onKeyPressed,
  };
};
