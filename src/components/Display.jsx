import { formatNumber } from "@/lib/calculate";

export const Display = ({ left, right, ope }) => {
  const renderDisplay = () => (
    <>
      {formatNumber(left)}
      {ope === null ? "" : ope}
      {ope !== null && right !== 0 && formatNumber(right)}
    </>
  );
  return <div className="text-black">計算結果：{renderDisplay()}</div>;
};
