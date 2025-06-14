import React, { useEffect, useState } from "react";
import FilterCategurtProducts from "./FilterCategurtProducts/FilterCategurtProducts";
import ContentCategurtProducts from "./ContentCategurtProducts/ContentCategurtProducts";
import RoadMapSite from "../RoadMapSite/RoadMapSite";
import TopBarMobile from "../TopBarMobile/TopBarMobile.";
import { useParams } from "react-router-dom";
import MobileFilterCateguryProducts from "./MobileFilterCateguryProducts/MobileFilterCateguryProducts";
import { allProducts } from "../../../Data";

export default function CategurtProducts() {
  const [arrayAllProducts, setArrayAllProducts] = useState(allProducts);
  const [isShowBoxCateguryByMobile, setIsShowBoxCateguryByMobile] =
    useState(false);
  const [valueSearchInCateguryPage, setValueSearchInCateguryPage] =
    useState("");
  const [filterByRange, setFilterByRange] = useState(0);

  const [isRowAndColumns, setIsRowAndColumns] = useState("row");
  const categuryName = useParams();
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
  useEffect(() => {
    let filtred = allProducts.filter(item => item.name.includes(valueSearchInCateguryPage) && item.price >= filterByRange)
    setArrayAllProducts(filtred)
  },[filterByRange , valueSearchInCateguryPage])
  return (
    <div className="flex pb-10">
      <div className="mt-30 w-full ">
        <RoadMapSite categury="دسته بندی ها" name={title} />
        <div className="container-custom">
          <div className="flex gap-5 mt-10 ">
            <div className="md:flex hidden">
              <FilterCategurtProducts
                setFilterByRange={setFilterByRange}
                setValueSearchInCateguryPage={setValueSearchInCateguryPage}
                setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              />
            </div>

            <ContentCategurtProducts
              arrayAllProducts={arrayAllProducts}
              setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
              isRowAndColumns={isRowAndColumns}
              setIsRowAndColumns={setIsRowAndColumns}
            />
          </div>
        </div>
      </div>
      <div className="">
        {isShowBoxCateguryByMobile && (
          <>
            <MobileFilterCateguryProducts
              isShowBoxCateguryByMobile={isShowBoxCateguryByMobile}
              setIsShowBoxCateguryByMobile={setIsShowBoxCateguryByMobile}
            />
            <div className="bg-black/20 fixed top-0 right-0 w-full h-full z-20"></div>
          </>
        )}
      </div>
    </div>
  );
}
