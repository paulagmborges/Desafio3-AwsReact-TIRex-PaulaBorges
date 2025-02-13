import CardComponent from "./cardComponent";
import { useProducts } from "../../hook/useProduct";
import Pagination from "../../pages/Shop/components/pagination";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton";

export interface Product {
  id: number;
  imageUrl: string;
  tag?: string;
  titulo: string;
  subtitulo?: string;
  preco: string;
  precoSemDesconto?: string | number;

}

interface ListProductProps {
  title: string;
  rows: number;
  paginate?: boolean
}

function ListProductComponent({ title, rows, paginate = false }: ListProductProps) {

  const { products: displayedProducts, loading, error } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4 * rows
  const repeatProducts = 34;


  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>Erro ao carregar produtos.</p>;

  const repeatedProducts =
    displayedProducts.length > 0
      ? Array.from({ length: repeatProducts }, (_, i) => displayedProducts[i % displayedProducts.length])
      : [];

  const paginatedProducts = repeatedProducts
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .filter((product) => product && product.id);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#F4F5F7]">
      <h2 className="text-2xl font-semibold mb-6 text-[#3A3A3A]">{title}</h2>
      <div className="grid grid-cols-4 justify-center items-center gap-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => {
            if (!product || !product.id) {
              console.error("Produto inválido:", product);
              return null;
            }

            return (
              <Link to={`/produto/${product.id}`} key={product.id} className="relative">
                <CardComponent
                  imageUrl={product.imageUrl ?? ""}
                  tag={product.tag ?? ""}
                  titulo={product.titulo ?? "Produto sem título"}
                  subtitulo={product.subtitulo ?? ""}
                  preco={String(product.preco)}
                  precoSemDesconto={product.precoSemDesconto ?? "Sem desconto"}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <AddToCartButton
                    product={{
                      ...product,
                      preco: String(product.preco), 
                      precoSemDesconto: product.precoSemDesconto ?? 0, 
                    }}
                  />
                </div>

              </Link>
            );
          })
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
      {
        paginate && (
          <Pagination
            totalCount={repeatedProducts.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )
      }

    </div>
  );
}

export default ListProductComponent;



