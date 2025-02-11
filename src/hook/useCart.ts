import { useContext } from "react";
import CartContext from '../context/CartContext'
// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart deve ser usado dentro de um CartProvider");
    }
    return context;
  };


