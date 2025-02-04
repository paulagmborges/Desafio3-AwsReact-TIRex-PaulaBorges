import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'

const SocialLinks = () => {
  return (
    <div>
      <div className="flex gap-2">
        <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <img src={facebook} alt="Facebook" className="w-[18px] h-[18px]" />
          </div>
        </a>
        <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <img src={instagram} alt="Instagram" className="w-[18px] h-[18px]" />
          </div>
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <img src={twitter} alt="Twitter" className="w-[18px] h-[18px]" />
          </div>
        </a>
        <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
          <div className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <img src={linkedin} alt="LinkedIn" className="w-[18px] h-[18px]" />
          </div>
        </a>
      </div>
    </div>
  );
};


export default SocialLinks