import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import BannerSection from "../../components/homeSection/BannerSection"
import BrowseSections from "../../components/homeSection/BrowseSection";
import ProductsSection from "../../components/homeSection/productsSection";
import Inspiration from "../../components/homeSection/SectionInspiration/Inspiration";
import Share from '../../components/homeSection/shareSection/shareSection'

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <BannerSection />
      <BrowseSections />
      <ProductsSection />
      <Inspiration />
      <Share />
       
      <Footer />

    </div>
  );
};
export default HomePage