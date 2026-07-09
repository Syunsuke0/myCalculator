export const calculate = (left, right, ope) => {
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

export const formatNumber = (num) => {
  return num.toLocaleString();
};
