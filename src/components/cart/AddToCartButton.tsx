import React from 'react';
import { useCart} from '../../hook/useCart'; 

export interface AddToCartButtonProps {
  product: {
    id: number;
    titulo: string;
    preco: string | number;
    imageUrl: string;
    subtitulo: string;
    precoSemDesconto: string | number ;
    quantidade:number
  };
}


const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const productToAdd = { ...product, quantidade: 1 };
    addToCart(productToAdd);
    console.log(`Produto adicionado ao carrinho: ${product.titulo}`);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <button
        className="px-4 py-2 text-[#B88E2F] bg-white rounded-md text-[16px]"
        onClick={handleAddToCart} 
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;

