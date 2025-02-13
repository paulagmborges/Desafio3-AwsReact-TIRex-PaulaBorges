import { createContext,  useState, ReactNode } from "react";

export interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string| number;
  tag?: string;
  precoSemDesconto: string | number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
  isOpen: boolean;
  toggleCart: () => void;
}



const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

const addToCart = (item: Product) => {
    setCart((prevCart) => [...prevCart, item]);
  };


  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeFromCart, clearCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext





