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

    <div className=' flex flex-col mt-2 mb-2'>
      <div>
        <h1 className='font-bold text-[40px] text-center text-[#3A3A3A]'>#FuniroFurniture</h1>
        <p className='font-semi-bold text-[20px] text-center text-[#616161]'>Share your setup with</p>
      </div>

      <div className='flex flex-row justify-between gap-[16px]'>

        <div className='flex flex-col gap-[16px] '>
          <div className='flex flex-row gap-[16px]'>
            <img src={share1} alt="" className='w-[68px] h-[382px]' />
            <img src={share2} alt="" className='w-[451px] h-[312px] self-end' />
          </div>
          <div className='flex flex-row  gap-[16px]'>
            <img src={share3} alt="" className='w-[381px] h-[323px]' />
            <img src={share4} alt="" className='w-[344px] h-[242px]' />
          </div>
        </div>

        <div className='flex items-center gap-[16px] '>
          <img src={share5} alt="" className='w-[295px] h-[382px]' />
        </div>

        <div className='flex flex-col gap-[16px] '>
          <div className='flex fle-row gap-[16px]  ' >
            <img src={share6} alt="" className='w-[290px] h-[348px] ' />
            <img src={share7} alt="" className='w-[425px] h-[433px]' />
          </div>
          <div className='flex flex-row gap-[16px] '>
            <img src={share8} alt="" className='w-[178px] h-[242px]' />
            <img src={share9} alt="" className='w-[258px] h-[196px]' />
          </div>
        </div>
      </div>
    </div>

  );

}
export default Share;
