import CardComponent from './cardComponent';
import { useProducts } from '../../hook/useProduct';

interface ListProductProps {
  title: string;
  rows: number;
}

 function ListProductComponent({ title, rows }: ListProductProps) {
  const displayedProducts = useProducts(rows);
  return (
    <div className='flex flex-col items-center justify-center p-4  bg-[#F4F5F7]'>
      <h2 className='text-2xl font-semibold mb-6 text-[#3A3A3A]'>{title}</h2>
      <div className="grid grid-cols-4 justify-center items-center gap-4">
        {displayedProducts && displayedProducts.length > 0 ? (
          displayedProducts
            .filter((product) => product !== undefined)
            .map((product) => (
              <CardComponent
                key={product.id}
                imageUrl={product.imageUrl}
                tag={product.tag}
                titulo={product.titulo}
                subtitulo={product.subtitulo}
                preco={product.preco}
                precoSemDesconto={product.precoSemDesconto}
              />
            ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
    </div>
  );
}
export default ListProductComponent


