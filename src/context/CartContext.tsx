import React, { createContext, useState, useContext, ReactNode } from 'react';


export interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo?: string;
  preco: string;
  precoSemDesconto?: string;
  tag?: string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook para acessar o contexto de carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


interface CartProviderProps {
  children: ReactNode;
}


export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]); 


  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      
      const productInCart = prevCart.find(item => item.id === product.id);
      if (!productInCart) {
        return [...prevCart, product];
      }
      return prevCart; 
    });
  };

  
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};



