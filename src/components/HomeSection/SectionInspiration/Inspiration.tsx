
import Carousel from './carousel'

import "@splidejs/splide/dist/css/splide.min.css";

const Inspiration = () => {
  return (
    <main className="bg-[#FCF8F3] font-poppins flex h-[670px]">
      <div className="flex ml-10 p-5 pr-0 justify-between">

        <div className="flex flex-col justify-center gap-6 w-[422px] ml-20 ">
          <div>
            <h1 className="font-bold text-[40px] text-[#3A3A3A] ">50+ Beautiful rooms inspiration</h1>
            <p className="text-[16px] font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms that
              inspire you
            </p>
          </div>

          <button className='text-[16px] font-semibold text-[#FFFFFF] bg-[#B88E2F] w-[176px] h-[48px]'>Explore More</button>

        </div>
        <div className="w-4/6">
          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Inspiration;