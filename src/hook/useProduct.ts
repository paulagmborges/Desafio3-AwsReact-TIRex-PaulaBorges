import axios from "axios";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string | number;  
  precoSemDesconto?: string | number;
  tag?: string;
  quantidade: number
}

export interface UseProductsProps {
  rows?: number;
  minPrice?: number;  
  maxPrice?: number; 
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        console.log("Produtos carregados:", response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setError("Erro ao carregar produtos.");
        setLoading(false);
      });
  }, []);

  if (loading) return { products: [], loading, error };
  if (error) return { products: [], loading, error };


  

  return { products, loading, error };
};


  