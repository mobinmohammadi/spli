import React, { useState } from "react";
import TopBarMobile from "../../assets/Components/TopBarMobile/TopBarMobile.";
import WrapperCateguryItem from "../../assets/wrapperCateguryItme/wrapperCateguryItem";
import BrandsSupplements from "../../assets/Components/BrandsSupplements/BrandsSupplements";
import ArticlesSections from "../../assets/Components/ArticlesSections/ArticlesSections";
import Footer from "../../assets/Components/Footer/Footer";
import MenuMobile from "../../assets/Components/MenuMobile/MenuMobile";
import SectionsPreeSellProducts from "../../assets/Components/SectionsPreeSellProducts/SectionsPreeSellProducts";
import Slider from "../../assets/Components/Slider/Slider";
import DiscriptionHome from "../../assets/Components/DiscriptionHome/DiscriptionHome";
import SectionsTitle from "../../assets/Components/SectionsTitle/SectionsTitle";
import FrequentlyAskedQuestions from "../../assets/Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import MySliderWithButtons from "../../assets/Components/LastSlider/LastSlider";
export default function Home() {
  const [arrayUserBaskets, setArrayUserBaskets] = useState([]);


  return (
    <>
      <TopBarMobile />
      <Slider />

      <WrapperCateguryItem />
      <div className="container-custom  pt-10  sm:pr-0 sm:pl-0 flex flex-col gap-10 pb-10 mt-10-custom">
        <SectionsPreeSellProducts setArrayUserBaskets={setArrayUserBaskets} />
        <div className="">
          <DiscriptionHome />
        </div>
        <MySliderWithButtons/>
        <BrandsSupplements />
        <ArticlesSections />
        <FrequentlyAskedQuestions />
      </div>
      <div className="mb-16">
        <Footer />
      </div>
      <div className="sm:hidden">

        <MenuMobile />
      </div>
    </>
  );
}
