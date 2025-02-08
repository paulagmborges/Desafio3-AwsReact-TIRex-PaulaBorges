import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string;  // Supondo que o preço é uma string e precisa ser convertido
  tag: string;  
  precoSemDesconto?: string;
}

interface UseProductsProps {
  rows?: number;
  minPrice?: number;  // Preço mínimo opcional
  maxPrice?: number;  // Preço máximo opcional
}

export const useProducts = ({ rows, minPrice, maxPrice }: UseProductsProps) => {
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

  let filteredProducts = products.map(product => ({
    ...product,
    preco: Number(product.preco.replace("R$", "").replace(",", ".")) // Converte string para número
  }));

  // 🔍 Filtragem por faixa de preço
  if (minPrice !== undefined || maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(product => {
      const preco = product.preco;
      return (
        (minPrice === undefined || preco >= minPrice) &&
        (maxPrice === undefined || preco <= maxPrice)
      );
    });
  }

  // Se rows for informado, multiplica os produtos para preencher a grade
  if (rows) {
    const totalProducts = rows * 4;
    if (filteredProducts.length === 0) return { products: [], loading, error };

    const repeatedProducts = Array.from({ length: totalProducts }, (_, i) => 
      filteredProducts[i % filteredProducts.length]
    );

    console.log("Produtos repetidos:", repeatedProducts);
    return { products: repeatedProducts, loading, error };
  }

  return { products: filteredProducts, loading, error };
};


  