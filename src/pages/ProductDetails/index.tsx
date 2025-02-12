import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ColorSelection from './components/SelectionColor'
import SelectionSize from './components/SelectionSize'
import QuantitySelector from './components/SelectionQuantity'


import image1 from '../../assets/img-product-detail/image1.svg'
import image2 from '../../assets/img-product-detail/image2.svg'
import image3 from '../../assets/img-product-detail/image3.svg'
import image4 from '../../assets/img-product-detail/image4.svg'

import Stars from './components/Stars'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Description from './components/Description';
import RealatedProduct from './components/RelatedProducts';
import BarPath from './components/BarPath';
import LinkSocial from './components/linkSocial'

import ProductDetailsBtn from './components/btaddToCart';



export interface ProductDetail {
  id: number;
  imageUrl: string;
  titulo: string;
  subtitulo: string;
  preco: string | number;
  precoSemDesconto?: string | number;
  tag?: string;
  description: string;
  sku: string,
  category: string,
  colors?: string,
  quantidade: number,


}



function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState<ProductDetail>();
  const [rating, setRating] = useState(4.5);


  useEffect(() => {

    axios
      .get("http://localhost:3001/products/" + id)
      .then((response) => {
        console.log("Produtos carregados:", response.data);
        setProducts(response.data);

      })
      .catch((err) => {
        console.error("Erro ao carregar produtos:", err);

      });
  }, [id]);

  return (

    <div className='flex flex-col'>
      <div><Header /></div>
      <div><BarPath /></div>
      <div className='h-[820px]'>
        <div className="flex flex-row w-full h-[730px] gap-[84px] justify-center items-center">

          <div className='flex flex-col gap-[32px] w-[72px] h-[416px] mb-[80px]  '>
            <img src={image1} alt="imagem 1" className='w-[76px] h-[80px]' />
            <img src={image2} alt="imagem 2" className='w-[76px] h-[80px]' />
            <img src={image3} alt="imagem 3" className='w-[76px] h-[80px]' />
            <img src={image4} alt="imagem 4" className='w-[76px] h-[80px]' />
          </div>

          <div className='flex flex-col  '>
            <img
              src={products?.imageUrl}
              alt={products?.titulo || "Imagem do produto"}
              className="w-[481px] h-[500px]"
            />
          </div>

          <div className="flex flex-col  w-[606px] h-[730px] font-poppins mt-[200px]">
            <h1 className="text-[42px] font-normal">{products?.titulo}</h1>
            <p className="text-[#9F9F9F] font-medium text-[24px] leading-[36px]">
              {products?.preco}
            </p>

            <div> <Stars stars={rating} />
              <button onClick={() => setRating(rating + 0.5)}>Aumentar Classificação</button> | Custom Item</div>

            <p className="text-[13px] font-normal w-[424px] h-[80px]">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound.
            </p>

            <div className="w-[123px] h-[63px] flex flex-col gap-3">
              <p className="text-[#9F9F9F] text-[14px] font-normal font-poppins">
                Size
              </p>
              <SelectionSize />
              <div>
                <p className="text-[#9F9F9F] text-[14px] font-normal font-poppins">
                  Color
                </p>
                <ColorSelection />
              </div>
              <div className='flex'>
                <div className='flex gap-[58px] justify-between'>
                  <QuantitySelector />
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className=" border border-black rounded text-black font-semibold"
                >
                  Add To CArt
                </button>

              </div>




              <div><LinkSocial /></div>
            </div>
          </div>
        </div>
      </div>


      <div><Description /></div>
      <div> <RealatedProduct /></div>
      <div><Footer /></div>

    </div>
  );
}

export default ProductDetail;