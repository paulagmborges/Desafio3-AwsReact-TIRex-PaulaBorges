import { useState } from "react";
import db from "../../../../db.json";

const categories = ["Chair", "Table", "Decor", "Sofas"];

export default function ProductFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  
  const filteredProducts = selectedCategory
  ? db.products.filter((product) => product.category === selectedCategory)
  : db.products;
  

  return (
    <div className=" p-4">
      <h2 className="text-xl font-bold mb-2">Filter by Category</h2>
      <select
        className="  p-2 border rounded mb-4"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="flex flex-col  gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.imageUrl} alt={product.titulo} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-bold">{product.titulo}</h3>
            <p className="text-sm text-gray-500">{product.subtitulo}</p>
            <p className="text-lg font-semibold">R$ {product.preco / 100},00</p>
          </div>
        ))}
      </div>
    </div>
  );
}