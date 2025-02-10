import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import Section4 from "../../components/section4/section4";
import CheckoutComponent from "../Checkout/components/Checkout";



const Checkout = () => {
    return (
      <div className=" flex flex-col">
         <Header />
         <Banner title="Contact" subtitle="Home > Contact" />
         <CheckoutComponent />
         <Section4 />
         <Footer />
         
      </div>
    );
  };
  export default Checkout