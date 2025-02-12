import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import Filter from "./components/filterComponent";
import Section4 from "../../components/section4/section4"
import ProductsComponent from "./components/productsComponent";


const Shop = () => {
    return (
      <div className=" flex flex-col">
         <Header />      
         <Banner title="Shop" subtitle="Home > Shop" showLogo={false} />
         <Filter />
         <ProductsComponent />
         <Section4 />
         <Footer />
         
      </div>
    );
  };
  export default Shop