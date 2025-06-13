import React, { useEffect, useState } from "react";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import OnsPageContent from "./OnsPageContent/OnsPageContent";
import SliderProducts from "../SliderProducts/SliderProducts";
import Footer from "../Footer/Footer";
import { allProducts } from "../../../Data";
import { title } from "framer-motion/client";
import MyParallaxSwiper from "../SwiperSlide/SwiperSlide";

export default function OnsPageProducts() {
  const [arrayUserBasket, setArrayUserBasket] = useState([]);
  let [idProducts, setIdProducts] = useState(null);
  let [allPrices  ,setAllPrices] = useState(0)

  //  ==================== User Basket ============================

  let resultAfteStatusProductInDatabase = null;
  const addProductsToBasket = (productID) => {
    // console.log();

    resultAfteStatusProductInDatabase = allProducts.find(
      (product) => product.id == productID
    );
    console.log(resultAfteStatusProductInDatabase);
    let ss = null;

    setArrayUserBasket((prev) => {
      ss = prev;
      let exists = prev.find((item) => item.id == productID);
      if (exists) {
        return prev.map((item) =>
          item.id == productID ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...resultAfteStatusProductInDatabase, qty: 1 }];
      }
    });
  };

  // =====================Caculate All Price Products    =======================

  useEffect(() => {

    let sum = 0;  
    const allPriceInUserBaskets = arrayUserBasket.map(
      (products) => (sum += products.price)
    );
    setAllPrices(sum)
  },[arrayUserBasket])

  // ===========================================================================
  // ================================================================

  const pageID = useParams().ProductID;

  // ====================== Found Categury Prodauct Name ===========

  const nameBreadCrumb = allProducts.find((item) => item.id == pageID);
  let titleBreadCrumb = "";
  switch (nameBreadCrumb.categury) {
    case "creatin":
      {
        titleBreadCrumb = "کراتین";
      }
      break;
    case "gainer":
      {
        titleBreadCrumb = "گینر";
      }
      break;
    case "Growth hormone":
      {
        titleBreadCrumb = "هورمون رشد";
      }
      break;
    default: {
      titleBreadCrumb = "در حال توسعه";
    }
  }

  // ==============================================================

  return (
    <>
      <TopBarMobile allPrices={allPrices} arrayUserBasket={arrayUserBasket} />
      <div className="relative top-[90px]">
        <RoadMapSite
          name={nameBreadCrumb.name}
          titleBreadCrumb={titleBreadCrumb}
        />
        <OnsPageContent
          addProductsToBasket={addProductsToBasket}
          idProducts={idProducts}
          setIdProducts={setIdProducts}
        />
        <SliderProducts
          addProductsToBasket={addProductsToBasket}
          title="محصولات مرتبط"
        />
        <Footer />
      </div>
    </>
  );
}
