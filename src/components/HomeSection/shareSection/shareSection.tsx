
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
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share1.svg" alt="" className='' />
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share2ComputadorHome.svg" alt="imagem computador" className='w- self-end' />
          </div>
          <div className='flex flex-row  gap-[16px]'>
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share3CadeiraHome.svg" alt="imagem cadeira" className=' ' />
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share42mesinhasHome.svg" alt="imagem mesinhas" className='' />
          </div>
        </div>

        <div className='flex items-center gap-[16px] '>
          <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share5saladejantarHome.svg" alt="imagem sala de jantar" className='' />
        </div>

        <div className='flex flex-col gap-[16px] '>
          <div className='flex fle-row gap-[16px]  ' >
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share6CamaHome.svg" alt="imagem cama" className=' self-end ' />
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share7CopaHome.svg" alt="imagem copa" className=' ' />
          </div>
          <div className='flex flex-row gap-[16px] '>
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share8VasoHome.svg" alt="imagem vaso de planta" className='' />
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/share9cozinhaHome.jpg" alt="imagem cozinha" className='' />
          </div>
        </div>
      </div>
    </div>

  );

}
export default Share;
