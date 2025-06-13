import React from "react";
import FilterCategurtProducts from "./FilterCategurtProducts/FilterCategurtProducts";
import ContentCategurtProducts from "./ContentCategurtProducts/ContentCategurtProducts";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";

export default function CategurtProducts() {
  const categuryName = useParams();
  console.log(categuryName.categuryProduct);
  let title = "";
  switch (categuryName.categuryProduct) {
    case "protein":
      title = "پروتعین وی";
      break;
    case "amino":
      title = "آمینو";
      break;
    case "gainer":
      title = "گینر";
      break;
    case "carbomas":
      title = "کربو مس";
      break;
    case "ceratin":
      title = "کراتین";
      break;
    case "testboaster":
      title = "تست بوستر";
      break;
    case "glotamin":
      title = "گلوتامین";
      break;
    case "moltivitamin":
      title = "مولتی ویتامین";
      break;
    case "bcaa":
      title = "بی سی ای ای";
      break;
    default: {
      title = "";
    }
  }

  return (
    <div className="flex">
      <div className="mt-22 w-full">
        <RoadMapSite categury="دسته بندی ها" name={title} />
        <div className="container-custom">
          <div className="flex gap-5 mt-10 ">
            <FilterCategurtProducts />
            {/* <ContentCategurtProducts /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
