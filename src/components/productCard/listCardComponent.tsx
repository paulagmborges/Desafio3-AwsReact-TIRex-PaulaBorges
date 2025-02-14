import CardComponent from "./cardComponent";
import { useProducts } from "../../hook/useProduct";
import Pagination from "../../pages/Shop/components/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton";
import FilterPopup from "../../pages/Shop/components/FilterPopup";
import Spinner from "../spinner/Spinner";

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
  rows?: number;
  paginate?: boolean;
  isPopupOpen?: boolean;
  closePopup?: () => void;
  changeInfoPagination?: (info: {
    totalPage: number
    total: number
    currentPage: number
  }) => void
}

function ListProductComponent({ title, rows, paginate = false, isPopupOpen, closePopup, changeInfoPagination }: ListProductProps) {

  const [page, setPage] = useState(1)
  const [category, _setCategory] = useState('')

  const { products: displayedProducts, loading, error, getProducts, total, totalPage } = useProducts();

  const pageSize = 16

  const repeatedProducts = rows && rows > 0 ? displayedProducts.slice(0, (rows * 4)) : displayedProducts

  useEffect(() => {
    if (displayedProducts.length === 0) {
      getProducts?.({ page: 1, per_page: pageSize })
    }

  }, [getProducts, displayedProducts])


  const setCategory = (category: string) => {
    getProducts?.({ category, page, per_page: pageSize })
    _setCategory(category)
  }


  const onChangePage = (page: any) => {
    setPage(page)
    getProducts?.({ category, page, per_page: pageSize })
  }

  changeInfoPagination?.({
    currentPage: page,
    total,
    totalPage
  })

  if (loading) return 
   <Spinner />;
  
  if (error) return <p>Erro ao carregar produtos.</p>;


  return (
    <div className="flex flex-col items-center justify-center p-4 bg-[#F4F5F7]">
      <h2 className="text-2xl font-semibold mb-6 text-[#3A3A3A]">{title}</h2>
      <div className="grid grid-cols-4 justify-center items-center gap-4">
        {repeatedProducts.length > 0 ? (
          repeatedProducts.map((product) => {
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
            totalCount={total}
            pageSize={pageSize}
            currentPage={page}
            onPageChange={onChangePage}
          />
        )
      }
      {isPopupOpen && <FilterPopup setCategory={setCategory} closePopup={() => closePopup?.()} />}
    </div>
  );
}

export default ListProductComponent;



