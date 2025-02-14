import { createContext, useState, ReactNode } from "react";

export interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string | number;
  tag?: string;
  precoSemDesconto: string | number;
  quantidade: number;
}

export interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
 
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  isOpen: boolean;
  toggleCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: Product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantidade: cartItem.quantidade + 1 }
            : cartItem
        );
      }
      return [...prevCart, {  ...item, quantidade: item.quantidade }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;






