
interface Props {
  openPopup?: () => void
  totalPage?: number
  currentPage?: number
  total?: number
}

const Filter = ({ openPopup, total, totalPage, currentPage }: Props) => {


  return (
    <div className="flex justify-between pl-32 pb-7 pt-7 mb-12 h-[100px] bg-[#F9F1F7] font-poppins">
      <div className="flex w-1/3 justify-between items-center">
        <img
          src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/vector-filter-shop.png"
          alt="Filter Icon"
          className="w-[25px] h-[25px]"
        />
        <button onClick={openPopup}>Filter</button>
        <img
          src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/Vector1shop.png"
          className="w-[28px] h-[28px]"
        />
        <img
          src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/vector2shop.png"
          className="w-[25px] h-[25px]"
        />
        <p className="text-[16px] font-regular">Showing {currentPage || 0}-{totalPage || 0} of {total || 0} results</p>
      </div>

      <div className="flex w-1/3 items-center">
        <p className="text-[20px] font-regular">Show</p>
        <input
          type="text"
          placeholder="16"
          className="w-12 h-12 ml-4 mr-4 p-3"
        />
        <p className="text-[20px] font-regular">Sort By</p>
        <input
          type="text"
          placeholder="Default"
          className="w-32 h-12 ml-4 mr-4 pl-4"
        />
      </div>
    </div>
  );
};

export default Filter;
