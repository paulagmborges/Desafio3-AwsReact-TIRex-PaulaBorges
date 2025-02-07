import BannerPage from '../../assets/img-component/bannerComponent.svg';

interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="relative flex flex-col bg-custom2 text-black items-center justify-center font-poppins mt-6">
      <img src={BannerPage} alt="Banner da loja" className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
