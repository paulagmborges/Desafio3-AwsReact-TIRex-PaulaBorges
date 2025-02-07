import trofeu from '../../assets/img-shop/section4/trofeu.png'
import selo from '../../assets/img-shop/section4/selo.png'
import presente from '../../assets/img-shop/section4/presente.png'
import menina from '../../assets/img-shop/section4/menina.png'

const Section4 = () => {
    return (
      
            <div className='bg-[#FAF3EA] h-[270px] flex flex-row justify-around items-center  gap-[50px] '>
            <div className='flex flex-col  items-center'>

                <img src={trofeu} alt="" className='h-[60px] w-[60px]' />
                <h2 className='font-semibold text-[25px] text-[#242424]'>High Quality</h2>
                <p className='font-medium text-[20px] text-[#898989] font-poppins'>crafted from top materials</p>
            </div>
            <div className='flex flex-col  items-center'>
               <img src={selo} alt="" className='h-[60px] w-[60px] ' /> 
               <h2 className='font-semibold text-[25px] text-[#242424]'>Warranty Protection</h2>
               <p className='font-medium text-[20px] text-[#898989] font-poppins'>Over 2 years</p>
            </div>
            <div className='flex flex-col items-center'>
               <img src={presente} alt="" className='h-[60px] w-[60px]' /> 
               <h2 className='font-semibold text-[25px] text-[#242424]'>Free Shipping</h2>
               <p className='font-medium text-[20px] text-[#898989] font-poppins'>Order over 150 $</p>
            </div>
            <div className='flex flex-col items-center'>
               <img src={menina} alt="" className='h-[60px] w-[60px]'/> 
               <h2 className=' font-semibold text-[25px] text-[#242424]'>24 / 7 Support</h2>
               <p className='font-medium text-[20px] text-[#898989] font-poppins'>Dedicated support</p>
            </div>

        </div>

  

    )
}

export default Section4