import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import CartComponent from "./components/cart";
import Section4 from "../../components/section4/section4";





const Cart = () => {
    return (
      <div className=" flex flex-col">
         <Header />
         <Banner title="Cart" subtitle="Home > Cart" />
          <CartComponent />
         <Section4 />
         <Footer />
         
      </div>
    );
  };
  export default Cart