import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../../hook/useCart';
import { useNavigate } from "react-router-dom";

import QuantitySelector from './components/SelectionQuantity';

import image1 from '../../assets/img-product-detail/image1.svg';
import image2 from '../../assets/img-product-detail/image2.svg';
import image3 from '../../assets/img-product-detail/image3.svg';
import image4 from '../../assets/img-product-detail/image4.svg';

import Stars from './components/Stars';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Description from './components/Description';
import RelatedProduct from './components/RelatedProducts';
import BarPath from './components/BarPath';
import LinkSocial from './components/linkSocial';
import Spinner from '../../components/spinner/Spinner';


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

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [rating, setRating] = useState(4.5);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate(); 

  const { addToCart } = useCart();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log("Produto carregado:", response.data);
        setProduct(response.data);
        setRating(response.data.rating ?? 4.5);
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao carregar produto:", err);
      });
  }, [id]);

  if (isLoading) {
    return <Spinner />;  
  }

  if (!product) {
    return <p>Produto não encontrado</p>;

  }

  const handleAddToCart = () => {
    if (product) {
      const productToAdd = {
        ...product,
        precoSemDesconto: product.precoSemDesconto ?? '',
        selectedSize,
        quantidade: quantity
      };
      addToCart(productToAdd);
      console.log("Produto adicionado ao carrinho:", productToAdd);
      navigate("/cart")
    
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <BarPath />

      <div className="h-[820px]">
        <div className="flex flex-row w-full h-[730px] gap-[84px] justify-center items-center">
          <div className="flex flex-col gap-[32px] w-[72px] h-[416px] mb-[80px]">
            <img src={image1} alt="imagem 1" className="w-[76px] h-[80px]" />
            <img src={image2} alt="imagem 2" className="w-[76px] h-[80px]" />
            <img src={image3} alt="imagem 3" className="w-[76px] h-[80px]" />
            <img src={image4} alt="imagem 4" className="w-[76px] h-[80px]" />
          </div>

          <div className="flex flex-col">
            <img
              src={product.imageUrl}
              alt={product.titulo || "Imagem do produto"}
              className="w-[481px] h-[500px]"
            />
          </div>

          <div className="flex flex-col w-[606px] h-[730px] font-poppins mt-[200px]">
            <h1 className="text-[42px] font-normal">{product.titulo}</h1>
            <p className="text-[#9F9F9F] font-medium text-[24px] leading-[36px]">
              R$ {Number(product.preco).toFixed(2)}
            </p>

            <div className="flex">
              <Stars stars={rating} />
              <button onClick={() => setRating(rating + 0.5)}>
                <p className="text-[13px] text-[#9F9F9F]">| Customer Review</p>
              </button>
            </div>

            <p className="text-[13px] font-normal w-[424px] h-[80px]">
              {product.description}
            </p>

            
            <div>
              <p className="text-[#9F9F9F] text-[14px] font-normal">Size</p>
              <div className="flex space-x-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded 
                      ${
                        selectedSize === size
                          ? "bg-[#B88E2F] text-white"
                          : "bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            
            <div>
              <p className="text-[#9F9F9F] text-[14px] font-normal">Color</p>
              <div className="flex gap-5">
                {product.colors?.map((color) => (
                  <button
                    key={color.name}
                    className="p-2 rounded-full h-[30px] w-[30px]"
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />
                ))}
              </div>
            </div>

            
            <div className="flex mt-5">
              <QuantitySelector onChange={setQuantity}  />
              <button
                onClick={handleAddToCart}
                className="border border-black rounded text-black font-semibold ml-4 px-4 py-2"
              >
                Add To Cart
              
              </button>
            </div>

            <div>
              <LinkSocial
                sku={product.sku}
                category={product.category}
                tags={product.tags ? [product.tags] : []}
              />
            </div>
          </div>
        </div>
      </div>

      <Description />
      <RelatedProduct />
      <Footer />
    </div>
  );
}

export default ProductDetail;

