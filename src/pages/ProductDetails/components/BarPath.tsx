import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../../../components/spinner/Spinner';

export interface ProductDetail {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string | number;
  precoSemDesconto?: string | number;
  tags?: string;
  description: string;
  sku: string;
  category: string;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  quantidade: number;
  rating?: number;
}

const BarPath = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log("Produto carregado:", response.data);
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar produto:", err);
        setIsLoading(false); 
      });
  }, [id]);

  if (isLoading) {
    return <Spinner />;  
  }

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <div className="flex flex-row gap-[10px] bg-[#F9F1E7] p-7 mt-6 pl-32 font-poppins">
      <p className="text-gray">Home</p>
      <p className="text-gray">Shop</p>
      <p>| {product.titulo}</p>
    </div>
  );
};

export default BarPath;
