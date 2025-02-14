import axios from "axios";
import { useState } from "react";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);


  const getProducts = (filtros?: any) => {
    setLoading(true);
    let url = "http://localhost:3001/products"
    const parametros = []
    if (filtros?.category) {
      parametros.push(`category=${filtros.category}`)

    }
    if (filtros?.page) {
      parametros.push(`_page=${filtros?.page}`)
    }

    if (filtros?.per_page) {
      parametros.push(`_per_page=${filtros?.per_page}`)

    }

    if (parametros.length > 0) {
      url = url + `/?${parametros.join('&')}`
    }
    axios
      .get(url)
      .then((response) => {
        console.log("Produtos carregados:", response.data);
        setProducts(response.data.data);
        setTotalPages(response.data.pages)
        setTotal(response.data.items)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);
        setError("Erro ao carregar produtos.");
        setLoading(false);
      });
  }





  return {
    products, loading, error, getProducts, totalPage,
    total
  };
};


