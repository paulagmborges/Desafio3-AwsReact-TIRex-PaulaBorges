import  { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center gap-0 rounded-tl-[10px] border-t border-opacity-0 w-[123px] h-[64px] justify-between
    border-gray-500 ">
      <button
        className=" flex items-center justify-center text-black font-normal gap-0 rounded-tl-[10px]  "
        onClick={decrease}
      >
        -
      </button>
      <span className="text-[16px] font-medium">{quantity}</span>
      <button
        className=" flex items-center justify-center text-black font-normal gap-0 rounded-tl-[10px]  "
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
