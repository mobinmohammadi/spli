import React from "react";
import FilterCategurtProducts from "./FilterCategurtProducts/FilterCategurtProducts";
import ContentCategurtProducts from "./ContentCategurtProducts/ContentCategurtProducts";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";

export default function CategurtProducts() {

    const categuryName = useParams()
    console.log(categuryName.categuryProduct)
    let title = ""
    switch(categuryName.categuryProduct){
        case  "protein" :
         title = "پروتعین وی"
         break
        default : {
            title = ""
        }
    }
    
    
  return (
    <div className="flex">
      <TopBarMobile />
      <div className="mt-22 w-full">
        <RoadMapSite categury="دسته بندی ها" name={title}   />
        <div className="flex gap-5">
          <FilterCategurtProducts />
          <ContentCategurtProducts />
        </div>
      </div>
    </div>
  );
}
