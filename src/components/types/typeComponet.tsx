export interface Product {
    id: number;
    imageUrl: string;
    titulo: string;
    subtitulo: string;
    preco: string | number;
    tag?: string;
    precoSemDesconto: string | number;
    quantidade:number
  }
  