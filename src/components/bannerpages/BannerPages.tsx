import BannerPage from '../../assets/img-component/bannerComponent.svg';
import logoHeader from '../../assets/icons/logoHeader.svg';

interface BannerProps {
  title: string;
  subtitle: string;
  showLogo?: boolean; 
}

const Banner = ({ title, subtitle, showLogo = true }: BannerProps) => {
  return (
    <div className="relative flex flex-col text-black items-center justify-center font-poppins mt-6">
      <img src={BannerPage} alt="Banner da loja" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-2">
        {showLogo && ( 
          <img src={logoHeader} alt="Logo do banner" className="w-[50px] h-[32px]" />
        )}
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;

