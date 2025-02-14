
const SocialLinks = () => {
  return (
    <div>
      <div className="flex gap-2">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center shadow-lg ">
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/facebook-footer.svg" alt="Facebook" className="w-[18px] h-[18px]  ;
 " />
          </div>
        </a>
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center shadow-lg">
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/instagram-footer.svg" alt="Instagram" className="w-[18px] h-[18px]" />
          </div>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center shadow-lg">
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/twitter-footer.svg" alt="Twitter" className="w-[18px] h-[18px]" />
          </div>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center shadow-lg">
            <img src="https://meu-app-imagens.s3.us-east-1.amazonaws.com/linkedin-footer.svg" alt="LinkedIn" className="w-[18px] h-[18px]" />
          </div>
        </a>
      </div>
    </div>
  );
};


export default SocialLinks