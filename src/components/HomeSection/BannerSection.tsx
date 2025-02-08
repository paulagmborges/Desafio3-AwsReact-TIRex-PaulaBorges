import bannerImage from '../../assets/img-home/bg-sectionBanner.svg'; 

const BannerSection = () => {
  return (
    <main
      className="flex bg-custom font-poppins justify-end w-full h-[716px]"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div 
        className="flex flex-col justify-between bg-[#FFF3E3] h-[443px] w-[643px] rounded-[10px]
        font-poppins  mr-[58px]  p-10 pt-14 pr-16 m-auto   "
      >
        <p className="font-semibold text-[16px]">New Arrival</p>
        <h1 className="font-bold text-[#B88E2F] text-[52px] leading-[52px]">Discover Our New Collection</h1>
        <p className="font-medium text-[18px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className="font-bold flex p-[40px] pt-[16px] pb-[16px] w-[257px] justify-center bg-[#B88E2F] text-white">
          BUY NOW
        </button>
      </div>
    </main>
  );
};

export default BannerSection;

