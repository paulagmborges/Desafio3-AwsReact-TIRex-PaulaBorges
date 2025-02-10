import { useState } from "react";

const colors = ["#816DFA", "#000000", "#B88E2F"] as const;
type ColorType = (typeof colors)[number];

export default function ColorSelection() {
  const [selectedColor, setSelectedColor] = useState<ColorType>("#816DFA");

  return (
    <div className="flex items-center justify-center w-[123px] h-[64px] ">
      <div className="flex gap-3 ">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-[30px] h-[30px] rounded-full border-1 transition-all ${
              selectedColor === color ? "border-gray-700 scale-110" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
}


