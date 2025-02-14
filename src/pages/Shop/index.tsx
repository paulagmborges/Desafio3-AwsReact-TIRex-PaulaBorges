import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/bannerpages/BannerPages";
import Filter from "./components/filterComponent";
import Section4 from "../../components/section4/section4"
import { useState } from "react";
import ListProductComponent from "../../components/productCard/listCardComponent";

const Shop = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className=" flex flex-col">
      <Header />
      <Banner title="Shop" subtitle="Home > Shop" showLogo={false} />
      <Filter openPopup={openPopup} currentPage={currentPage} total={total} totalPage={totalPage}/>
      <ListProductComponent title="" paginate={true} isPopupOpen={isPopupOpen} closePopup={closePopup} changeInfoPagination={({
    currentPage,
    total,
    totalPage
  }) => {
    setCurrentPage(currentPage)
    setTotal(total)
    setTotalPage(totalPage)
  }}/>
      <Section4 />
      <Footer />

    </div>
  );
};
export default Shop