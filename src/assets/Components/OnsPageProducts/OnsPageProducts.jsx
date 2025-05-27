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

  const pageID = useParams().ProductID
  console.log(pageID.ProductID);

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
  console.log("titleBreadCrumb ========>" , titleBreadCrumb);
  
  console.log("nameBreadCrumb ===>" , nameBreadCrumb);
  
  





  return (
    <>

      <TopBarMobile arrayUserBasket={arrayUserBasket} />
      <div className='relative top-[90px]'>

        <RoadMapSite name={nameBreadCrumb.name}  titleBreadCrumb={titleBreadCrumb} />
        <OnsPageContent arrayUserBasket={arrayUserBasket} setArrayUserBasket={setArrayUserBasket} />
        <SliderProducts title="محصولات مرتبط" />
        <Footer />
      </div>
    </>
  )
}
