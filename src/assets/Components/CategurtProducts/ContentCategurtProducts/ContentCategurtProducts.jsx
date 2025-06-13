import React, { useEffect, useState } from "react";
import TopBarCateguryFilter from "./TopBarCateguryFilter/TopBarCateguryFilter";
import ItemSliderPreeSell from "./../../ItemSliderPreeSell/ItemSliderPreeSell";
import { allProducts } from "../../../../Data";
export default function ContentCategurtProducts({
  isRowAndColumns,
  setIsRowAndColumns,
}) {
  const [allDataProducts, setAllDataProducts] = useState(allProducts);
  const [titleCategury, setTitleCategury] = useState("پیش فرض");
  const [isStyleWrapperContentCategury, setIsStyleWrapperContentCategury] =
    useState(false);

  useEffect(() => {
    let newDataAfterCategury = [...allProducts];

    switch (titleCategury) {
      case "پیش فرض":
        newDataAfterCategury = allProducts;
        break;
      case "ارزان ترین":
        newDataAfterCategury = newDataAfterCategury.filter(
          (product) => product.price < 2000000
        );
        break;
      case "گران ترین":
        newDataAfterCategury = newDataAfterCategury.filter(
          (product) => product.price > 3000000
        );
        break;
      case "جدید ترین":
        newDataAfterCategury = newDataAfterCategury.slice(4, 8);
        break;

      case "پرفروش ترین":
        newDataAfterCategury = newDataAfterCategury.slice(6, 8);
        break;
      default: {
        newDataAfterCategury = [...allDataProducts];
        break;
      }
    }
    setAllDataProducts(newDataAfterCategury);
  }, [titleCategury]);
  useEffect(() => {
    setIsStyleWrapperContentCategury(false);
    const timer = setTimeout(() => {
      setIsStyleWrapperContentCategury(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [titleCategury]);
  return (
    <div className="flex flex-col items-center w-full pb-5 bg-white ">
      <div className="font-Dana pr-3 pt-3 rounded-sm text-xs   w-full">
        <TopBarCateguryFilter
          isRowAndColumns={isRowAndColumns}
          setIsRowAndColumns={setIsRowAndColumns}
          titleCategury={titleCategury}
          setTitleCategury={setTitleCategury}
        />
      </div>
      <div
        className={`${isRowAndColumns == "row" ? "flex flex-col" : "grid"}  w-full ${
          isStyleWrapperContentCategury
            ? "mt-8 opacity-100"
            : "mb-15  opacity-0 invisible"
        } grid-cols-2 transitions-custom x:grid-cols-3 sm:grid-cols-4 justify-center items-center gap-3  pr-3 pl-3`}
      >
        {allDataProducts.map((item) => (
          <ItemSliderPreeSell key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}
