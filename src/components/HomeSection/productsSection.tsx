import ListProductComponent from "../productCard/listCardComponent";  

const ProductsSection = () => {
  return (
    <main className="flex flex-col items-center w-full">

      <h1 className="font-bold font-poppins text-4xl leading-[48px] mt-10 mb-4 text-center
       text-[#3A3A3A]" >
      <ListProductComponent title="Our Products" rows={2} />
       </h1>
      <a href=""></a>

      <button type="button" className="flex items-center justify-center px-4 py-3 
      border border-[#B88E2F] p-4 bg-white text-[#B88E2F] w-[245px] h-[48px] rounded-md mt-6 mb-9">Show More</button>
    </main>
  );
};

export default ProductsSection;

