import  { useState } from "react";

const sizes = ["L", "XL", "XS"] as const;
type SizeType = (typeof sizes)[number];

const SelectionSize = () => {
  const [selectedSize, setSelectedSize] = useState<SizeType>("L");

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-3 ">
        {sizes.map((size) => (
          <button
            key={size}
            className={`w-[30px] h-[30px] rounded transition-all flex items-center justify-center  ${
              selectedSize === size ? " bg-[#B88E2F] text-white" : " bg-[#F9F1E7] text-black"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectionSize;
