import  { useState } from "react";
import { useCart } from '../../../hook/useCart';

const QuantitySelector = ({product}) => {
  const [quantity, setQuantity] = useState(1);

  const {addToCart } = useCart();

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAddToCart = () => {
    addToCart({ ...product, quantidade: quantity }); 
    console.log(`Produto ${product.titulo} adicionado com quantidade ${quantity}`);
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
