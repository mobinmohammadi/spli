import React from "react";
import AboutBrands from "./AboutBrands/AboutBrands";
import { useParams } from "react-router-dom";
import { allBrandLogo } from "../../../Data";
import BrandsItem from "./BrandsItem/BrandsItem";
import ItemSliderPreeSell from "../ItemSliderPreeSell/ItemSliderPreeSell";
import BoxesProducts from "./BoxesProducts/BoxesProducts";

export default function ForBarndsProducts() {
  const params = useParams().BrandName;
  console.log(params);

  const filterProductsByBrand = allBrandLogo.filter(
    (item) => item.name == params
  );

  const resultFilterProductsByBrand = filterProductsByBrand[0];

  return (
    <div className=" flex gap-5 pt-5 ">
      <AboutBrands />


      <div className="flex justify-center items-center mt-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-3">
          {resultFilterProductsByBrand.products.map((products) => (
            <BoxesProducts {...products} />
          ))}
        </div>
      </div>
    </div>
  );
}
