import CardComponent from "./cardComponent";
import product1 from "../../assets/products/product1.svg";
import product2 from "../../assets/products/product2.svg";
import product3 from "../../assets/products/product3.svg";
import product4 from "../../assets/products/product4.svg";
import product5 from "../../assets/products/product5.svg";
import product6 from "../../assets/products/product6.svg";
import product7 from "../../assets/products/product7.svg";
import product8 from "../../assets/products/product8.svg";
 
 
interface listProductProps {
  title: string;
  rows: number;
}
 
export default function listProductComponent({
  title,
  rows,
}: listProductProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1>{title}</h1>
      <div className="flex gap-4">
        <CardComponent
          imageUrl={product1}
          titulo="Pingky"
          subtitulo="Cute bed set"
          preco="Rp 7.000.000"
          tag="-50%"
          precoSemDesconto="14.000.000"
        />
        <CardComponent
          imageUrl={product2}
          titulo="Syltherine"
          subtitulo="Stylish cafe chair"
          preco="Rp 2.500.000"
          tag="-30%"
          precoSemDesconto="Rp 3.500.000"
        />
        <CardComponent
          imageUrl={product3}
          titulo="Potty"
          subtitulo="Minimalist flower pot"
          preco="Rp 500.000"
          tag="New"
          precoSemDesconto="Rp 14.000.000"
        />
        <CardComponent
          imageUrl={product4}
          titulo="Respira"
          subtitulo="Outdoor bar table and stool"
          preco="Rp 500.000"
          tag="New"
          precoSemDesconto="Rp 14.000.000"
        />
      </div>
      {rows > 1 && (
        <div className="flex gap-4">
          <CardComponent
            imageUrl={product5}
            titulo="Syltherine"
            subtitulo="Stylish cafe chair"
            preco="Rp 2.500.000"
            tag="-30%"
            precoSemDesconto="Rp 3.500.000"
          />
          <CardComponent
            imageUrl={product6}
            titulo="Lolito"
            subtitulo="Luxury big sofa"
            preco="Rp 7.000.000"
            tag="-50%"
            precoSemDesconto="Rp 14.000.000"
          />
          <CardComponent
            imageUrl={product7}
            titulo="Respira"
            subtitulo="Outdoor bar table and stool"
            preco="Rp 500.000"
            tag="New"
            precoSemDesconto=""
          />
          <CardComponent
            imageUrl={product8}
            titulo="Leviosa"
            subtitulo="Stylish cafe chair"
            preco="12.500.00"
            tag=""
            precoSemDesconto="2000,00"
          />
        </div>
      )}
      
    </div>
  );
}
 