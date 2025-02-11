import { createContext,  useState, ReactNode } from "react";

// Definição do tipo do produto
export interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string| number;
  tag?: string;
  precoSemDesconto: string | number;
}

// Definição do tipo do contexto do carrinho
interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

// Criando o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provedor do contexto do carrinho
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Adicionar item ao carrinho
  const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remover item do carrinho
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext





