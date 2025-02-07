import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import Filter from "./components/filterComponent";

const Shop = () => {
    return (
      <div className=" flex flex-col">
         <Header />
         <Banner title="Shop" subtitle="Home > Shop" />
         <Filter />
         <Footer />
      </div>
    );
  };
  export default Shop