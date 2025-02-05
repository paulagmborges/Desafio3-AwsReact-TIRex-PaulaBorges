import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import BannerSection from "../../components/HomeSection/BannerSection"
import BrowseSections from "../../components/HomeSection/BrowseSection";


const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <BannerSection />
      <BrowseSections />

      <Footer />

    </div>
  );
};
export default HomePage