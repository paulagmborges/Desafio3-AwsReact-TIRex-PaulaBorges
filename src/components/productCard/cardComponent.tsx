
interface CardProps {
  imageUrl: string
  tag: string
  titulo: string
  subtitulo: string
  preco: string | number
  precoSemDesconto?: string | number
}

export default function CardComponent({
  imageUrl,
  tag,
  titulo,
  subtitulo,
  preco,
  precoSemDesconto
}: CardProps) {

  const isDiscount = tag.includes('%');
  const isNew = tag.toUpperCase() === 'NEW';
  const bgColor = isDiscount ? "bg-[#E97171]" : isNew ? "bg-[#2EC1AC]" : "bg-gray-300"; 

  return (
    <div className="w-[295px] h-[446px] flex gap-2 flex-col bg-[#F4F5F7] font-poppins p-2 relative">
      <div className="relative">
        <img src={imageUrl} alt="" className="w-[285px] h-[301px]" />
        <div
          className={`absolute top-2 right-2 w-14 h-14 flex items-center justify-center rounded-full text-white text-[16px] font-semibold ${bgColor}`} 
        >
          {tag}
        </div>
      </div>
      <h1 className="text-[24px] font-semibold text-[#3A3A3A]">{titulo}</h1>
      <p className="text-[#898989] text-[16px] font-regular">{subtitulo}</p>
      <div className="flex justify-between items-center">
        <span className="text-[#3A3A3A] text-[20px] font-semibold">R${preco}</span>
        <span className="text-[16px] font-regular leading-6 text-left line-through text-[#B0B0B0]">
          {precoSemDesconto}
        </span>
      </div>

        </div>
        );
  }
