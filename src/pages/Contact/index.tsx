import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import ContactInformation from "../Contact/components/contact";
import Section4 from "../../components/section4/section4";



const Contact = () => {
    return (
      <div className=" flex flex-col">
         <Header />
         <Banner title="Contact" subtitle="Home > Contact" />
         <ContactInformation />
         <Section4 />
         <Footer />
         
      </div>
    );
  };
  export default Contact