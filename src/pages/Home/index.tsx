import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import BannerSection from "../../components/homeSection/BannerSection"
import BrowseSections from "../../components/homeSection/BrowseSection";
import Inspiration from "../../components/homeSection/SectionInspiration/Inspiration";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <BannerSection />
      <BrowseSections />
      <Inspiration />
      <Footer />

    </div>
  );
};
export default HomePage