import living from '../../assets/img-home/living.svg';
import dinig from '../../assets/img-home/dining.svg';
import bedroom from '../../assets/img-home/bedroom.svg';

const BrowseSections = () => {
  return (
    <main className="flex flex-col  font-poppins mr-[125px] ml-[131px]  text-[#333333] ">
      <div className="flex flex-col items-center mt-10 mb-14">
        <h1 className="font-bold text-[32px] leading-48 ">Browse The Range</h1>
        <h2 className='font-regular text-[20px] leading-30 text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 text-[#333333] ">
        <div className="flex flex-col items-center font-bold">
          <img src={dinig} alt="Foto" className="w-[390px] h-[480px]" />
          <p className=" font-semibold text-[24px] text-center leading-36 ">Dining</p>
        </div>

        <div className="flex flex-col items-center font-bold">
          <img src={living} alt="Foto" className="w-[390px] h-[480px]" />
          <p className="font-semibold text-[24px] text-center leading-36">Living</p>
        </div>

        <div className="flex flex-col items-center font-bold">
          <img src={bedroom} alt="Foto" className="w-[390px] h-[480px]" />
          <p className="font-semibold text-[24px] text-center leading-36">Bedroom</p>
        </div>
      </div>
    </main>
  );
};

export default BrowseSections;

