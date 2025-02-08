import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

export interface ProductDatail {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string;  
  precoSemDesconto?: string;
  tag?: string;
  description:string;
  sku: string,
  category:string
}

function ProductDetail() {
  const { id } = useParams(); 
  const [products, setProducts] = useState<ProductDatail>();

  useEffect(() => {
   
    axios
      .get("http://localhost:3001/products/"+id)
      .then((response) => {
        console.log("Produtos carregados:", response.data);
        setProducts(response.data);

      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);

      });
  }, [id]);

  return (
    <div>
      <h1>
        Detalhes do Produto {id}</h1>
        <div>{products?.id}</div>
        <img src={products?.imageUrl} alt="" />
        <div>{products?.titulo}</div>
     
    </div>
  );
}

export default ProductDetail;