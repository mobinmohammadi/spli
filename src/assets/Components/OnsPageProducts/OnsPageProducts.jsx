import React, { useEffect, useState } from 'react'
import TopBarMobile from '../TopBarMobile/TopBarMobile.'
import { useParams } from 'react-router-dom'
import RoadMapSite from '../RoadMapSite/RoadMapSite';
import OnsPageContent from './OnsPageContent/OnsPageContent';
import SliderProducts from '../SliderProducts/SliderProducts';
import Footer from "../Footer/Footer"
import { allProducts } from '../../../Data';
import { title } from 'framer-motion/client';

export default function OnsPageProducts() {
  const [arrayUserBasket, setArrayUserBasket] = useState([])
  let [idProducts, setIdProducts] = useState(null)

  //  ==================== User Basket ============================
const addProductsToBasket = (productID) => {
  const foundProduct = allProducts.find(product => product.id == productID);

  if (!foundProduct) return console.warn("Product not found:", productID);

  setArrayUserBasket(prev => {
    const exists = prev.find(item => item.id === productID);
    
    if (exists) {
      return prev.map(item =>
        item.id === productID
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      // همیشه qty: 1 به صورت دستی ست بشه تا مطمئن باشیم درست کار می‌کنه
      return [...prev, { ...foundProduct, qty: 1 }];
    }
  });
};
  
  





  // ==============================================================

  const pageID = useParams().ProductID

  // ====================== Found Categury Prodauct Name ===========

  const nameBreadCrumb = allProducts.find(item => item.id == pageID)
  let titleBreadCrumb = ""
  switch(nameBreadCrumb.categury){
    case "creatin" :{
         titleBreadCrumb = "کراتین"
      }
      break;
      case "gainer" :{
         titleBreadCrumb = "گینر"
      }
      break;
      case "Growth hormone" :{
         titleBreadCrumb = "هورمون رشد"
      }
      break;
      default : {

        titleBreadCrumb = "در حال توسعه"
      }
  }

  
  

  // ==============================================================




  return (
    <>

      <TopBarMobile arrayUserBasket={arrayUserBasket} />
      <div className='relative top-[90px]'>

        <RoadMapSite name={nameBreadCrumb.name}  titleBreadCrumb={titleBreadCrumb} />
        <OnsPageContent addProductsToBasket={addProductsToBasket} idProducts={idProducts} setIdProducts={setIdProducts} />
        <SliderProducts title="محصولات مرتبط" />
        <Footer />
      </div>
    </>
  )
}
