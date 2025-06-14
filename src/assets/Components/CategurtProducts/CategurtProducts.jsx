import React, { useState } from "react";
import FilterCategurtProducts from "./FilterCategurtProducts/FilterCategurtProducts";
import ContentCategurtProducts from "./ContentCategurtProducts/ContentCategurtProducts";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";
import MobileFilterCateguryProducts from "./MobileFilterCateguryProducts/MobileFilterCateguryProducts";

export default function CategurtProducts() {
  const [isShowBoxCateguryByMobile, setIsShowBoxCateguryByMobile] = useState(false);

  const [isRowAndColumns, setIsRowAndColumns] = useState("row");
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
    <div className="flex pb-10">
      <div className="mt-30 w-full ">
        <RoadMapSite categury="دسته بندی ها" name={title} />
        <div className="container-custom">
          <div className="flex gap-5 mt-10 ">
            <div className="md:flex hidden">
              <FilterCategurtProducts
                setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              />
            </div>

            <ContentCategurtProducts
              setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              isRowAndColumns={isRowAndColumns}
              setIsRowAndColumns={setIsRowAndColumns}
            />
          </div>
        </div>
      </div>
      <div className="z-30">
        {isShowBoxCateguryByMobile ? (
          <>
            <MobileFilterCateguryProducts
              isShowBoxCateguryByMobile={isShowBoxCateguryByMobile}
              setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
            />
          </>
        ) : null}

        <div className="bg-black/20 fixed top-0 w-full h-full z-20">sdfefad</div>
      </div>
    </div>
  );
}
