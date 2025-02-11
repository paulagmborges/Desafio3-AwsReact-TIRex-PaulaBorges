import share1 from '../../../assets/img-home/shareSection/share1.svg';
import share2 from '../../../assets/img-home/shareSection/share2.svg';
import share3 from '../../../assets/img-home/shareSection/share3.svg';
import share4 from '../../../assets/img-home/shareSection/share4.svg';
import share5 from '../../../assets/img-home/shareSection/share5.svg';
import share6 from '../../../assets/img-home/shareSection/share6.svg';
import share7 from '../../../assets/img-home/shareSection/share7.svg';
import share9 from '../../../assets/img-home/shareSection/share9.jpg';
import share8 from '../../../assets/img-home/shareSection/share8.svg';

const Share = () => {
  return (

    <div className=' flex flex-col mt-2 mb-2 w-full'>
      <div>
        <h1 className='font-bold text-[40px] text-center text-[#3A3A3A]'>#FuniroFurniture</h1>
        <p className='font-semi-bold text-[20px] text-center text-[#616161]'>Share your setup with</p>
      </div>

      <div className='flex flex-row  justify-center items-center gap-[16px]'>

        <div className='flex flex-col gap-[16px] '>
          <div className='flex flex-row gap-[16px]'>
            <img src={share1} alt="" className='' />
            <img src={share2} alt="" className='w- self-end' />
          </div>
          <div className='flex flex-row  gap-[16px]'>
            <img src={share3} alt="" className=' ' />
            <img src={share4} alt="" className='' />
          </div>
        </div>

        <div className='flex items-center gap-[16px] '>
          <img src={share5} alt="" className='' />
        </div>

        <div className='flex flex-col gap-[16px] '>
          <div className='flex fle-row gap-[16px]  ' >
            <img src={share6} alt="" className=' self-end ' />
            <img src={share7} alt="" className=' ' />
          </div>
          <div className='flex flex-row gap-[16px] '>
            <img src={share8} alt="" className='' />
            <img src={share9} alt="" className='' />
          </div>
        </div>
      </div>
    </div>

  );

}
export default Share;
