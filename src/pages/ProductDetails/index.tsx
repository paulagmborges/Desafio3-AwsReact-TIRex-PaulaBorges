import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // Pega o ID da URL

  return (
    <div>
      <h1>Detalhes do Produto {id}</h1>
      {/* Aqui você pode buscar os detalhes do produto no backend e exibir */}
    </div>
  );
}

export default ProductDetail;