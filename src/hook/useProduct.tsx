import axios from "axios";
import { useEffect,useState } from "react";

interface Product {
    id: number;
    imageUrl: string;
    titulo: string;
    subtitulo: string;
    preco: string;
    tag: string;
    precoSemDesconto?: string;
  }
  

export const useProducts = (rows: number) => {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      axios.get('http://localhost:3001/products')
        .then((response) => {
          console.log('Produtos carregados:', response.data); 
          setProducts(response.data);
        })
        .catch((err) => {
          console.error('Erro ao carregar produtos:', err);
        });
    }, []);
  
    const totalProducts = rows * 4;
    const repeatedProducts = Array.from({ length: totalProducts }, (_, i) => 
      products[i % products.length] 
    );
  
    console.log('Produtos repetidos:', repeatedProducts); 
  
    return repeatedProducts;
  };
  